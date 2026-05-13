import { access } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { Client } from "basic-ftp";
import dotenv from "dotenv";

dotenv.config();

const required = ["FTP_HOST", "FTP_USER"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing required env vars: ${missing.join(", ")}`);
  process.exit(1);
}

function getPasswordFromKeychain() {
  if (process.platform !== "darwin") {
    return undefined;
  }

  const service = process.env.FTP_KEYCHAIN_SERVICE;
  if (!service) {
    return undefined;
  }

  const account = process.env.FTP_KEYCHAIN_ACCOUNT || process.env.FTP_USER;
  try {
    const result = execFileSync(
      "security",
      ["find-generic-password", "-a", account, "-s", service, "-w"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
    );
    return result.trim();
  } catch {
    return undefined;
  }
}

const ftpPassword = process.env.FTP_PASSWORD || getPasswordFromKeychain();
if (!ftpPassword) {
  console.error(
    "Missing FTP password. Set FTP_PASSWORD or configure Keychain via FTP_KEYCHAIN_SERVICE."
  );
  process.exit(1);
}

const distDir = path.resolve(process.cwd(), "dist");

try {
  await access(distDir);
} catch {
  console.error("Missing dist/ directory. Run `npm run build` first.");
  process.exit(1);
}

const client = new Client();
client.ftp.verbose = false;

try {
  await client.access({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: ftpPassword,
    secure: process.env.FTP_SECURE === "true"
  });

  const remoteDir = process.env.FTP_REMOTE_DIR || "/";
  await client.ensureDir(remoteDir);
  await client.clearWorkingDir();
  await client.uploadFromDir(distDir);
  console.log(`Deployed dist/ to ${remoteDir} on ${process.env.FTP_HOST}`);
} catch (error) {
  console.error("FTP deploy failed:", error.message);
  process.exit(1);
} finally {
  client.close();
}
