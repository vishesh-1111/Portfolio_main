"use client";

import * as React from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export default function PortfolioNavbar() {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [enableTransition, setEnableTransition] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const targetProgress = React.useRef(0);
  const rafId = React.useRef<number | null>(null);
  const hasInitialized = React.useRef(false);

  // Close menu on resize to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  React.useEffect(() => {
    const onScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        requestAnimationFrame(() => setEnableTransition(true));
      }

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = docHeight > 0 ? scrollTop / docHeight : 0;
      targetProgress.current = next;

      if (!hasInitialized.current) {
        setScrollProgress(next);
        hasInitialized.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      setScrollProgress((prev) => {
        const diff = targetProgress.current - prev;
        const eased = prev + diff * 0.08;
        return Math.abs(diff) < 0.001 ? targetProgress.current : eased;
      });
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [hasScrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .nav-root {
          --n-bg:     #0d0d0d;
          --n-ink:    #f0ede8;
          --n-muted:  #6b6b6b;
          --n-border: rgba(240,237,232,0.1);
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Bar ── */
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 2.5rem;
          background: transparent;
        }
        .nav-bar.nav-animate {
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .nav-bar.scrolled {
          background: rgba(13,13,13,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--n-border);
        }

        /* ── Progress bar ── */
        .nav-progress {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, rgba(240,237,232,0.6), rgba(240,237,232,1));
          pointer-events: none;
        }

        /* ── Logo ── */
        .nav-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--n-ink);
          letter-spacing: -0.02em;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-logo em {
          font-style: italic;
          font-weight: 300;
          -webkit-text-stroke: 1px var(--n-ink);
          color: transparent;
        }

        /* ── Desktop centre links ── */
        .nav-links {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .nav-link {
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--n-muted);
          text-decoration: none;
          padding: 0.4rem 0.85rem;
          border-radius: 4px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--n-ink); }

        .nav-dot {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--n-border);
          flex-shrink: 0;
        }

        /* ── Resume button (desktop) ── */
        .nav-resume {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--n-bg);
          background: var(--n-ink);
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-resume:hover { opacity: 0.8; }

        /* ── Hamburger ── */
        .nav-hamburger {
          display: none;
          margin-left: auto;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--n-ink);
          padding: 0.25rem;
          flex-shrink: 0;
          line-height: 0;
        }

        /* ── Mobile drawer ── */
        .nav-drawer {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0; bottom: 0;
          z-index: 49;
          background: rgba(13,13,13,0.97);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 2rem 1.5rem;
          border-top: 1px solid var(--n-border);
          /* animation */
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }
        .nav-drawer.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .nav-drawer-link {
          font-size: 1.1rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--n-muted);
          text-decoration: none;
          padding: 0.85rem 2rem;
          border-radius: 6px;
          width: 100%;
          max-width: 280px;
          text-align: center;
          transition: color 0.2s, background 0.2s;
        }
        .nav-drawer-link:hover {
          color: var(--n-ink);
          background: rgba(240,237,232,0.05);
        }
        .nav-drawer-divider {
          width: 1px;
          height: 24px;
          background: var(--n-border);
          margin: 0.25rem 0;
        }
        .nav-drawer-resume {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--n-bg);
          background: var(--n-ink);
          padding: 0.7rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          transition: opacity 0.2s;
          width: 100%;
          max-width: 280px;
          justify-content: center;
        }
        .nav-drawer-resume:hover { opacity: 0.8; }

        /* ── Responsive breakpoint ── */
        @media (max-width: 767px) {
          .nav-bar { padding: 0 1.25rem; }
          .nav-links  { display: none; }
          .nav-resume { display: none; }
          .nav-hamburger { display: flex; }
          .nav-drawer { display: flex; }
        }

        /* ── Tablet: tighter padding, smaller text ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-bar { padding: 0 1.5rem; }
          .nav-link { font-size: 0.68rem; padding: 0.4rem 0.55rem; }
          .nav-resume { padding: 0.5rem 0.9rem; font-size: 0.65rem; }
        }
      `}</style>

      <div className="nav-root">
        {/* ── Top bar ── */}
        <header
          className={cn(
            "nav-bar",
            hasScrolled && "scrolled",
            enableTransition && "nav-animate"
          )}
        >
          {/* Logo */}
          <a href="#" className="nav-logo">
            <em>P</em>ortfolio.
          </a>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && <span className="nav-dot" aria-hidden="true" />}
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop Resume */}
          <a href="/resume_v1.pdf" download className="nav-resume">
            Resume
            <Download size={11} strokeWidth={2} />
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen
              ? <X size={22} strokeWidth={1.5} />
              : <Menu size={22} strokeWidth={1.5} />
            }
          </button>

          {/* Progress bar */}
          <div
            className="nav-progress"
            style={{ width: `${scrollProgress * 100}%` }}
            aria-hidden="true"
          />
        </header>

        {/* ── Mobile drawer ── */}
        <nav
          className={cn("nav-drawer", menuOpen && "open")}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && <div className="nav-drawer-divider" aria-hidden="true" />}
              <a
                href={link.href}
                className="nav-drawer-link"
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}

          <a
            href="/resume_v1.pdf"
            download
            className="nav-drawer-resume"
            tabIndex={menuOpen ? 0 : -1}
          >
            Resume
            <Download size={13} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </>
  );
}