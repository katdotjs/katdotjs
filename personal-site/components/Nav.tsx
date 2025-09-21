import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/fun", label: "Fun" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const Nav: React.FC = () => (
  <nav>
    <ul className="flex gap-6 items-center">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-lg font-medium hover:text-yellow-600 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;