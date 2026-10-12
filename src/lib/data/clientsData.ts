export interface Testimonial {
  name: string;
  role: string;
  designation?: string;
  avatar: string;
  rating: number;
  text: string;
  badge?: string;
}

export interface ClientItem {
  name: string;
  category: "government" | "corporate" | "retail" | "healthcare" | "temple" | "education";
  logo: string;
  highlight?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. V. Ravinder, IPS",
    role: "Inspector General of Police / Commissioner",
    designation: "Indian Police Service",
    avatar: "/images/profile.jpg",
    rating: 5,
    badge: "Official Police Commendation",
    text: "Our office has been using DHRUSTI's CCTV solutions for over a year now, and their maintenance service has been fantastic. Any time we had a question or minor issue, their team responded promptly and professionally. Highly recommend!"
  },
  {
    name: "Dr. Tarun Joshi, IPS",
    role: "Commissioner of Police",
    designation: "Indian Police Service",
    avatar: "/images/profile.jpg",
    rating: 5,
    badge: "Government Security Commendation",
    text: "DHRUSTI delivered exactly what we needed — from the initial consultation to the installation and training. Their team was friendly, professional, and knowledgeable. We highly recommend DHRUSTI for anyone looking for reliable CCTV solutions."
  },
  {
    name: "Ambar Kishor Jha, IPS",
    role: "Superintendent of Police / DIG",
    designation: "Indian Police Service",
    avatar: "/images/profile.jpg",
    rating: 5,
    badge: "Law Enforcement Endorsement",
    text: "The security system installed by this team is top notch. The CCTV cameras are high quality, the installation was seamless, and the support team is always ready to help. I feel much safer knowing the premises are protected 24/7."
  },
  {
    name: "Sanjana Gummadi",
    role: "Luxury Villa Owner",
    designation: "Residential Client, Kondapur",
    avatar: "/images/profile.jpg",
    rating: 5,
    text: "I am extremely happy with the 4K CCTV and smart Video Door Phone installed at our villa in Kondapur. The video clarity on my phone is unbelievable even at night. Great support by Mr. Noothan Kumar and team!"
  },
  {
    name: "Shoeb Ahmed",
    role: "Managing Director, Retail Chain",
    designation: "Commercial Client, Warangal",
    avatar: "/images/profile.jpg",
    rating: 5,
    text: "Great response from Mr. Noothan Kumar. The service was amazing—clear and transparent about the product specifications and pricing. He explained everything well over the phone and showed deep technical knowledge."
  },
  {
    name: "Aravind Deva",
    role: "Operations Head",
    designation: "Commercial Enterprise",
    avatar: "/images/profile.jpg",
    rating: 5,
    text: "Dhrusti's AMC maintenance package is the best investment we made for our business complex. The regular health checks have kept our 64 cameras running without a single hour of downtime."
  }
];

export const CLIENTS: ClientItem[] = [
  // Government & Municipal
  { name: "Government of Telangana", category: "government", logo: "/images/cv11.png", highlight: "State Department Partner" },
  { name: "Greater Warangal Municipal Corporation (GWMC)", category: "government", logo: "/images/gwmc.jpg", highlight: "Civic Surveillance Hub" },
  { name: "Telangana State Police", category: "government", logo: "/images/15.png", highlight: "City Surveillance Partner" },
  { name: "37th National Games Goa 2023", category: "government", logo: "/images/nationalgames.png", highlight: "800+ Live Cameras Deployed" },
  { name: "Mulkanoor Co-operative Rural Bank", category: "corporate", logo: "/images/mulkanoor.png", highlight: "Rural Banking Network" },
  { name: "Mangalya Shopping Mall", category: "retail", logo: "/images/mangalya.png", highlight: "Multi-Floor Retail Security" },
  { name: "P.V. Narasimha Rao Telangana Veterinary University", category: "education", logo: "/images/vete.png", highlight: "University Campus CCTV" },
  { name: "BRS State Convention & Security", category: "government", logo: "/images/BRS.png", highlight: "Event Surveillance Grid" },
  
  // Healthcare & Diagnostics
  { name: "Apollo Clinic", category: "healthcare", logo: "/images/apollo.png", highlight: "Healthcare Clinic Security" },
  { name: "Kasam Fashions", category: "retail", logo: "/images/kmlogo.png", highlight: "Luxury Apparel Security" },
  { name: "Gravid Home", category: "corporate", logo: "/images/gravid.png", highlight: "Residential Automation" },
  { name: "Sharanya Hospital", category: "healthcare", logo: "/images/elevate.jpg", highlight: "Hospital ICU & Corridors" },
  { name: "Nagarjuna Dairy", category: "corporate", logo: "/images/Naga.png", highlight: "Dairy Processing Plant" },
  { name: "BSK Jewellers", category: "retail", logo: "/images/bsk.png", highlight: "High-Security Jewellery Vault" },
  { name: "Sammakka Saralamma Jathara", category: "temple", logo: "/images/sam.png", highlight: "Mega Pilgrim Surveillance" },
  { name: "Siri Jewellers", category: "retail", logo: "/images/siri.png", highlight: "Showroom CCTV Monitoring" },
  { name: "Pepe Jeans London", category: "retail", logo: "/images/pepe.png", highlight: "Brand Store Security" },
  { name: "KITS Engineering College Warangal", category: "education", logo: "/images/kits.png", highlight: "Campus Wide IP CCTV" },
  { name: "Vasavi Clubs International", category: "corporate", logo: "/images/vasavi.png", highlight: "Community Center Security" },
  { name: "Dolphin Children's Hospital", category: "healthcare", logo: "/images/dolphin.webp", highlight: "Pediatric Hospital Cameras" },
  { name: "New Sigmaa Hospital", category: "healthcare", logo: "/images/Sigma.png", highlight: "Multi-Speciality Security" },
  { name: "Aruna Finance Limited", category: "corporate", logo: "/images/aruna.png", highlight: "Financial Services CCTV" },
  { name: "Kids Care Hospital", category: "healthcare", logo: "/images/kidscare.png", highlight: "Child Care Surveillance" },
  { name: "SVAPPS Technologies", category: "corporate", logo: "/images/cv7.png", highlight: "IT Tech Park Access Control" },
  { name: "Hotel Ratna", category: "corporate", logo: "/images/ratna.png", highlight: "Hospitality Surveillance" },
  
  // Banking & Retail
  { name: "State Bank of India (SBI)", category: "corporate", logo: "/images/17.png", highlight: "ATM & Branch Surveillance" },
  { name: "Tata Gold Plus", category: "retail", logo: "/images/cv2.png", highlight: "High-Precision Jewellery CCTV" },
  { name: "Ramraj Cotton", category: "retail", logo: "/images/16.png", highlight: "Retail Showroom Grid" },
  { name: "Tanishq Jewellers", category: "retail", logo: "/images/cv3.png", highlight: "Diamond & Gold Vault CCTV" },
  { name: "Kalyanalakshmi Shopping Mall", category: "retail", logo: "/images/13.png", highlight: "Shopping Complex Surveillance" },
  { name: "US Polo Assn.", category: "retail", logo: "/images/14.png", highlight: "Apparel Store Loss Prevention" },
  { name: "The Arvind Store", category: "retail", logo: "/images/cv8.png", highlight: "Retail Outlet Security" },
  { name: "APGV Bank (Andhra Pradesh Grameena Vikas Bank)", category: "corporate", logo: "/images/cv9.png", highlight: "Regional Banking Security" },
  { name: "BSK Jewellers Pvt Ltd", category: "retail", logo: "/images/cv10.png", highlight: "Jewellery Retail & Biometrics" },

  // Sacred Temples & Heritage
  { name: "Bhadrakali Temple Warangal", category: "temple", logo: "/images/Ba.png", highlight: "Pilgrim & Temple Trust Security" },
  { name: "Kommala Jathara", category: "temple", logo: "/images/komma.png", highlight: "Festival Surveillance Hub" },
  { name: "Thousand Pillar Temple", category: "temple", logo: "/images/21.png", highlight: "Heritage Monument Security" },
  { name: "Siddeshwara Temple", category: "temple", logo: "/images/sidesh.png", highlight: "Sanctum & Perimeter Cameras" }
];

export interface PartnerItem {
  name: string;
  category: string;
  logo: string;
  description: string;
}

export const PARTNERS: PartnerItem[] = [
  { name: "CP PLUS", category: "Global Security Leader", logo: "/images/cp-plus.jpg", description: "Authorized Platinum System Integrator for CP PLUS 4K IP, HD, and AI camera solutions." },
  { name: "Hikvision", category: "Enterprise CCTV", logo: "/images/hik.jpg", description: "Certified installer for Hikvision DarkFighter, ColorVu, Thermal, and ANPR camera systems." },
  { name: "Dahua Technology", category: "Smart IoT & Video", logo: "/images/l2.png", description: "Strategic partner for Dahua WizSense and WizMind AI deep-learning analytics." },
  { name: "eSSL Security", category: "Biometrics & Access", logo: "/images/ess.png", description: "Authorized dealer for eSSL biometric fingerprint, face recognition, and turnstiles." },
  { name: "RSS Security Services", category: "Security Infrastructure", logo: "/images/image032.jpg", description: "Allied integration partner for physical guarding and rapid alarm response." },
  { name: "Securico", category: "Intrusion & Fire Alarms", logo: "/images/image034.gif", description: "Certified installer for Securico electronic burglary alarms and perimeter tripwires." },
  { name: "Matrix Comsec", category: "Telecom & EPABX", logo: "/images/image035.png", description: "Authorized partner for Matrix IP-PBX, digital EPABX systems, and unified intercoms." },
  { name: "Hi Focus", category: "CCTV & Video Surveillance", logo: "/images/image038.jpg", description: "Authorized distributor and installer for Hi-Focus HD and IP surveillance hardware." },
  { name: "Trueview", category: "Solar & 4G Wireless", logo: "/images/ture.png", description: "Partner for Trueview Solar 4G wire-free PTZ cameras and all-in-one surveillance." }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "media" | "awards" | "monitoring" | "events" | "installations" | "team";
  image: string;
  location?: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g01", title: "Dhrusti CCTV NEWS on Andhra Jyothi", category: "media", image: "/images/dh01.jpg", description: "Major Telugu daily Andhra Jyothi featuring Dhrusti's pioneering city surveillance projects." },
  { id: "g02", title: "Dhrusti CCTV NEWS on Sakshi", category: "media", image: "/images/dh02.jpg", description: "Coverage in Sakshi newspaper highlighting Dhrusti IT Security's crime prevention technology." },
  { id: "g03", title: "CP PLUS Award Ceremony", category: "awards", image: "/images/dn2.jpeg", description: "Receiving prestigious National Integrator of the Year award from CP PLUS leadership." },
  { id: "g04", title: "Missiontech Security Excellence Award", category: "awards", image: "/images/cpplus.png", description: "CP PLUS Missiontech recognition for highest quality installations in Telangana." },
  { id: "g05", title: "24/7 CCTV Live Monitoring Center", category: "monitoring", image: "/images/dn5.jpeg", description: "High-density monitoring operations room overseeing multi-site commercial feeds." },
  { id: "g06", title: "Dhrusti Annual Award Ceremony", category: "awards", image: "/images/dh2.jpeg", description: "Company leadership honored for outstanding public safety contribution." },
  { id: "g07", title: "Centralized Remote Monitoring Hub", category: "monitoring", image: "/images/dho3.jpeg", description: "Real-time AI alerts and cloud surveillance video wall management." },
  { id: "g08", title: "Authorized CCTV Dealer Operations", category: "installations", image: "/images/dn1.jpeg", description: "System diagnostics and enterprise firmware provisioning at Dhrusti tech lab." },
  { id: "g09", title: "Preventive AMC & Sensor Auditing", category: "installations", image: "/images/dh11.jpeg", description: "On-site optical lens servicing, power budget audits, and health diagnostics." },
  { id: "g10", title: "37th National Games Goa Surveillance", category: "events", image: "/images/goa.jpeg", description: "Turnkey security operations across Goa stadiums with 800+ live HD cameras." },
  { id: "g11", title: "Night-Vision Security Camera Monitoring", category: "monitoring", image: "/images/remote.jpeg", description: "Continuous low-light infrared perimeter protection for industrial facilities." },
  { id: "g12", title: "CCTV Cameras Grand Launching", category: "events", image: "/images/gather.jpeg", description: "Official inauguration of next-generation AI smart cameras." },
  { id: "g13", title: "Security Camera Dealer Network", category: "team", image: "/images/not.jpeg", description: "Founder Mr. Vidiyala Noothan Kumar demonstrating high-resolution optics." },
  { id: "g14", title: "Dhrusti Certified Engineering Team", category: "team", image: "/images/dht.jpeg", description: "Our certified team of technical field engineers and system integrators." },
  { id: "g15", title: "Inauguration of Smart CC Camera Project", category: "events", image: "/images/gg9.jpg", description: "Dignitaries inaugurating community surveillance network in Warangal." },
  { id: "g16", title: "Civic CCTV Surveillance Inauguration", category: "events", image: "/images/gg18.jpg", description: "Municipal ward surveillance launch with local police authorities." },
  { id: "g17", title: "CCTV News Coverage on Eenadu", category: "media", image: "/images/gj3.jpg", description: "Eenadu news feature on Dhrusti CCTV aiding law enforcement investigations." },
  { id: "g18", title: "CCTV Installation at Bhadrakali Temple", category: "installations", image: "/images/gg21.jpg", description: "Specialized non-invasive camera mounts preserving temple heritage architecture." },
  { id: "g19", title: "CCTV News Story in Andhra Jyothi", category: "media", image: "/images/gg4.jpg", description: "Press report on Dhrusti IT Security's rapid response and AMC reliability." },
  { id: "g20", title: "Annual CCTV Security Camera Meeting", category: "events", image: "/images/gg8.jpg", description: "Industry conference with manufacturers, distributors, and security heads." },
  { id: "g21", title: "CCTV Project Launched by Commissioner of Police", category: "events", image: "/images/ggg.jpg", description: "CP Warangal officially commissioning Dhrusti city surveillance project." },
  { id: "g22", title: "Historic Temple Secured by CCTV Cameras", category: "installations", image: "/images/gg2.jpg", description: "High-resolution pan-tilt-zoom cameras protecting temple sanctum and devotees." },
  { id: "g23", title: "Security Cameras Trusted by Public", category: "events", image: "/images/gg7.jpg", description: "Citizen awareness and safety workshop organized by Dhrusti IT Security." },
  { id: "g24", title: "Dhrusti Security Innovation Event", category: "events", image: "/images/gg1.jpg", description: "Showcasing AI face recognition, automatic number plate recognition, and smart VDP." },
  { id: "g25", title: "Dhrusti CCTV Control Room Operations", category: "monitoring", image: "/images/gj1.jpg", description: "24-screen video matrix monitoring sensitive public and private zones." },
  { id: "g26", title: "Real-Time Mobile App CCTV Monitoring", category: "monitoring", image: "/images/gg5.jpg", description: "Instant smartphone alerts and live 4K stream playback demonstration." },
  { id: "g27", title: "Multiplex & Theatre CCTV Installation", category: "installations", image: "/images/gj5.jpg", description: "High-crowd cinema hall coverage with zero-blind-spot wide-angle lenses." },
  { id: "g28", title: "Commercial Showroom Opening Security", category: "installations", image: "/images/gg23.jpg", description: "Complete retail security deployment with anti-theft alarms and dome cameras." },
  { id: "g29", title: "Bhadrakali Temple Grand Security Deployment", category: "installations", image: "/images/gg20.jpg", description: "Panoramic temple precinct coverage during annual Brahmotsavam festivities." },
  { id: "g30", title: "Thieves Apprehended via Dhrusti CCTV Footage", category: "media", image: "/images/gj2.jpg", description: "Newspaper report on police catching culprits with crisp Dhrusti HD video evidence." },
  { id: "g31", title: "Crime Check & Deterrence by CC Camera Grid", category: "media", image: "/images/gg10.jpg", description: "Media report on 80% reduction in street crime following camera installation." },
  { id: "g32", title: "CP PLUS Excellence Award", category: "awards", image: "/images/gg14.jpg", description: "Distinguished partner trophy presented at the CP PLUS National Conclave." },
  { id: "g33", title: "Bhadrakali Temple High-Elevation Camera Array", category: "installations", image: "/images/gg13.jpg", description: "Weather-resistant IP67 PTZ camera installation at temple entrance." },
  { id: "g34", title: "Dhrusti Leadership Meeting with CP Warangal", category: "events", image: "/images/gg22.jpg", description: "Strategic briefing with Warangal Police Commissioner on city safe-zone grid." },
  { id: "g35", title: "Bhadrakali Ring Road CCTV Camera Network", category: "installations", image: "/images/gg12.jpg", description: "Vehicle registration capture cameras installed along the arterial ring road." },
  { id: "g36", title: "CP PLUS National Felicitation Ceremony", category: "awards", image: "/images/gg15.jpg", description: "Honoring Dhrusti IT Security's 20+ years of uninterrupted service." },
  { id: "g37", title: "Vinayaka Nimajjanam Mega Surveillance", category: "events", image: "/images/gg16.jpg", description: "Drone-assisted and pole-mounted CCTV network for Ganesh immersion festival." },
  { id: "g38", title: "Official Appreciation from Warangal ACP", category: "awards", image: "/images/gg11.jpg", description: "Letter and memento of commendation from ACP for outstanding festival security." },
  { id: "g39", title: "Ganesh Nimajjanam Command Post Feeds", category: "events", image: "/images/gg17.jpg", description: "Live police feed control station during 100,000+ attendee immersion processions." }
];


