export interface Product {
  id: string;
  name: string;
  category: "cctv" | "access-control" | "recorders";
  tagline: string;
  badge: string;
  image: string;
  resolution?: string;
  connectivity?: string;
  powerSource?: string;
  description: string;
  keyFeatures: string[];
  specs?: Record<string, string>;
  isHeroFeatured?: boolean;
}

export const CCTV_FAQS = [
  {
    question: "What are the advantages of IP CCTV Cameras over traditional cameras?",
    answer: "IP CCTV Cameras provide high-definition video quality, remote access, advanced analytics, and better scalability. They are ideal for homes, offices, and commercial properties that require reliable and modern surveillance solutions."
  },
  {
    question: "Are Wireless CCTV Camera Solutions suitable for homes and businesses?",
    answer: "Yes, Wireless CCTV Camera Solutions offer flexible installation, reduced wiring requirements, and easy remote monitoring. They are a popular choice for residential and commercial security applications."
  },
  {
    question: "How do HD CCTV Cameras improve security monitoring?",
    answer: "HD CCTV Cameras capture clear and detailed footage, making it easier to identify people, vehicles, and activities. Higher image quality helps improve security investigations and overall surveillance effectiveness."
  },
  {
    question: "What are the benefits of Smart CCTV Cameras?",
    answer: "Smart CCTV Cameras come with advanced features such as motion detection, mobile alerts, AI-based monitoring, and remote viewing. These capabilities provide enhanced security and greater convenience for users."
  },
  {
    question: "Should I choose Outdoor CCTV Cameras or Indoor CCTV Cameras?",
    answer: "Outdoor CCTV Cameras are designed to withstand weather conditions and monitor external areas, while Indoor CCTV Cameras are ideal for monitoring rooms, offices, and indoor spaces. The right choice depends on your security requirements and installation location."
  },
  {
    question: "Why are Surveillance Cameras important for property security?",
    answer: "Surveillance Cameras help deter theft, monitor activities, and provide recorded evidence when needed. They offer continuous monitoring and help improve the overall safety of residential and commercial properties."
  }
];

export const VDP_FAQS = [
  {
    question: "What are the benefits of Video Door Phone Installation?",
    answer: "Video Door Phone Installation allows homeowners and businesses to see and communicate with visitors before granting access. This improves security and helps prevent unauthorized entry."
  },
  {
    question: "Why should businesses invest in Access Control System Installation?",
    answer: "Access Control System Installation helps regulate entry to restricted areas, improve workplace security, and monitor employee access. It provides greater control over who can enter specific locations."
  },
  {
    question: "How do Biometric Access Control Systems enhance security?",
    answer: "Biometric Access Control Systems use fingerprints, facial recognition, or other unique identifiers to verify users. This reduces the risk of unauthorized access and eliminates the need for traditional keys."
  },
  {
    question: "What are Smart Access Control Solutions?",
    answer: "Smart Access Control Solutions use advanced technologies such as mobile credentials, cloud management, and real-time monitoring. These systems provide flexible and efficient security management for modern businesses."
  },
  {
    question: "How do RFID Access Control Solutions work?",
    answer: "RFID Access Control Solutions allow authorized users to gain entry using RFID cards, tags, or key fobs. They provide quick, secure, and convenient access management for offices, schools, and commercial facilities."
  },
  {
    question: "What is the difference between Fingerprint Access Control and Card Access Control Systems?",
    answer: "Fingerprint Access Control uses biometric authentication to verify identity, while Card Access Control Systems rely on access cards or smart cards. Both solutions improve security, but biometric systems offer an additional layer of identity verification."
  },
  {
    question: "Why is an Employee Access Control System important?",
    answer: "An Employee Access Control System helps organizations track attendance, manage access permissions, and secure sensitive areas. It improves workplace security while providing detailed access records for management purposes."
  }
];

export const PRODUCTS: Product[] = [
  // CCTV Cameras (13 Items)
  {
    id: "solar-camera",
    name: "Solar Camera",
    category: "cctv",
    tagline: "100% Wire-Free Surveillance with Solar Power & High-Capacity Battery",
    badge: "Solar Powered",
    image: "/images/solare.jpg",
    resolution: "4K / 5MP Ultra HD",
    connectivity: "4G LTE / WiFi",
    powerSource: "Integrated High-Efficiency Solar Panel + Lithium Battery",
    description: "Designed for farmhouses, agricultural lands, construction projects, and remote areas without grid electricity. Continuous recording with PIR motion detection and mobile app streaming.",
    keyFeatures: [
      "Monocrystalline high-efficiency solar panel with long battery backup",
      "Full Color Night Vision with dual IR and white spotlight LEDs",
      "Two-way audio communication with built-in microphone & speaker",
      "IP67 Weatherproof rating for extreme outdoor weather conditions"
    ],
    isHeroFeatured: true
  },
  {
    id: "4g-linkage-camera",
    name: "4G Linkage Camera",
    category: "cctv",
    tagline: "Dual Screen Panoramic + PTZ Tracking in a Single Body",
    badge: "AI Dual Lens",
    image: "/images/link.jpeg",
    resolution: "Dual 4MP + 4MP (8MP Total)",
    connectivity: "4G SIM Card Support",
    powerSource: "DC 12V / Solar Compatible",
    description: "Simultaneously monitor a wide panoramic view and automatically zoom & track moving intruders with the secondary high-speed PTZ lens. Never miss a blind spot.",
    keyFeatures: [
      "Dual screen simultaneous live preview on smartphone",
      "Automatic humanoid tracking & vehicle shape detection",
      "Active siren alarm with flashing red/blue strobe lights",
      "Instant push alert with snapshot to mobile within 0.5s"
    ],
    isHeroFeatured: true
  },
  {
    id: "sim-camera",
    name: "SIM Camera",
    category: "cctv",
    tagline: "Instant Security Anywhere with Just a 4G Mobile SIM Card",
    badge: "Plug & Play",
    image: "/images/sim.jpg",
    resolution: "5MP Super HD",
    connectivity: "4G LTE (Airtel, Jio, Vi)",
    powerSource: "12V Power Adapter",
    description: "Insert any 4G SIM card and immediately start live streaming to your phone. Zero router setup or complex broadband wiring needed.",
    keyFeatures: [
      "Direct 4G Nano-SIM plug and play activation",
      "Smart IR Night Vision with crystal clarity",
      "Motion detection alerts sent to mobile app instantly",
      "Rugged metal alloy construction for harsh outdoor environments"
    ]
  },
  {
    id: "ip-camera",
    name: "IP Camera",
    category: "cctv",
    tagline: "Commercial Grade Network Surveillance with Intelligent AI Analytics",
    badge: "Enterprise Grade",
    image: "/images/IP2.jpg",
    resolution: "4K / 8MP (3840 x 2160)",
    connectivity: "Gigabit PoE (Power over Ethernet) RJ45",
    powerSource: "PoE 802.3af / 12V DC",
    description: "High-performance enterprise IP camera for corporate buildings, banks, jewelers, and industrial plants. Built-in smart analytics for facial recognition, perimeter intrusion, and line crossing.",
    keyFeatures: [
      "Crystal-clear 4K resolution at 30 frames per second",
      "True WDR 120dB for backlight and sunlight compensation",
      "Smart H.265+ video compression saving up to 70% storage",
      "Direct NVR integration with ONVIF Profile S/G/T"
    ]
  },
  {
    id: "bullet-camera",
    name: "Bullet Camera",
    category: "cctv",
    tagline: "Heavy-Duty Perimeter Surveillance with Long-Range Infrared Night Vision",
    badge: "Perimeter Guard",
    image: "/images/bullet.jpeg",
    resolution: "5MP / 4K UHD",
    connectivity: "BNC Analog HD / IP PoE",
    powerSource: "DC 12V",
    description: "Engineered for perimeter walls, highways, parking plazas, and gates requiring long-distance target recognition and license plate capture.",
    keyFeatures: [
      "Extended 60-meter smart infrared night vision array",
      "Motorized varifocal lens option from 2.7mm to 13.5mm",
      "IP67 weatherproof & IK10 vandal-resistant casing"
    ]
  },
  {
    id: "dome-camera",
    name: "Dome Camera",
    category: "cctv",
    tagline: "Aesthetic Low-Profile Design for Retail, Offices & Luxury Villas",
    badge: "Discreet Interior",
    image: "/images/dome.jpg",
    resolution: "4MP / 5MP HD",
    connectivity: "PoE / IP Network / Analog",
    powerSource: "PoE / 12V DC",
    description: "Sleek dome enclosure that blends seamlessly into ceiling interiors. Ideal for retail stores, restaurants, conference halls, and apartment lobbies.",
    keyFeatures: [
      "Wide 115° field of view covering entire rooms with zero blind spots",
      "Vandal-proof dome bubble resistant to tampering",
      "Built-in microphone for high clarity room audio"
    ]
  },
  {
    id: "4mp-solar-camera",
    name: "4MP Solar Camera",
    category: "cctv",
    tagline: "High-Efficiency 4MP Off-Grid Solar Surveillance Unit",
    badge: "Solar HD",
    image: "/images/solar2.jpg",
    resolution: "4MP High-Definition",
    connectivity: "4G LTE / WiFi",
    powerSource: "Dual Monocrystalline Solar Panel + Battery",
    description: "Compact, high-efficiency 4MP solar security camera designed for residential farms, outhouses, and perimeter gates.",
    keyFeatures: [
      "Continuous trickle-charging solar panel with intelligent power management",
      "PIR Human Body thermal motion sensor with ultra-low false alarms",
      "Clear two-way audio for remote guest greeting and deterrents"
    ]
  },
  {
    id: "wifi-camera",
    name: "Wifi Camera",
    category: "cctv",
    tagline: "Wireless Plug & Play Smart Security for Homes & Retail Counters",
    badge: "Smart Home",
    image: "/images/wifi.jpeg",
    resolution: "3MP / 4MP Super HD",
    connectivity: "Dual-Band WiFi (2.4GHz / 5GHz)",
    powerSource: "5V USB / 12V DC",
    description: "Simple, convenient wireless camera with 360° coverage, auto-motion tracking, two-way audio, and instant smartphone notifications.",
    keyFeatures: [
      "Swipe on phone screen to rotate camera 360°",
      "AI human motion tracking automatically follows moving visitors",
      "Two-way talk with clear echo cancellation",
      "MicroSD card recording up to 256GB"
    ]
  },
  {
    id: "ptz-camera",
    name: "PTZ Camera",
    category: "cctv",
    tagline: "Commercial Motorized Pan-Tilt-Zoom with 25X/30X Optical Zoom",
    badge: "360° PTZ",
    image: "/images/ptz2.jpg",
    resolution: "4K / 8MP Ultra HD",
    connectivity: "IP PoE+ / RS485 / Coaxial",
    powerSource: "AC 24V / High PoE",
    description: "Commercial high-speed PTZ camera capable of 360° continuous rotation and 30X optical zoom to read vehicle number plates and faces up to 300 meters away.",
    keyFeatures: [
      "360° endless pan speed up to 300°/sec and 90° auto-flip tilt",
      "High-power laser IR night vision reaching up to 150 meters",
      "Preset tour patrol routes with auto-tracking smart heuristics"
    ]
  },
  {
    id: "dvr-system",
    name: "DVR (Digital Video Recorder)",
    category: "recorders",
    tagline: "High-Definition 8/16/32 Channel Hybrid DVR for Coaxial & HD Cameras",
    badge: "HD-DVR",
    image: "/images/NVR.jpg",
    resolution: "Up to 5MP / 4K Recording",
    connectivity: "BNC Video In, HDMI, VGA, LAN",
    powerSource: "12V DC",
    description: "Reliable centralized recording hub for analog and HD coaxial camera systems with smart motion detection, mobile app playback, and long-term HDD archiving.",
    keyFeatures: [
      "H.265+ high-efficiency compression algorithm",
      "Simultaneous HDMI 4K and VGA video monitor outputs",
      "Dhrusti Mobile App live view and playback from anywhere"
    ]
  },
  {
    id: "ir-dome-camera",
    name: "IR Dome Camera",
    category: "cctv",
    tagline: "Vandal-Resistant Infrared Night-Vision Dome for Indoor & Outdoor Use",
    badge: "IR Night Vision",
    image: "/images/IPCAM.jpeg",
    resolution: "5MP High Definition",
    connectivity: "IP PoE / Analog HD",
    powerSource: "PoE / 12V DC",
    description: "Equipped with high-intensity infrared LEDs for crisp black-and-white night vision in 0 Lux complete darkness, housed in a tamper-resistant dome enclosure.",
    keyFeatures: [
      "Smart IR illumination preventing overexposure on close faces",
      "Wide-angle lens with crystal clear edge-to-edge sharpness",
      "Ceiling and wall flush-mount design"
    ]
  },
  {
    id: "nvr-system",
    name: "NVR (Network Video Recorder)",
    category: "recorders",
    tagline: "Enterprise 16/32/64 Channel 4K IP NVR with Built-In PoE Ports",
    badge: "Enterprise NVR",
    image: "/images/NVR.jpg",
    resolution: "Up to 12MP 4K Recording",
    connectivity: "Gigabit PoE Ports, Dual HDMI 4K Outputs",
    powerSource: "AC 100~240V",
    description: "Enterprise network video recorder with built-in PoE switch, multi-bay hard drive RAID storage, AI face recognition search, and central monitoring support.",
    keyFeatures: [
      "Direct plug-and-play PoE ports for IP cameras",
      "AI facial recognition and smart vehicle license plate search",
      "Multi-SATA bay supporting up to 40TB storage capacity"
    ]
  },
  {
    id: "ivr-system",
    name: "IVR / Intelligent Video Recorder",
    category: "recorders",
    tagline: "Intelligent Video Analytics Hub for Advanced AI Threat Detection",
    badge: "AI Analytics",
    image: "/images/IVR.jpg",
    resolution: "4K AI Processed Video",
    connectivity: "Gigabit Ethernet, Alarm I/O",
    powerSource: "AC 220V",
    description: "Specialized intelligent video recording server engineered for real-time deep learning analytics, crowd density estimation, perimeter tripwires, and automated alarms.",
    keyFeatures: [
      "Real-time video analytics server with GPU acceleration",
      "Integration with police control rooms and central monitoring CMS",
      "Automated WhatsApp and SMS siren dispatch integration"
    ]
  },

  // Video Door Phones & Access Control (8 Items)
  {
    id: "bio-metric-terminal",
    name: "Bio Metric",
    category: "access-control",
    tagline: "High-Precision Fingerprint & RFID Biometric Terminal",
    badge: "Biometric Access",
    image: "/images/bio.jpg",
    connectivity: "TCP/IP, USB, WiFi, Wiegand",
    powerSource: "12V DC with Battery Backup",
    description: "Industrial biometric terminal supporting up to 5,000 fingerprints with sub-second matching speed. Includes user-friendly payroll & attendance software.",
    keyFeatures: [
      "Rapid 0.2s fingerprint recognition algorithm",
      "Built-in RFID card reader and keypad PIN authentication",
      "Automatic sync with Dhrusti Cloud Attendance Software",
      "Push reports to HR Excel and WhatsApp"
    ]
  },
  {
    id: "card-access-lock",
    name: "Card Access",
    category: "access-control",
    tagline: "RFID Smart Card & Proximity Access Door Lock System",
    badge: "Card Access",
    image: "/images/Card.jpg",
    connectivity: "Wiegand / Standalone",
    powerSource: "12V DC",
    description: "Contactless smart card reader system ideal for corporate server rooms, office entryways, schools, and secure facilities.",
    keyFeatures: [
      "Fast 13.56MHz Mifare and 125KHz EM proximity card support",
      "Multi-door centralized controller integration",
      "Weatherproof IP65 outdoor keypad reader"
    ]
  },
  {
    id: "facial-recognition-terminal",
    name: "Facial Recognition",
    category: "access-control",
    tagline: "Contactless AI Face Recognition with Mask & Anti-Spoofing Detection",
    badge: "AI Biometrics",
    image: "/images/facial.jpeg",
    connectivity: "TCP/IP, WiFi, Wiegand Out",
    powerSource: "12V DC",
    description: "Next-gen dual-lens infrared face recognition terminal. Prevents photo/video spoofing and authenticates employees even in complete darkness or with masks.",
    keyFeatures: [
      "0.2 second face verification up to 2 meters distance",
      "Dual IR cameras prevent printed photo or video attack fraud",
      "Door lock trigger relay integration with magnetic EM locks",
      "Sub-second touchless employee attendance"
    ]
  },
  {
    id: "em-locks-system",
    name: "EM Locks (Electromagnetic Locks)",
    category: "access-control",
    tagline: "Heavy-Duty 600lbs / 1200lbs Magnetic Locks for Glass & Wooden Doors",
    badge: "Door Hardware",
    image: "/images/emlocks.jpeg",
    connectivity: "Relay Trigger / Access Controller",
    powerSource: "12V / 24V DC",
    description: "Fail-safe electromagnetic locks delivering up to 600lbs of holding force. Designed for frameless glass doors, wooden doors, and fire exit gates.",
    keyFeatures: [
      "600lbs / 280kg high-holding magnetic force",
      "Fail-safe operation unlocking automatically during fire alarms",
      "LED status indicator showing door lock / unlock status"
    ]
  },
  {
    id: "fingerprint-lock",
    name: "Fingerprint Lock",
    category: "access-control",
    tagline: "Direct Handle Biometric Fingerprint Lock for Modern Homes & Cabins",
    badge: "Keyless Living",
    image: "/images/finger.jpg",
    connectivity: "Standalone / Bluetooth",
    powerSource: "4x AAA Batteries",
    description: "Sleek smart door handle with an integrated fingerprint sensor on the grip for effortless 1-second entry into bedrooms, cabins, and private suites.",
    keyFeatures: [
      "Semiconductor biometric scanner on handle for single-touch entry",
      "Mechanical backup emergency key slot",
      "Low battery voice warning and emergency USB power port"
    ]
  },
  {
    id: "video-door-phone-intercom",
    name: "Video Door Phone",
    category: "access-control",
    tagline: "Smart Color Video Intercom with 7-Inch Monitor & Smartphone Call Forwarding",
    badge: "Smart VDP",
    image: "/images/dr.jpeg",
    resolution: "1080p Full HD Outdoor Camera",
    connectivity: "WiFi & 4-Wire Intercom System",
    powerSource: "12V Power Adapter",
    description: "See, hear, and speak with visitors at your doorstep without opening the door. Features a 7-inch indoor touchscreen monitor and smartphone app integration.",
    keyFeatures: [
      "7-inch ultra-slim tempered glass indoor display monitor",
      "Wide-angle doorbell camera with infrared night vision",
      "One-touch door unlock from monitor or mobile app",
      "Automatic visitor photo capture on doorbell ring"
    ]
  },
  {
    id: "time-attendance-fingerprint",
    name: "Time & Attendance (Fingerprint)",
    category: "access-control",
    tagline: "Automated Employee Attendance System with Payroll Integration",
    badge: "HR & Attendance",
    image: "/images/metr.jpg",
    connectivity: "LAN, WiFi, USB Drive Export",
    powerSource: "12V DC / Internal Backup Battery",
    description: "All-in-one attendance recorder with high-capacity fingerprint sensor, color screen, and automated monthly salary and overtime report generation.",
    keyFeatures: [
      "Tracks shift timings, late arrivals, leaves, and overtime",
      "Direct Excel export via USB pen drive or cloud dashboard",
      "Internal battery backup keeping system running during power cuts"
    ]
  },
  {
    id: "digital-smart-door-lock",
    name: "Digital Smart Door Lock",
    category: "access-control",
    tagline: "5-in-1 Luxury Smart Lock with Fingerprint, PIN, Card, App & Key",
    badge: "Luxury Smart Lock",
    image: "/images/finr.jpeg",
    connectivity: "Bluetooth / WiFi Gateway / Offline OTP",
    powerSource: "4x AA Batteries (12 Months Life) + Emergency USB",
    description: "Premium zinc-alloy digital smart lock featuring fingerprint scanner on the handle, anti-peep passcode touchpad, RFID smart cards, and mobile app unlock.",
    keyFeatures: [
      "5 Unlock Methods: Fingerprint, PIN, Smart Card, App, Key",
      "Generates timed OTP guest passcodes for visitors and housekeeping",
      "Automatic motor deadlock upon door closure",
      "Anti-tamper alarm triggers on forced entry attempts"
    ]
  }
];

