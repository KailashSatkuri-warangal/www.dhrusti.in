/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Direct Services HTML rewrites
      { source: '/cctv-installation-services-in-warangal.html', destination: '/services/cctv-installation-services-in-warangal' },
      { source: '/cctv-installation-services-in-warangal', destination: '/services/cctv-installation-services-in-warangal' },
      { source: '/maintanance-amc.html', destination: '/services/maintanance-amc' },
      { source: '/maintanance-amc', destination: '/services/maintanance-amc' },
      { source: '/system-upgrades.html', destination: '/services/system-upgrades' },
      { source: '/system-upgrades', destination: '/services/system-upgrades' },
      { source: '/remote-monitoring-setup.html', destination: '/services/remote-monitoring-setup' },
      { source: '/remote-monitoring-setup', destination: '/services/remote-monitoring-setup' },
      { source: '/event-surveillance.html', destination: '/services/event-surveillance' },
      { source: '/event-surveillance', destination: '/services/event-surveillance' },
      { source: '/cctv-on-hire-basis.html', destination: '/services/cctv-on-hire-basis' },
      { source: '/cctv-on-hire-basis', destination: '/services/cctv-on-hire-basis' },
      { source: '/central-monitoring-system.html', destination: '/services/central-monitoring-system' },
      { source: '/central-monitoring-system', destination: '/services/central-monitoring-system' },
      { source: '/telephone-intercom.html', destination: '/services/telephone-intercom' },
      { source: '/telephone-intercom', destination: '/services/telephone-intercom' },
      { source: '/epabx.html', destination: '/services/epabx' },
      { source: '/epabx', destination: '/services/epabx' },

      // Direct Solutions HTML rewrites
      { source: '/residential-solutions.html', destination: '/solutions/residential-solutions' },
      { source: '/residential-solutions', destination: '/solutions/residential-solutions' },
      { source: '/commercial-solutions.html', destination: '/solutions/commercial-solutions' },
      { source: '/commercial-solutions', destination: '/solutions/commercial-solutions' },
      { source: '/industrial-solutions.html', destination: '/solutions/industrial-solutions' },
      { source: '/industrial-solutions', destination: '/solutions/industrial-solutions' },
      { source: '/custom-security-plans.html', destination: '/solutions/custom-security-plans' },
      { source: '/custom-security-plans', destination: '/solutions/custom-security-plans' },

      // Products HTML rewrites
      { source: '/cctv-cameras.html', destination: '/cctv-cameras' },
      { source: '/video-door-phones.html', destination: '/video-door-phones' },

      // Portfolio & Other pages HTML rewrites
      { source: '/clients.html', destination: '/clients' },
      { source: '/gallery.html', destination: '/gallery' },
      { source: '/partners.html', destination: '/partners' },
      { source: '/about-us.html', destination: '/about-us' },
      { source: '/about.html', destination: '/about' },
      { source: '/contact-us.html', destination: '/contact-us' },
      { source: '/contact.html', destination: '/contact' },
      { source: '/get-a-quote.html', destination: '/get-a-quote' },
      { source: '/blog.html', destination: '/blog' },

      // Blog Article HTML rewrites
      { source: '/top-cctv-camera-trends-2026-homes-businesses.html', destination: '/blog/top-cctv-camera-trends-2026-homes-businesses' },
      { source: '/wireless-cctv-camera-installation-guide-for-beginners.html', destination: '/blog/wireless-cctv-camera-installation-guide-for-beginners' },
      { source: '/best-cctv-camera-suppliers-in-hyderabad.html', destination: '/blog/best-cctv-camera-suppliers-in-hyderabad' },
      { source: '/cctv-camera-dealers-kondapur-hyderabad.html', destination: '/blog/cctv-camera-dealers-kondapur-hyderabad' },
      { source: '/cctv-distributors-hyderabad-bulk-supply.html', destination: '/blog/cctv-distributors-hyderabad-bulk-supply' },
      { source: '/professional-cctv-repair-services-kondapur.html', destination: '/blog/professional-cctv-repair-services-kondapur' },
      { source: '/wholesale-cctv-camera-suppliers-hyderabad.html', destination: '/blog/wholesale-cctv-camera-suppliers-hyderabad' },
    ];
  },
};

export default nextConfig;

