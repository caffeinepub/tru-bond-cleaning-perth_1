import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.link"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/assets/generated/tru-bond-cleaning-logo-transparent.dim_400x120.png"
              alt="Tru Bond Cleaning Perth logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.to)
                    ? "text-brand-teal"
                    : "text-foreground hover:text-brand-teal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.whatsapp.button"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              0488 841 883
            </a>
            <Button
              asChild
              size="sm"
              className="bg-brand-teal hover:bg-brand-teal-dark text-white shadow-cta"
            >
              <Link to="/contact" data-ocid="nav.quote.button">
                Get a Free Quote
              </Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-ocid="nav.menu.toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1 border-t border-border">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                    className={`block px-3 py-2 text-sm font-semibold rounded-md ${
                      isActive(link.to)
                        ? "bg-secondary text-brand-teal"
                        : "hover:bg-secondary text-foreground"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 space-y-2 px-3">
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="nav.mobile.whatsapp.button"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold py-2 rounded-lg"
                  >
                    <Phone className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                  <Button
                    asChild
                    className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      data-ocid="nav.mobile.quote.button"
                    >
                      Get a Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
