import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Shield } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/assets/generated/tru-bond-cleaning-logo-transparent.dim_400x120.png"
              alt="Tru Bond Cleaning Perth logo"
              className="h-12 w-auto mb-3 brightness-0 invert"
            />
            <p className="text-sm text-white/70 mb-4">
              Perth&apos;s Bond Cleaning Specialists &ndash; 100% Bond Back
              Guarantee
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <Phone className="w-4 h-4 text-brand-teal-light" />
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp.button"
                className="hover:text-brand-teal-light transition-colors"
              >
                0488 841 883
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-brand-teal-light" />
              <span>Serving all Perth suburbs, WA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Our Services" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Get a Quote" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-brand-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>General Bond Clean</li>
              <li>Kitchen Deep Clean</li>
              <li>Bathroom &amp; Toilet Clean</li>
              <li>Carpet Steam Cleaning</li>
              <li>Window Cleaning</li>
              <li>Oven &amp; Appliance Clean</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Shield className="w-4 h-4 text-brand-teal-light" />
            <span>Fully Insured &amp; Police-Checked Cleaners</span>
          </div>
          <div className="text-sm text-white/60 text-center">
            <p>&copy; {year} Tru Bond Cleaning Perth. All rights reserved.</p>
            <p className="mt-1">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
