# Astrape Motors Static Site

Starter landing page and deployment workflow for Porkbun static hosting.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run quality
```

This runs format checks, lints HTML/CSS/JS, and builds production assets.

## Deploy to Porkbun FTP

1. Copy `.env.example` to `.env`.
2. Keep only non-secret FTP values in `.env` (`FTP_HOST`, `FTP_USER`, `FTP_KEYCHAIN_SERVICE`).
3. Save the FTP password in macOS Keychain:

```bash
security add-generic-password -U -a "astrapemotors.com" -s "astrape-motors-ftp" -w "YOUR_ROTATED_PASSWORD"
```

4. Build and deploy:

```bash
npm run build
npm run deploy:ftp
```

By default, deployment uploads the contents of `dist/` to `/`.
If Keychain is not configured, `FTP_PASSWORD` in `.env` is used as a fallback.
