export interface BranchOffice {
  id: string;
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  altPhone?: string;
  email: string;
  mapEmbedUrl: string;
  lat: number;
  lng: number;
  workingHours: string;
  isHeadquarter?: boolean;
}

export interface StatItem {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
  description: string;
}

export const SITE_INFO = {
  name: "Dhrusti IT Security",
  legalName: "Dhrusti IT Security Private Limited",
  formerlyKnownAs: "Dhrusti IT & Security Centre",
  establishedYear: 2003,
  incorporatedYear: 2021,
  founder: {
    name: "Mr. Vidiyala Noothan Kumar",
    role: "Founder & Managing Director",
    credentials: [
      "Pioneered CCTV Internet Remote Streaming in Warangal (2003)",
      "9+ Years Banking Tech & ATM Infrastructure for State Bank of Hyderabad",
      "Lead Security Contractor: 800+ CCTV Cameras for 37th National Games Goa (2023)",
      "Founder of Newway Computers (1997) & SwadeshMart.com"
    ]
  },
  tagline: "Securing Every Angle, Protecting Every Moment",
  phonePrimary: "+91 86885 66688",
  phoneSecondary: "+91 89845 67456",
  phoneWarangal: "+91 93461 05589",
  email: "info@dhrusti.in",
  whatsapp: "918688566688",
  socialLinks: {
    facebook: "https://www.facebook.com/share/16bP9uchbU/",
    instagram: "https://www.instagram.com/noothankumar/",
    youtube: "https://www.youtube.com/@noothansdhrusti",
    linkedin: "https://www.linkedin.com/in/dhrusti-it-517290184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
};

export const STATS_DATA: StatItem[] = [
  {
    value: "50,000+",
    numeric: 50000,
    suffix: "+",
    label: "Cameras Installed",
    description: "High-definition IP, Solar, Bullet, Dome & PTZ units active across Telangana & AP."
  },
  {
    value: "1,000+",
    numeric: 1000,
    suffix: "+",
    label: "Enterprise Projects",
    description: "Successfully delivered for Government, Banks, Hospitals, Malls & Institutions."
  },
  {
    value: "20+",
    numeric: 20,
    suffix: "+",
    label: "Years of Excellence",
    description: "Uninterrupted security & surveillance leadership in the region since 2003."
  },
  {
    value: "50+",
    numeric: 50,
    suffix: "+",
    label: "Certified Engineers",
    description: "Prompt on-site technicians providing 24/7 technical support and rapid maintenance."
  }
];

export const BRANCHES: BranchOffice[] = [
  {
    id: "warangal-hq",
    name: "Warangal Corporate HQ",
    type: "Headquarters & Registered Office",
    address: "# 9-1-88, Markandeya Street, Opp. Padmashali Sangam, Girmajipet",
    city: "Warangal",
    state: "Telangana",
    pincode: "506002",
    phone: "+91 93461 05589",
    altPhone: "+91 89845 67456",
    email: "info@dhrusti.in",
    lat: 17.979091,
    lng: 79.5996296,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.5961920398312!2d79.56828248845052!3d18.00733846697183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a335bc9f0dbba39%3A0xad6035c36c02ea52!2sDHRUSTI%20IT%20SECURITY!5e0!3m2!1sen!2sin!4v1785827768033!5m2!1sen!2sin",
    workingHours: "10:00 AM – 7:30 PM (All 7 Days)",
    isHeadquarter: true
  },
  {
    id: "hyderabad-kondapur",
    name: "Hyderabad Tech Hub (Kondapur)",
    type: "Regional Flagship Experience Center",
    address: "Plot No. 187, 3rd Floor, Above Allen Solly Showroom, Raghavendra Colony, Kondapur",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500084",
    phone: "+91 86885 66688",
    altPhone: "+91 89845 67456",
    email: "hyderabad@dhrusti.in",
    lat: 17.4694476,
    lng: 78.3620208,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.946615419278!2d78.3620208!3d17.4694476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9385cb997f65%3A0x23f205ac0bad2762!2sDHRUSTI%20IT%20SECURITY%20-%20CCTV%2C%20BIOMETRIC%20and%20INTERCOM%20SERVICES%20IN%20KONDAPUR%2C%20HYDERABAD!5e1!3m2!1sen!2sin!4v1753767047439!5m2!1sen!2sin",
    workingHours: "24/7 Operations & Emergency Dispatch"
  },
  {
    id: "hanumakonda",
    name: "Hanamkonda Central Branch",
    type: "Sales & Support Center",
    address: "# 4-8-203, Opp. Hanamkonda Police Station, Ravi Book Stall Lane, Chowrastha",
    city: "Hanamkonda",
    state: "Telangana",
    pincode: "506001",
    phone: "+91 93461 05589",
    email: "info@dhrusti.in",
    lat: 18.007318,
    lng: 79.566649,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3794.385202660176!2d79.56664907517933!3d18.0073182829895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAwJzI2LjQiTiA3OcKwMzQnMDkuMiJF!5e0!3m2!1sen!2sin!4v1780391195729!5m2!1sen!2sin",
    workingHours: "10:00 AM – 7:30 PM"
  },
  {
    id: "kazipet",
    name: "Kazipet Junction Branch",
    type: "Field Service & Maintenance Unit",
    address: "H.No: 1-6-260/1, Main Road, Kazipet, Hanamkonda",
    city: "Kazipet",
    state: "Telangana",
    pincode: "506003",
    phone: "+91 89845 67456",
    email: "info@dhrusti.in",
    lat: 17.979872,
    lng: 79.599797,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.5961920398312!2d79.56828248845052!3d18.00733846697183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a335bc9f0dbba39%3A0xad6035c36c02ea52!2sDHRUSTI%20IT%20SECURITY!5e0!3m2!1sen!2sin",
    workingHours: "10:00 AM – 7:00 PM"
  }
];

export const CERTIFICATIONS = [
  {
    title: "CREDAI Hyderabad Certificate",
    image: "/images/CREDAI.png",
    description: "Official security vendor accreditation for top real estate & infrastructure projects."
  },
  {
    title: "Missiontech 2.0 Certificate",
    image: "/images/cer2.png",
    description: "Honored for excellence in technological advancement and smart surveillance integration."
  },
  {
    title: "Justdial Certificate",
    image: "/images/dh14.png",
    description: "Ranked #1 for CCTV sales, installation and customer satisfaction."
  },
  {
    title: "CP Plus Certificate",
    image: "/images/dh13.png",
    description: "Certified system integrator and warranty support provider for CP Plus products."
  },
  {
    title: "Certificate of Incorporation",
    image: "/images/fb.jpg",
    description: "Government of India Ministry of Corporate Affairs certified entity."
  },
  {
    title: "QAC Management Certificate",
    image: "/images/cer1.jpg",
    description: "Certified Quality Assurance & Control security compliance."
  },
  {
    title: "Govt of India Certificate",
    image: "/images/cer3.jpg",
    description: "Ministry of MSME & Trademark registered enterprise."
  },
  {
    title: "CP Plus Reseller Certificate",
    image: "/images/cp.jpeg",
    description: "Authorized Platinum Tier Reseller & System Integrator."
  },
  {
    title: "Missiontech Certificate",
    image: "/images/isac.jpg",
    description: "National Level Security System Integration accreditation."
  },
  {
    title: "Hi-Focus Certificate",
    image: "/images/hi.jpg",
    description: "Authorized Distribution & Warranty Center for Hi-Focus optics."
  },
  {
    title: "IASC Certificate",
    image: "/images/isac2.jpg",
    description: "Instrumentation Automation Surveillance and Access Control credential."
  }
];

export const PARTNERS_LOGOS = [
  { name: "CP Plus", logo: "/images/cp-plus.jpg" },
  { name: "Hikvision", logo: "/images/hik.jpg" },
  { name: "ESSL Security", logo: "/images/ess.png" },
  { name: "Trueview", logo: "/images/ture.png" },
  { name: "Securico", logo: "/images/image034.gif" },
  { name: "Hi-Focus", logo: "/images/image038.jpg" },
  { name: "CREDAI", logo: "/images/CREDAI.png" }
];

export const HOME_FAQS = [
  {
    q: "1. Who is the best CCTV Camera Dealer in Kondapur, Hyderabad, Warangal?",
    a: "Choosing a reliable CCTV Camera Dealer in Kondapur, Hyderabad, Warangal depends on product quality, installation expertise, and after-sales support. Dhrusti IT Security offers customized surveillance solutions for homes, offices, and commercial establishments with professional installation and maintenance services."
  },
  {
    q: "2. What are the benefits of installing a CCTV Camera in Kondapur, Hyderabad, Warangal?",
    a: "Installing a CCTV Camera in Kondapur, Hyderabad, Warangal helps improve security, monitor activities in real time, and deter theft or unauthorized access. Modern CCTV systems also provide remote viewing, allowing users to monitor their property from anywhere."
  },
  {
    q: "3. Why should businesses choose Commercial CCTV Solutions for their premises?",
    a: "Commercial CCTV Solutions provide comprehensive surveillance coverage for offices, retail stores, warehouses, and industrial facilities. These systems help improve employee safety, monitor operations, and provide valuable evidence in case of security incidents."
  },
  {
    q: "4. What is included in CCTV AMC Services?",
    a: "CCTV AMC Services typically include regular system inspections, camera cleaning, software updates, troubleshooting, and preventive maintenance. Regular AMC support helps ensure your surveillance system operates efficiently throughout the year with minimal downtime."
  },
  {
    q: "5. How do IP Camera Installation Services differ from traditional CCTV systems?",
    a: "IP Camera Installation Services use internet-based cameras that deliver high-definition video, remote access, and advanced features such as motion detection and cloud storage. They offer better image quality and greater flexibility compared to conventional analog CCTV systems."
  },
  {
    q: "6. Are Wireless CCTV Camera Solutions suitable for offices and commercial buildings?",
    a: "Yes, Wireless CCTV Camera Solutions are ideal for offices, retail spaces, and commercial properties where extensive wiring may not be practical. They offer easy installation, flexible camera placement, and seamless integration with existing Video Surveillance Systems and Access Control Systems for enhanced security management."
  }
];

