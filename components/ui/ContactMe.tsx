"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
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

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <RedditIcon />, href: "#", label: "Reddit" },
  { icon: <TwitterIcon />, href: "#", label: "Twitter" },
  { icon: <DiscordIcon />, href: "#", label: "Discord" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => console.log("Form submitted:", form);

  return (
    <>
      <style>{`
        .contact-section {
          --c-bg: #0d0d0d;
          --c-ink: #f0ede8;
          --c-muted: #6b6b6b;
          --c-rule: rgba(240,237,232,0.1);
          --c-border: rgba(240,237,232,0.12);
          --c-card-border: rgba(240,237,232,0.32);
          --c-input-line: rgba(240,237,232,0.28);
          --c-input-bg: rgba(240,237,232,0.03);
          background: var(--c-bg);
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
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

        .c-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--c-ink);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.0;
          font-size: clamp(3.5rem, 10vw, 8rem);
        }
        .c-heading strong { font-weight: 700; }
        .c-heading em {
          font-style: italic;
          font-weight: 700;
          -webkit-text-stroke: 1.5px var(--c-ink);
          color: transparent;
        }

        .c-subtext {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          color: var(--c-muted);
          font-size: 0.875rem;
          line-height: 1.75;
          letter-spacing: 0.01em;
        }

        .c-meta {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          color: var(--c-ink);
          font-size: 0.875rem;
          letter-spacing: 0.01em;
        }

        .c-pill {
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

        .c-divider {
          height: 1px;
          background: var(--c-border);
          width: 100%;
        }

        /* Card border is notably more opaque than background lines */
.c-card {
  border: 1px solid var(--c-card-border);
  border-radius: 10px;
  background: #161616; /* slightly lifted from --c-bg (#0d0d0d) to stay sleek */
  padding: 2.5rem 3rem;
  isolation: isolate;
}

        /* Input underlines are more opaque than background lines */
        .c-input,
        .c-textarea {
          width: 100%;
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid var(--c-input-line) !important;
          border-radius: 0 !important;
          color: var(--c-ink) !important;
          font-family: 'DM Sans', sans-serif !important;
          font-size: 0.875rem !important;
          font-weight: 300 !important;
          padding: 0.75rem 0 !important;
          outline: none !important;
          box-shadow: none !important;
          transition: border-color 0.2s;
        }
        .c-input::placeholder,
        .c-textarea::placeholder { color: var(--c-muted) !important; }
        .c-input:focus,
        .c-textarea:focus {
          border-bottom-color: var(--c-ink) !important;
          box-shadow: none !important;
        }
        .c-textarea { resize: none; }

        .c-submit {
          background: var(--c-ink);
          color: var(--c-bg);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.65rem 2rem;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .c-submit:hover { opacity: 0.8; }

        .c-social {
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
        .c-social:hover {
          background: var(--c-ink);
          color: var(--c-bg);
          border-color: var(--c-ink);
        }
      `}</style>

      <section id="contact" className="contact-section min-h-screen w-full flex flex-col px-10 py-24 relative">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-20 relative z-10">
          <span className="c-pill">Contact</span>
          <span className="c-pill">Open to work</span>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto relative z-10">
          {/* ── Large heading ── */}
          <div>
            <h1 className="c-heading">Let's <em>talk</em></h1>
            <h1 className="c-heading">for <strong>Something</strong></h1>
            <h1 className="c-heading"><strong>Special.</strong></h1>
          </div>

          {/* ── Form card ── */}
          <div className="c-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {/* Left col */}
              <div className="flex flex-col gap-6">
                <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="c-input" />
                <Input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} className="c-input" />
                <Input name="website" placeholder="Your website (if exists)" value={form.website} onChange={handleChange} className="c-input" />
              </div>
              {/* Right col */}
              <div className="flex flex-col mt-6 md:mt-0">
                <Textarea name="message" placeholder="How can I help?" value={form.message} onChange={handleChange} rows={6} className="c-textarea" />
              </div>
            </div>

            {/* Card footer */}
            <div className="flex items-center justify-between flex-wrap gap-4 mt-8 pt-6">
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon, href, label }) => (
                  <a key={label} href={href} aria-label={label} className="c-social">
                    {icon}
                  </a>
                ))}
              </div>
              <button className="c-submit" onClick={handleSubmit}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}