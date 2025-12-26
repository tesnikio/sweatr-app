const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-medium">Sauna Loft</span>
            <p className="text-cream/60 mt-4 text-sm leading-relaxed">
              Discover and book unique sauna experiences. Find your perfect place to breathe.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="/explore" className="hover:text-cream transition-colors">
                  All saunas
                </a>
              </li>
              <li>
                <a href="/collections/forest" className="hover:text-cream transition-colors">
                  Forest cabins
                </a>
              </li>
              <li>
                <a href="/collections/urban" className="hover:text-cream transition-colors">
                  Urban retreats
                </a>
              </li>
              <li>
                <a href="/collections/lakeside" className="hover:text-cream transition-colors">
                  Lakeside views
                </a>
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h4 className="font-medium mb-4">Hosting</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="/become-host" className="hover:text-cream transition-colors">
                  Become a host
                </a>
              </li>
              <li>
                <a href="/host-resources" className="hover:text-cream transition-colors">
                  Host resources
                </a>
              </li>
              <li>
                <a href="/hosting-guidelines" className="hover:text-cream transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="/insurance" className="hover:text-cream transition-colors">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="/help" className="hover:text-cream transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="/safety" className="hover:text-cream transition-colors">
                  Safety info
                </a>
              </li>
              <li>
                <a href="/cancellation" className="hover:text-cream transition-colors">
                  Cancellation policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-cream transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/40">
            © {currentYear} Sauna Loft. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream/60">
            <a href="/privacy" className="hover:text-cream transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-cream transition-colors">
              Terms
            </a>
            <a href="/sitemap" className="hover:text-cream transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
