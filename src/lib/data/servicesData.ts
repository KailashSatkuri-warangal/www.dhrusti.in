export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  fullArticleParagraphs: string[];
  highlights: string[];
  scopeOfWork: string[];
}

export interface SecuritySolution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  fullArticleParagraphs: string[];
  features: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "cctv-installation",
    slug: "cctv-installation-services-in-warangal",
    title: "CCTV Installation Services in Warangal, Kondapur & Hyderabad",
    shortDesc: "End-to-end site survey, high-definition camera cabling, mounting, network configuration, and mobile synchronization in Warangal & Hyderabad.",
    fullDesc: "Secure your property with precision-installed CCTV systems tailored to your unique environment. Our CCTV installation services in Warangal, Hanamkonda, Kondapur and Hyderabad ensure comprehensive coverage and crystal-clear footage—protecting what matters most to you.",
    metaTitle: "CCTV Installation Services in Kondapur, Hyderabad, Warangal and Hanamkonda | Security Camera Installation",
    metaDescription: "Get professional CCTV installation services in Warangal, Kondapur, Hyderabad with Dhrusti. Secure your home or business with advanced surveillance solutions, expert setup, and reliable support. Contact us today!",
    iconName: "ShieldCheck",
    image: "/images/fit2.jpg",
    fullArticleParagraphs: [
      "Secure your property with precision-installed CCTV systems tailored to your unique environment. Our CCTV installation services in Warangal, Hanamkonda, Kondapur and Hyderabad ensures comprehensive coverage and crystal-clear footage—protecting what matters most to you. Whether it's a home, business, warehouse, or multi-storey complex, our expert team conducts a site analysis to recommend the best camera types, angles, and network configurations.",
      "We specialize in both wired and wireless CCTV setups using the latest in HD and IP-based technology, ensuring scalable and future-ready solutions. Each installation is meticulously planned to avoid blind spots and maximize visibility—day or night—with infrared and motion-detection options.",
      "Beyond just hardware, we integrate your CCTV with intuitive mobile and desktop interfaces, giving you full control and access at your fingertips. All installations are carried out to meet regulatory compliance and safety standards, with a focus on neat cabling, secure data routing, and tamper-proof equipment placement.",
      "Our goal is to create a surveillance system that not only protects but also deters threats. From residential homes to high-traffic commercial areas, we’ve helped hundreds of clients feel safer and more in control. Let us be your trusted partner in security. With our end-to-end support—from consultation to installation and beyond—you can focus on life and business while we handle your safety with technology that never sleeps."
    ],
    highlights: [
      "Zero blind-spot tactical placement engineering",
      "Concealed industrial-grade cabling and surge protection",
      "Instant setup on Android, iOS, Windows, and Mac apps",
      "Full manufacturer warranty and 1-year complimentary on-site support"
    ],
    scopeOfWork: [
      "Property vulnerability assessment & camera position mapping",
      "High-bandwidth Cat6 / Optical Fiber cabling deployment",
      "NVR / DVR network routing and cloud DDNS configuration",
      "User training for real-time monitoring and playback search"
    ]
  },
  {
    id: "maintanance-amc",
    slug: "maintanance-amc",
    title: "CCTV Camera Maintenance & AMC Services",
    shortDesc: "Comprehensive Annual Maintenance Contracts (AMC) with periodic preventive health checks, lens cleaning, and 24/7 emergency repair.",
    fullDesc: "Keeping your CCTV system in peak condition is just as important as installing it. Our Maintenance & AMC (Annual Maintenance Contract) services ensure that your security infrastructure remains reliable, efficient, and fully functional—365 days a year.",
    metaTitle: "CCTV Maintenance Services in Kondapur, Hyderabad and Warangal | CCTV Repair Services",
    metaDescription: "Dhrusti offers top-notch CCTV Maintenance Services in Kondapur, Hyderabad and Warangal. Ensure the safety and performance of your CCTV systems with regular checks and expert care from our professionals. Contact us today!",
    iconName: "Wrench",
    image: "/images/fitting.jpg",
    fullArticleParagraphs: [
      "Keeping your CCTV system in peak condition is just as important as installing it. Our Maintenance & AMC (Annual Maintenance Contract) services ensure that your security infrastructure remains reliable, efficient, and fully functional—365 days a year.",
      "With time, even the most robust CCTV systems can suffer from wear and tear, technical faults, storage issues, or software glitches. That’s why we offer comprehensive maintenance packages tailored to your specific setup. Whether it’s periodic inspections, cleaning camera lenses, re-aligning angles, checking cable integrity, or updating firmware, we handle every detail proactively.",
      "Our AMC plans are designed to minimize downtime and extend the lifespan of your equipment. We offer both preventive and corrective maintenance, along with priority support and timely repairs. From small residential units to large-scale commercial establishments, our clients benefit from regular health checks, system optimization, and emergency response whenever needed.",
      "You’ll also receive detailed maintenance reports, performance reviews, and expert recommendations to improve coverage and adapt to evolving security threats. Our trained technicians are just a call away—ready to troubleshoot, replace faulty hardware, or upgrade software as part of your package. With us, there’s no guesswork—just dependable support and peace of mind.",
      "Choose a plan that works best for your budget and security needs. With our Maintenance & AMC services, your surveillance system stays sharp, responsive, and one step ahead—so you don’t miss a moment that matters."
    ],
    highlights: [
      "Guaranteed priority on-site technician response",
      "Quarterly optical lens polishing, refocusing, and cable inspection",
      "Preventive HDD data integrity checks and firmware patches",
      "Standby replacement camera units during hardware repairs"
    ],
    scopeOfWork: [
      "Routine quarterly preventive maintenance visits",
      "24/7 hotline support and priority breakdown dispatch",
      "Power adapter, BNC/RJ45 connector, and junction box testing",
      "Detailed health audit report submitted to premises manager"
    ]
  },
  {
    id: "system-upgrades",
    slug: "system-upgrades",
    title: "CCTV Camera System Upgrades",
    shortDesc: "Upgrade legacy grainy analog cameras to modern 4K IP, AI human/vehicle detection, and cloud-connected systems without re-wiring.",
    fullDesc: "Technology evolves fast—and so do security threats. If your current CCTV system is outdated, limited in coverage, or lacking in features, our System Upgrade service is the perfect solution to bring it up to speed with today’s surveillance standards.",
    metaTitle: "CCTV System Upgrade Services in Kondapur, Hyderabad, Warangal and Hanamkonda",
    metaDescription: "Dhrusti offers top-notch CCTV system upgrade services Kondapur, Hyderabad, Warangal and Hanamkonda, ensuring enhanced security with the latest technology. Upgrade your surveillance systems today for seamless performance and safety!",
    iconName: "Cpu",
    image: "/images/upgrade.jpg",
    fullArticleParagraphs: [
      "Technology evolves fast—and so do security threats. If your current CCTV system is outdated, limited in coverage, or lacking in features, our System Upgrade service is the perfect solution to bring it up to speed with today’s surveillance standards.",
      "An upgrade doesn’t mean starting over. We evaluate your existing infrastructure and recommend smart, cost-effective enhancements that improve performance without unnecessary replacements. Whether it's upgrading analog cameras to HD or IP cameras, expanding storage capacity, integrating AI-powered analytics, or switching to cloud-based monitoring, we customize the upgrade to your unique needs.",
      "Older systems often struggle with poor image quality, limited night vision, slow response times, and compatibility issues. Our experts modernize your setup with cutting-edge features like motion detection, facial recognition, real-time alerts, remote access, and higher resolution imaging—ensuring you're equipped to handle modern security challenges. We also focus on future-proofing. That means scalable architecture, smarter interfaces, and integration with other security solutions like access control or fire alarms. You'll not only get a better system—you’ll get a smarter one.",
      "Our upgrade process is seamless, with minimal disruption to your operations. From assessment and planning to hardware replacement and reconfiguration, we ensure every aspect is handled professionally and efficiently. Don't let outdated technology hold back your safety. Invest in a system that grows with your security needs. With our System Upgrade service, you’re not just catching up—you’re staying ahead."
    ],
    highlights: [
      "Upgrade to 4K / 5MP using existing wiring to cut costs",
      "Add AI facial recognition and perimeter intrusion alarms",
      "Transition from local-only storage to secure cloud backup",
      "Trade-in buyback discounts on legacy DVR hardware"
    ],
    scopeOfWork: [
      "System audit of existing camera lines and power supplies",
      "Direct drop-in replacement with AI HD / IP camera units",
      "Central software dashboard upgrade with mobile push notifications"
    ]
  },
  {
    id: "remote-monitoring-setup",
    slug: "remote-monitoring-setup",
    title: "Remote CCTV Monitoring Setup",
    shortDesc: "Watch live 4K streams of your home, shop, or factory from anywhere in the world on your smartphone or PC.",
    fullDesc: "In today’s fast-paced world, being physically present to monitor your property 24/7 isn’t always possible. That’s where our Remote Monitoring Setup comes in—giving you eyes on your premises, anytime, from anywhere.",
    metaTitle: "Remote CCTV Monitoring System in Kondapur, Hyderabad, Warangal and Hanamkonda | Remote CCTV Monitoring Service Near Me",
    metaDescription: "Ensure safety with Dhrusti's Remote CCTV Monitoring System in Kondapur, Hyderabad, Warangal and Hanamkonda. 24/7 real-time surveillance for your home, business, or property, offering unmatched security and peace of mind.",
    iconName: "Radio",
    image: "/images/remote3.jpeg",
    fullArticleParagraphs: [
      "In today’s fast-paced world, being physically present to monitor your property 24/7 isn’t always possible. That’s where our Remote Monitoring Setup comes in—giving you eyes on your premises, anytime, from anywhere. We specialize in configuring secure, high-performance remote access for your CCTV systems using the latest technologies. Whether you want to view live footage on your smartphone, receive instant alerts, or playback recordings on your laptop while traveling, we make it simple and seamless.",
      "Our setup includes everything: secure cloud connectivity, user-friendly mobile and desktop apps, and encrypted access protocols to protect your privacy. You’ll have real-time insights into what’s happening at your home, office, shop, or warehouse—empowering you to take immediate action in case of suspicious activity. We tailor each remote monitoring solution based on your network, camera system, and usage preferences. From setting up multi-location viewing to linking with motion sensors and push notifications, we provide full control in your hands—literally.",
      "Our team ensures a hassle-free experience, with step-by-step guidance, training, and ongoing support. We don’t just connect your system to the internet; we make it smart, secure, and simple to use. Whether you're a business owner needing after-hours surveillance or a homeowner wanting peace of mind while away, our Remote Monitoring Setup keeps you connected—24/7, from anywhere in the world. Your property. Your control. Your peace of mind—remotely."
    ],
    highlights: [
      "Sub-second low-latency streaming on cellular 4G/5G/WiFi",
      "Multi-user role management (Admin, Security Guard, Family)",
      "Instant push notifications when motion or intrusion is detected",
      "Remote PTZ pan, tilt, and zoom controls directly in the app"
    ],
    scopeOfWork: [
      "Static IP / Cloud P2P network configuration",
      "Multi-device pairing on phones, tablets, laptops, and smart TVs",
      "Motion detection zone masking to avoid false wind/tree alarms"
    ]
  },
  {
    id: "event-surveillance",
    slug: "event-surveillance",
    title: "Event Surveillance Solutions",
    shortDesc: "Turnkey temporary CCTV camera systems, wireless links, and on-site command centers for mega events, political rallies, and temple jatharas.",
    fullDesc: "Every event—big or small—deserves to be safe, secure, and stress-free. Our Event Surveillance solutions are designed to provide robust, real-time security monitoring for weddings, corporate functions, political rallies, public festivals, exhibitions, and private parties.",
    metaTitle: "Event CCTV Camera Surveillance Kondapur, Hyderabad, Warangal and Hanamkonda | Dhrusti IT Security",
    metaDescription: "Dhrusti provides top-notch event surveillance systems in Kondapur, Hyderabad, Warangal and Hanamkonda, ensuring reliable security with advanced CCTV cameras and monitoring solutions for your events. Trust us for seamless safety and peace of mind!",
    iconName: "Video",
    image: "/images/video.jpg",
    fullArticleParagraphs: [
      "Every event—big or small—deserves to be safe, secure, and stress-free. Our Event Surveillance solutions are designed to provide robust, real-time security monitoring for a wide range of occasions including weddings, corporate functions, political rallies, public festivals, exhibitions, and private parties.",
      "Temporary doesn’t mean compromised. We bring the same level of precision and protection to event-based CCTV monitoring as we do for permanent installations. Our team handles everything—from site inspection and risk assessment to rapid camera deployment and control room setup—ensuring complete coverage from start to finish.",
      "We use high-definition, night-vision-enabled, and weather-resistant cameras placed strategically across the venue. Whether you need entry/exit monitoring, crowd control observation, VIP area protection, or backstage security, our systems capture every detail. Our mobile command units and remote viewing options also let organizers and security teams monitor the event live from anywhere.",
      "In addition, we provide on-site surveillance operators and backup recording for post-event review or evidence if needed. Our systems are discreet, reliable, and scalable—ideal for both indoor and outdoor events. With real-time alerts and motion detection, we help prevent incidents before they escalate. We understand that event security is not just about cameras—it's about peace of mind, smooth coordination, and fast response. Don’t leave safety to chance. With our event surveillance setup, your focus can stay on the celebration while we focus on the safety."
    ],
    highlights: [
      "Proven track record: 800+ cameras deployed for National Games Goa 2023",
      "Rapid deployment within 24-48 hours with standalone power & solar",
      "High-elevation PTZ towers for crowd scanning and traffic flow",
      "Dedicated on-site command center operators and live police feeds"
    ],
    scopeOfWork: [
      "Event venue perimeter and choke-point coverage layout",
      "Wireless Long-Range point-to-point transmission towers",
      "Live multi-screen command console setup with video wall"
    ]
  },
  {
    id: "cctv-on-hire-basis",
    slug: "cctv-on-hire-basis",
    title: "CCTV On Hire Basis (Rental Services)",
    shortDesc: "Cost-effective rental surveillance systems for short-term construction projects, weddings, exhibitions, and temporary warehouses.",
    fullDesc: "Looking for a reliable and budget-friendly way to secure your premises for a short period? Our CCTV on hire basis service is the ideal solution for temporary surveillance needs.",
    metaTitle: "CCTV Rental Services in Kondapur, Hyderabad, Warangal and Hanamkonda | CCTV On Rent Services",
    metaDescription: "Find reliable CCTV rental services in Kondapur, Hyderabad, Warangal and Hanamkonda with Dhrusti! Affordable, high-quality security camera solutions for events, businesses, and homes. Ensure safety with our seamless installation and support.",
    iconName: "Clock",
    image: "/images/brs.jpeg",
    fullArticleParagraphs: [
      "Looking for a reliable and budget-friendly way to secure your premises for a short period? Our CCTV on hire basis service is the ideal solution for temporary surveillance needs. Whether you’re organizing an event, managing a construction site, or simply need short-term security for your home or office, we provide high-quality CCTV cameras on rent, saving you from the hassle of long-term investment or maintenance. With our rental service, you get access to the latest CCTV technology without the upfront cost of purchasing. We understand that not all security needs are permanent, and that’s why we offer a flexible and convenient rental option. From a single day to several months, you can choose the duration that suits your requirement, and we’ll take care of the rest – from delivery and installation to live monitoring and support.",
      "Our CCTV cameras come with crystal-clear video quality, night vision, motion detection, and even remote access capabilities, so you can keep an eye on things from your mobile device no matter where you are. Whether it's a wedding, political rally, exhibition, or a VIP visit, we ensure complete surveillance coverage tailored to your event or location. You don't have to worry about technical issues either – our expert team is available throughout the rental period to provide assistance and ensure smooth functioning of the system. We believe security should be simple, affordable, and stress-free. That’s exactly what our hire service is designed to deliver. So why invest in a full setup when you only need it for a short time? With our CCTV on hire, you get professional-grade security, flexible rental plans, and total peace of mind — all at a fraction of the cost. Reach out to us today and let’s make your temporary surveillance, permanently hassle-free!"
    ],
    highlights: [
      "Flexible rental durations from 3 days to 24 months",
      "Zero hardware investment or depreciation risk",
      "Includes complete installation, maintenance, and teardown",
      "4G SIM card data included for instant remote access"
    ],
    scopeOfWork: [
      "Fast on-site delivery and rapid mounting",
      "24/7 technical assistance throughout the rental tenure",
      "Safe uninstallation and data handover at project conclusion"
    ]
  },
  {
    id: "central-monitoring-system",
    slug: "central-monitoring-system",
    title: "CCTV Central Monitoring System (CMS)",
    shortDesc: "Unify hundreds of branch locations, retail outlets, or ATMs into a single central security control room.",
    fullDesc: "At DHRUSTI, we understand that security doesn’t stop at installing cameras — it’s about being alert and responsive 24/7. That’s why our Central Monitoring System (CMS) service brings you complete control and peace of mind with real-time surveillance and rapid incident response, all from one centralized hub.",
    metaTitle: "CCTV Central Monitoring System in Kondapur, Hyderabad, Warangal and Hanamkonda",
    metaDescription: "Dhrusti offers top-notch CCTV Central Monitoring System solutions in Kondapur, Hyderabad, Warangal and Hanamkonda. Ensure enhanced security with real-time surveillance, 24/7 monitoring, and advanced technology tailored to your needs",
    iconName: "MonitorCheck",
    image: "/images/cms2.jpeg",
    fullArticleParagraphs: [
      "At DHRUSTI, we understand that security doesn’t stop at installing cameras — it’s about being alert and responsive 24/7. That’s why our Central Monitoring System (CMS) service brings you complete control and peace of mind with real-time surveillance and rapid incident response, all from one centralized hub.",
      "Our CMS setup is designed to link multiple CCTV cameras — across different locations — into a single, secure monitoring point. Whether it’s a residential complex, a commercial establishment, or an industrial facility, our centralized system ensures that every camera feed is continuously watched by trained personnel. Any suspicious activity is flagged instantly and escalated to the concerned authorities or on-ground teams.",
      "With advanced features like smart motion detection, event-based recording, remote access, and real-time alerts, our Central Monitoring System helps you stay ahead of threats before they become problems. Plus, our system is scalable — ideal for businesses with multiple branches or for property developers managing several sites.",
      "The best part? You don’t need to worry about technical complexities. We handle the complete setup, network integration, software configuration, and ongoing maintenance. You get a robust security backbone that works silently but powerfully in the background. Choose DHRUSTI’s Central Monitoring System — because in a world where every second matters, having eyes everywhere is not just a luxury, it's a necessity."
    ],
    highlights: [
      "Centralized multi-site dashboard supporting 500+ locations",
      "Automated health heartbeat checks for all branch cameras",
      "Centralized video backup preventing on-site footage theft",
      "Direct integration with central fire and burglary alarms"
    ],
    scopeOfWork: [
      "Central server architecture and static IP gateway deployment",
      "Video management software (VMS) multi-tier setup",
      "Custom trigger rule configuration and automated escalation"
    ]
  },
  {
    id: "telephone-intercom",
    slug: "telephone-intercom",
    title: "Telephone Intercom Services in Warangal & Hyderabad",
    shortDesc: "Internal audio and video intercom communication systems for residential apartments, gated villas, and commercial complexes.",
    fullDesc: "Stay connected like never before with DHRUSTI's state-of-the-art Telephone Intercom Systems, designed to make communication within your home, office, or building seamless and secure.",
    metaTitle: "Telephone Intercom Services in Kondapur, Hyderabad, Warangal and Hanamkonda | Telephone Intercom Installation Near Me",
    metaDescription: "Dhrusti IT Security offers reliable telephone intercom services in Kondapur, Warangal — installation, repair & maintenance for homes and businesses.",
    iconName: "PhoneCall",
    image: "/images/phone.png",
    fullArticleParagraphs: [
      "Stay connected like never before with DHRUSTI's state-of-the-art Telephone Intercom Systems, designed to make communication within your home, office, or building seamless and secure. At DHRUSTI, we understand the importance of clear, instant communication — and our telephone intercom solutions deliver just that.",
      "Why Choose a Telephone Intercom? Imagine the convenience of speaking with someone at your front gate, a security post, or a neighboring office without having to physically walk there. Telephone intercom systems from DHRUSTI allow you to connect multiple rooms or departments effortlessly, control access points like gates and doors remotely, enhance overall security by verifying visitors before granting access, and reduce unnecessary movement.",
      "Advanced Features for Modern Needs: Our telephone intercom systems integrate seamlessly with your existing security network. Key features include hands-free or handset operation, integration with CCTV cameras for visual visitor verification, door release controls, and expandable options to accommodate multiple users or rooms.",
      "Seamless Integration with CCTV: At DHRUSTI, we specialize in integrating telephone intercom systems with your CCTV setup. You can see and talk to visitors simultaneously, making your security more robust and efficient. Grant or deny access at the press of a button, reducing the risk of unauthorized entry.",
      "Residential and Commercial Applications: Whether you're a homeowner looking to enhance your family's safety or a business manager needing secure office communication, DHRUSTI's telephone intercom systems cater to all apartments, gated communities, corporate offices, and warehouses."
    ],
    highlights: [
      "Direct visitor verification between security gate and residents",
      "Zero intercom calling charges across entire premises",
      "Supports 8 lines up to 500+ internal extension lines",
      "Crystal-clear audio with echo cancellation"
    ],
    scopeOfWork: [
      "Multi-pair armored telephone cabling deployment",
      "Main Distribution Frame (MDF) box wiring and extension tagging",
      "Doorbell intercom station installation and testing"
    ]
  },
  {
    id: "epabx",
    slug: "epabx",
    title: "EPABX Switchboard Services & Repair",
    shortDesc: "Enterprise EPABX switchboard sales, programming, extension expansion, and 24/7 breakdown repair service.",
    fullDesc: "At DHRUSTI, we believe that strong communication builds strong businesses. That’s why we offer reliable and advanced EPABX (Electronic Private Automatic Branch Exchange) services to help organizations streamline their internal and external calling systems.",
    metaTitle: "EPABX Services in Kondapur, Hyderabad, Warangal and Hanamkonda | EPABX Installation Near Me | EPABX Repair Service",
    metaDescription: "Dhrusti IT Security offers expert EPABX services in Warangal & Kondapur, delivering reliable business communication solutions with top-notch support. Contact us today!",
    iconName: "PhoneCall",
    image: "/images/epabx.png",
    fullArticleParagraphs: [
      "At DHRUSTI, we believe that strong communication builds strong businesses. That’s why we offer reliable and advanced EPABX (Electronic Private Automatic Branch Exchange) services to help organizations streamline their internal and external calling systems. Whether you run an office, hospital, school, or hotel, our EPABX solutions make communication easier, faster, and more efficient.",
      "EPABX is a private telephone network used inside organizations to manage and route calls efficiently. Instead of setting up individual landlines for each employee or department, EPABX allows you to connect all your users through one powerful system. You can make internal calls without using external phone lines and also manage external calls smartly. This system not only saves money but also improves communication flow within your organization.",
      "At DHRUSTI, we offer complete, end-to-end EPABX solutions tailored to your unique needs: Complete Installation for businesses of all sizes; Fast Repairs & Technical Support; System Upgrades & Line Expansion; Annual Maintenance Contracts (AMC); and Customized hybrid analog/IP setups.",
      "Expertise You Can Trust: Our team has years of experience in EPABX installation and maintenance across multiple industries. We work with top brands (Matrix, Panasonic, NEC, Beetel) and ensure every component used is tested for quality and reliability with fast local response times."
    ],
    highlights: [
      "24x7 emergency EPABX motherboard and line repair",
      "Digital, Analog, and IP PBX system programming",
      "Auto-attendant IVR voice greeting and call transfer setup",
      "Preventive maintenance of power supplies and MDF terminals"
    ],
    scopeOfWork: [
      "EPABX hardware installation and programming",
      "Internal line extension tracing and fault rectifying",
      "PRI / SIP trunk gateway integration"
    ]
  }
];

export const SECURITY_SOLUTIONS: SecuritySolution[] = [
  {
    id: "residential-solutions",
    slug: "residential-solutions",
    title: "Residential CCTV Solutions",
    subtitle: "Complete 360° peace of mind for families, gated apartments, and luxury villas.",
    image: "/images/residential.jpeg",
    metaTitle: "Residential CCTV Camera in Kondapur, Hyderabad, Warangal and Hanamkonda | Residential Security Cameras",
    metaDescription: "Find the best Residential CCTV Camera Dealer in Warangal and Hyderabad at Dhrusti. Offering high-quality cameras for 24/7 security, exceptional service, and reliable installation. Secure your home today!",
    description: "Keep your loved ones and property secure 24/7. High-resolution cameras with smart boundary detection notify you when someone steps on your porch. Integrated with smart Video Door Phones and biometric digital door locks.",
    fullArticleParagraphs: [
      "Secure Your Home with Advanced Residential CCTV Systems: Your home deserves the highest level of protection. Our residential CCTV systems provide 24/7 surveillance to help you monitor every corner of your property in real time. Whether you're at home, at work, or on vacation, our easy-to-use mobile and desktop apps give you instant access to live video feeds, ensuring peace of mind wherever you are.",
      "Smart Camera Solutions with Powerful Security Features: We offer smart home security systems packed with features like motion detection, night vision, instant alerts, and cloud storage. These intelligent technologies not only record activity but also act as a strong deterrent to potential threats. From watching over entrances, garages, and backyards to monitoring household staff like maids or babysitters, our customizable CCTV solutions are built to meet your everyday security needs.",
      "Peace of Mind Starts with Home Surveillance You Can Trust: Our high-definition CCTV cameras are designed for easy installation and simple use by all age groups. With seamless operation and reliable performance, our systems help you protect what matters most—your family, your property, and your peace of mind. Choose our trusted home surveillance systems and enjoy unmatched security with total control."
    ],
    features: [
      "Front door smart facial and visitor verification",
      "Perimeter night vision monitoring of garden and gates",
      "Pet, baby, and elder care indoor tracking",
      "One-touch emergency siren and mobile alerts"
    ],
    idealFor: "Individual Homes, Gated Communities, Villas, High-Rise Flats"
  },
  {
    id: "commercial-solutions",
    slug: "commercial-solutions",
    title: "Commercial CCTV Solutions",
    subtitle: "Loss prevention, customer footfall analytics, and multi-branch retail control.",
    image: "/images/com.jpeg",
    metaTitle: "Commercial CCTV Camera in Kondapur, Hyderabad, Warangal and Hanamkonda | Commercial CCTV Camera Installation",
    metaDescription: "Explore the best Commercial CCTV Cameras in Kondapur, Hyderabad, Warangal and Hanamkonda with Dhrusti. Ensure unmatched security solutions for businesses with advanced technology and reliable services. Contact us today for details!",
    description: "Safeguard retail inventory, cash billing counters, and customer entry points. High-clarity audio recording and face identification protect your store from shoplifting and staff disputes.",
    fullArticleParagraphs: [
      "Running a business comes with endless responsibilities—security shouldn’t be one of your worries. Our Commercial CCTV solutions are designed to offer maximum surveillance for shops, offices, showrooms, warehouses, and industrial spaces.",
      "From high-traffic retail areas to sensitive back offices, we provide multi-camera setups that ensure complete coverage. Monitor employee behavior, prevent shoplifting, manage entry points, and improve overall workplace discipline—all with a click. Integration with access control and alarm systems enhances security layers, ensuring a responsive setup.",
      "Boost productivity, reduce losses, and create a safe environment for both customers and staff. With remote monitoring, real-time alerts, and scalable options, our commercial CCTV systems grow with your business."
    ],
    features: [
      "Billing counter zoom cameras for currency note identification",
      "AI customer heatmaps and footfall visitor counting",
      "Biometric employee attendance with automatic payroll sync",
      "Multi-store remote monitoring on a single mobile screen"
    ],
    idealFor: "Jewelry Showrooms, Shopping Malls, Supermarkets, Restaurants, Offices"
  },
  {
    id: "industrial-solutions",
    slug: "industrial-solutions",
    title: "Industrial CCTV Solutions",
    subtitle: "Rugged long-range thermal and optical perimeter defense for heavy manufacturing plants.",
    image: "/images/eng.jpeg",
    metaTitle: "Industrial Security Camera Installation in Kondapur, Hyderabad, Warangal and Hanamkonda | Industrial CCTV Solutions",
    metaDescription: "Secure your business with expert Industrial Security Camera Installation in Warangal and Hyderabad by Dhrusti. Reliable, advanced, and tailored solutions to protect your assets. Call us today!",
    description: "Industrial sites face challenges like harsh weather, dust, wide acreage, and unauthorized access. We deploy explosion-proof, thermal, and long-range PTZ cameras with automated vehicle license plate recognition (ANPR).",
    fullArticleParagraphs: [
      "Industrial environments are complex, high-risk zones where safety, efficiency, and security must work hand-in-hand. Our Industrial Surveillance Solutions are purpose-built to meet the demands of factories, plants, warehouses, refineries, and other industrial sites—where precision monitoring is not a luxury, but a necessity.",
      "We offer rugged, high-performance CCTV systems designed to endure harsh environmental conditions such as dust, extreme temperatures, vibrations, and corrosive atmospheres. From perimeter surveillance and internal process monitoring to hazardous zone coverage, our cameras deliver crystal-clear imaging, even in low light or high-speed production lines.",
      "Beyond just recording visuals, our intelligent surveillance integrates with AI-driven analytics to track operational metrics, identify safety breaches, detect unauthorized access, and even monitor worker behavior to ensure compliance. You’ll gain actionable insights in real time—helping reduce downtime, enhance productivity, and prevent incidents before they escalate. Our solutions include thermal imaging, explosion-proof cameras, license plate recognition, and smart alerts for equipment failure or motion in restricted zones.",
      "We understand that no two industrial sites are the same. That’s why we provide end-to-end consultation, from risk assessment and custom system design to professional installation and ongoing maintenance. With our Industrial Solutions, you don’t just install cameras—you build a smarter, safer, and more secure industrial future."
    ],
    features: [
      "Automated truck and visitor license plate logging at gates",
      "Thermal sensor cameras for fire hazard and heat detection",
      "Worker safety helmet and PPE compliance AI detection",
      "Heavy-duty explosion-proof and weatherproof housings"
    ],
    idealFor: "Manufacturing Plants, Logistics Warehouses, Cold Storage, Construction"
  },
  {
    id: "custom-security-plans",
    slug: "custom-security-plans",
    title: "Custom Security Plans",
    subtitle: "Large-scale crowd surveillance, traffic control, and municipal security infrastructure consultation.",
    image: "/images/gather.jpeg",
    metaTitle: "Custom Security Plans in Kondapur, Hyderabad, Warangal and Hanamkonda | Custom Security Camera Systems",
    metaDescription: "Dhrusti offers tailored security solutions in Kondapur, Hyderabad, Warangal and Hanamkonda with expert custom security plans for homes, businesses, and organizations. Safeguard your assets with reliable and comprehensive security services.",
    description: "With over 20 years of experience serving the Warangal Police Commissionerate, GWMC, KUDA, and major religious shrines, we design enterprise-grade command-and-control surveillance networks tailored to any scale.",
    fullArticleParagraphs: [
      "When it comes to security, one size does not fit all. Every property—be it a home, business, factory, or event venue—faces unique risks, layouts, and operational needs. That’s why we specialize in designing Custom Security Plans that are tailored specifically to you. Our approach begins with a detailed security audit and risk assessment. We evaluate your premises, understand your daily operations, identify vulnerable points, and factor in your specific concerns—whether it's theft, vandalism, employee safety, access control, or surveillance blind spots.",
      "Based on this insight, we create a fully customized plan that may include CCTV cameras, video door phones, access control systems, alarms, and remote monitoring setups. We balance advanced technology with practical placement strategies to ensure maximum coverage and usability—without overcomplicating things or straining your budget.",
      "Your custom plan can be scaled to fit a single entry point or an entire multi-site network. We also consider future-proofing by allowing for upgrades and expansions as your needs evolve. From real-time alerts to long-term data storage, every component is designed to work seamlessly together.",
      "Whether you need round-the-clock monitoring, smart analytics integration, or event-based surveillance, our team ensures your system delivers performance, reliability, and peace of mind. With us, security isn't just a product—it's a plan. A custom plan that protects what matters most to you."
    ],
    features: [
      "Central police control room multi-display video wall design",
      "High-density crowd scanning and AI anomaly detection",
      "Solar-powered wireless relay towers across city limits",
      "Dedicated rapid-response technician team on 24/7 standby"
    ],
    idealFor: "Municipalities, Police Commissionerates, Shrines, Highway Corridors"
  }
];

