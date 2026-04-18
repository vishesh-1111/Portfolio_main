"use client";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4.006-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.176zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.217.544 3.397-.43 6.77.257 7.1.334-.09-2.33-.88-4.lesson-2.273-6.404z" />
    </svg>
  );
}

const navLinks = [
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const socialLinks = [
  { icon: <GithubIcon />, href: "#", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
  { icon: <TwitterIcon />, href: "#", label: "Twitter" },
  { icon: <DribbbleIcon />, href: "#", label: "Dribbble" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          --c-bg: #0d0d0d;
          --c-ink: #f0ede8;
          --c-muted: #6b6b6b;
          --c-rule: rgba(240,237,232,0.1);
          --c-border: rgba(240,237,232,0.12);
          --c-card-border: rgba(240,237,232,0.32);
          background: var(--c-bg);
          position: relative;
          overflow: hidden;
        }

        .footer-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 79px,
            var(--c-rule) 79px,
            var(--c-rule) 80px
          );
          pointer-events: none;
          opacity: 0.5;
        }

        .f-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--c-ink);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.0;
          font-size: clamp(3rem, 8vw, 6.5rem);
        }
        .f-name em {
          font-style: italic;
          font-weight: 700;
          -webkit-text-stroke: 1.5px var(--c-ink);
          color: transparent;
        }

        .f-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--c-muted);
          border: 1px solid var(--c-border);
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
        }

        .f-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted);
          text-decoration: none;
          transition: color 0.2s;
        }
        .f-nav-link:hover { color: var(--c-ink); }

        .f-divider {
          height: 1px;
          background: var(--c-border);
          width: 100%;
        }

        .f-meta {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: var(--c-muted);
          font-size: 0.75rem;
          letter-spacing: 0.04em;
        }

        .f-social {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          border: 1px solid var(--c-card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--c-ink);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .f-social:hover {
          background: var(--c-ink);
          color: var(--c-bg);
          border-color: var(--c-ink);
        }
      `}</style>

      <footer className="footer-section w-full px-10 pt-20 pb-10 relative">
        {/* ── Top row: available pill + nav links ── */}
        {/* <div className="flex items-center justify-between mb-16 relative z-10">
          <span className="f-pill">Available for freelance</span>
          <nav className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="f-nav-link">{label}</a>
            ))}
          </nav>
        </div> */}

        {/* ── Large name ── */}
        {/* <div className="relative z-10 mb-16">
          <p className="f-name">Vishesh</p>
          <p className="f-name"><em>Designer</em> & Developer</p>
        </div> */}

        {/* ── Divider ── */}
        {/* <div className="f-divider relative z-1" /> */}

        {/* ── Bottom bar ── */}
        <div className="flex items-center justify-between flex-wrap gap-4 mt-6 relative z-10">
          <p className="f-meta">© 2026 Vishesh. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="f-social">
                {icon}
              </a>
            ))}
          </div>
          <p className="f-meta">Crafted with care · India</p>
        </div>
      </footer>
    </>
  );
}