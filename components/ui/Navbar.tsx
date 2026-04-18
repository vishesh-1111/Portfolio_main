"use client";

import * as React from "react";
import { Download } from "lucide-react";
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

  const targetProgress = React.useRef(0);
  const rafId = React.useRef<number | null>(null);
  const hasInitialized = React.useRef(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);

        // enable transitions AFTER first paint
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      }

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const next = docHeight > 0 ? scrollTop / docHeight : 0;

      targetProgress.current = next;

      // prevent initial jump
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

        /* Enable transition only after first scroll */
        .nav-bar.nav-animate {
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        /* Persistent blur */
        .nav-bar.scrolled {
          background: rgba(13,13,13,0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--n-border);
        }

        /* Progress bar */
        .nav-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(
            90deg,
            rgba(240,237,232,0.6),
            rgba(240,237,232,1)
          );
        }

        /* Logo */
        .nav-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--n-ink);
          letter-spacing: -0.02em;
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-logo em {
          font-style: italic;
          font-weight: 300;
          -webkit-text-stroke: 1px var(--n-ink);
          color: transparent;
        }

        /* Center links */
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
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--n-border);
          flex-shrink: 0;
        }

        /* Resume button */
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
        }
        .nav-resume:hover { opacity: 0.8; }
      `}</style>

      <div className="nav-root">
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

          {/* Links */}
          <nav className="nav-links">
            {navLinks.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && <span className="nav-dot" />}
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (!el) return;

                    const y =
                      el.getBoundingClientRect().top +
                      window.scrollY -
                      80;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }}
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          {/* Resume */}
          <a href="/resume_v1.pdf" download className="nav-resume">
            Resume
            <Download size={11} strokeWidth={2} />
          </a>

          {/* Progress Bar */}
          <div
            className="nav-progress"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </header>
      </div>
    </>
  );
}