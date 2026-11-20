"use client";

import { useEffect, useState } from "react";
import { SHOP } from "./data";

const LINKS = [
  { href: "#services", label: "Prices" },
  { href: "#dulha", label: "Dulha package" },
  { href: "#visit", label: "Find us" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="logo" aria-label={`${SHOP.full} home`}>
          <span className="logo__pole" aria-hidden="true" />
          {SHOP.name}
        </a>

        <nav aria-label="Main">
          <ul className={`nav__links ${open ? "is-open" : ""}`}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#book" className="btn btn--red btn--small" onClick={() => setOpen(false)}>
                Book a chair
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
