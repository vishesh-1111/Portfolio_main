"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);

    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const lines = [
    { pre: "Hello, I'm", bold: "Vishesh.", weight: "light" },
    { pre: "AI", bold: "Engineer", weight: "stroke" },
    { pre: "Based In", bold: "India.", weight: "black" },
  ];

  return (
    <>
      <style>{`
        :root {
          --hero-bg: #0d0d0d;
          --hero-ink: #f0ede8;
          --hero-muted: #6b6b6b;
          --hero-rule: rgba(240,237,232,0.1);
        }

        .hero-section {
          background: var(--hero-bg);
          position: relative;
          overflow: hidden;
        }

        /* Faint ruled lines — editorial texture */
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 79px,
            var(--hero-rule) 79px,
            var(--hero-rule) 80px
          );
          pointer-events: none;
          opacity: 0.5;
        }

        .hero-line {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--hero-ink);
          line-height: 1.0;
          letter-spacing: -0.03em;
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .hero-line.light { font-weight: 300; }
        .hero-line.black { font-weight: 700; }
        .hero-line.stroke { font-weight: 700; }

        .stroke-text {
          -webkit-text-stroke: 1.5px var(--hero-ink);
          color: transparent;
          font-style: italic;
        }

        .hero-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: var(--hero-muted);
          font-size: 1.2rem;
          line-height: 1.75;
          letter-spacing: 0.01em;
          max-width: 36ch;
          transition: opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s;
        }

        .social-btn {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid rgba(17,16,16,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--hero-ink);
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          text-decoration: none;
        }

        .social-btn:hover {
          background: var(--hero-ink);
          color: var(--hero-bg);
          border-color: var(--hero-ink);
        }

        .hero-rule-line {
          height: 1px;
          background: var(--hero-rule);
          flex: 1;
          margin-left: 1rem;
        }

        .location-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--hero-muted);
          border: 1px solid var(--hero-rule);
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
        }

        .scroll-hint {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--hero-muted);
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, var(--hero-ink), transparent);
          margin: 0 auto;
          animation: scrollDrop 1.8s ease-in-out infinite;
        }

        @keyframes scrollDrop {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          40% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          60% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>

      <section
        className="hero-section min-h-screen w-full flex flex-col items-center justify-center relative pt-20"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-7"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.6s ease 0.1s",
          }}
        >
          <span className="location-tag">Bangalore, India</span>
          <span className="location-tag">Actively Building</span>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center text-center gap-10 px-6 relative z-10">
          {/* Headline block */}
          <div className="flex flex-col items-center gap-0" style={{ gap: "0.15em" }}>
            {lines.map((line, i) => (
              <div
                key={i}
                className={cn("hero-line", line.weight === "stroke" ? "stroke" : line.weight === "black" ? "black" : "light")}
                style={{
                  fontSize: "clamp(4rem, 12vw, 9rem)",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                {line.pre}{" "}
                {line.weight === "stroke" ? (
                  <span className="stroke-text">{line.bold}</span>
                ) : (
                  <span>{line.bold}</span>
                )}
              </div>
            ))}
          </div>

          {/* Description */}
      <p
  className="hero-body font-medium tracking-tight text-xl md:text-xl"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
  }}
>
  I build solutions that drive revenue and growth
</p>
          {/* Social row */}
          <div
            className="flex items-center gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
            }}
          >
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                {s.icon}
              </a>
            ))}
            {/* <div className="hero-rule-line" style={{ width: "80px" }} /> */}
          </div>
        </div>

        {/* Scroll indicator — bottom center */}
        {/* <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.7s ease 0.8s",
          }}
        >
          <div className="scroll-line" />
          <span className="scroll-hint">scroll</span>
        </div> */}
      </section>
    </>
  );
}