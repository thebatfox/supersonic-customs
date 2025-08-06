import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
  { href: "#questionnaire", label: "Get Quote" },
];

export default function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://ugc.same-assets.com/J-Eqy2pkcNnovFrhPwtfzZbYZ1ce7rlo.svg"
            alt="Supersonic Customs"
            className="h-8 w-auto object-fill"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-hover-text transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-hover-text transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
