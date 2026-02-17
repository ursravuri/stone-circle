import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/innovations", label: "Innovations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
];

const productLinks = [
  { href: "/products#slabs", label: "Granite Slabs" },
  { href: "/products#tiles", label: "Granite Tiles" },
  { href: "/products#countertops", label: "Countertops" },
  { href: "/products#staircases", label: "Staircases" },
  { href: "/innovations#eco-bricks", label: "Eco-Bricks" },
  { href: "/innovations#paver-blocks", label: "Paver Blocks" },
];

export default function Footer() {
  return (
    <footer className="bg-granite-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Logo className="w-9 h-9" />
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                GRASTO INDUSTRIES
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Granite That Builds Today. Innovation That Shapes Tomorrow.
              <br />
              <br />
              Premium granite manufacturer with 100% zero-waste operations.
              Every grain of stone we process becomes a finished product.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-warm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-warm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p>GRASTO INDUSTRIES</p>
              <p>Anil Kumar Ravuri</p>
              <p>Martur, Andhra Pradesh, India</p>
              <br />
              <p>+91 98765 43210</p>
              <p>info@grasto.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>&copy; 2026 GRASTO INDUSTRIES. All rights reserved.</span>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-warm-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-warm-gold transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
