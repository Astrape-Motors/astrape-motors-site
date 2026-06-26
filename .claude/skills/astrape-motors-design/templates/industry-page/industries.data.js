// Astrapē Motors — sector content (industry-page slots). One source of truth for the
// six market pages. The template shows Automotive; the site build swaps these in by id
// (indLabel / indName / indLede / indIntro / indSpecs / indF0..2). All four capabilities
// show on every sector — we are systems engineers; the sector is just where.
export const AUTOMOTIVE = {
  "name": "Automotive",
  "label": "GROUND MOBILITY",
  "lede": "Electric and hybrid drive, controlled and validated.",
  "intro": "We architect, integrate and validate electric and hybrid drive systems for passenger, commercial and off-highway vehicles — motor and inverter integration, supervisory control, and the rigs that prove it before it reaches the road.",
  "specs": [
    "EV DRIVE",
    "HYBRID",
    "SUPERVISORY CTRL",
    "HIL"
  ],
  "focus": [
    {
      "t": "Drive systems",
      "d": "Motor, inverter and battery integrated into one drivetrain that behaves predictably."
    },
    {
      "t": "Supervisory control",
      "d": "Torque, energy and thermal strategy across the whole vehicle — model-based and calibrated."
    },
    {
      "t": "Validation",
      "d": "HIL and bench rigs that catch failures before a prototype ever turns a wheel."
    }
  ]
};

export const SECTORS = {
  "marine": {
    "name": "Marine",
    "label": "SEA",
    "lede": "Electric propulsion you can trust offshore.",
    "intro": "Electric and hybrid propulsion, power management and automation for vessels where reliability isn't optional and the nearest workshop is a long way off.",
    "specs": [
      "E-PROPULSION",
      "POWER MGMT",
      "AUTOMATION",
      "CLASS"
    ],
    "focus": [
      {
        "t": "Electric propulsion",
        "d": "Motor and drive integration for new builds and repowers, sized for the vessel's load profile."
      },
      {
        "t": "Power management",
        "d": "Generation, storage and distribution coordinated so the bus stays up under any load."
      },
      {
        "t": "Automation",
        "d": "Monitoring, alarms and control automation built for the helm and the engine room."
      }
    ]
  },
  "industrial": {
    "name": "Industrial",
    "label": "PLANT",
    "lede": "Motion control that runs every shift.",
    "intro": "Factory automation, electric drives and motion control for production lines and heavy machinery — built to run a shift, every shift.",
    "specs": [
      "DRIVES",
      "MOTION",
      "PLC",
      "SAFETY"
    ],
    "focus": [
      {
        "t": "Electric drives",
        "d": "Drive selection, sizing and integration for conveyors, presses and rotating machinery."
      },
      {
        "t": "Motion control",
        "d": "Coordinated multi-axis motion, sequencing and closed-loop position and torque control."
      },
      {
        "t": "Line automation",
        "d": "PLC and supervisory logic that ties the cells together and keeps the line moving."
      }
    ]
  },
  "agricultural": {
    "name": "Agricultural",
    "label": "OFF-HIGHWAY",
    "lede": "Equipment built for the field.",
    "intro": "Electrified and autonomous off-highway equipment — tractors, harvesters and the control systems that run them through a season in the dirt.",
    "specs": [
      "OFF-HIGHWAY",
      "AUTONOMY",
      "HYBRID",
      "ISOBUS"
    ],
    "focus": [
      {
        "t": "Electrification",
        "d": "Hybrid and electric drivelines for off-highway equipment with brutal duty cycles."
      },
      {
        "t": "Controls",
        "d": "Implement control, hydraulics coordination and supervisory strategy for the whole machine."
      },
      {
        "t": "Autonomy",
        "d": "Sensing, guidance and the control loops behind autonomous and operator-assist functions."
      }
    ]
  },
  "energy": {
    "name": "Energy & Power",
    "label": "GRID EDGE",
    "lede": "Power electronics for the field.",
    "intro": "Stationary storage, microgrids and charging infrastructure — power electronics and controls built for the field, not the lab bench.",
    "specs": [
      "STORAGE",
      "MICROGRID",
      "CHARGING",
      "BMS"
    ],
    "focus": [
      {
        "t": "Storage systems",
        "d": "Battery system architecture, BMS integration and the power electronics around the pack."
      },
      {
        "t": "Microgrid controls",
        "d": "Source coordination, islanding and energy management across mixed generation and storage."
      },
      {
        "t": "Charging",
        "d": "Charger integration and control for fleet, marine and off-highway charging."
      }
    ]
  },
  "government": {
    "name": "Government & Defense",
    "label": "DEFENSE",
    "lede": "Powertrains that don't fail in the field.",
    "intro": "Ruggedized electric and hybrid powertrains for ground and marine platforms where failure isn't an option and the environment is the enemy.",
    "specs": [
      "GROUND",
      "MARINE",
      "RUGGED",
      "MIL-STD"
    ],
    "focus": [
      {
        "t": "Ruggedized drive",
        "d": "Electric and hybrid powertrains hardened for shock, vibration, temperature and EMI."
      },
      {
        "t": "Supervisory control",
        "d": "Fault-tolerant control and power management for mission-critical platforms."
      },
      {
        "t": "Validation",
        "d": "Environmental, HIL and platform test to the standard the mission demands."
      }
    ]
  }
};
