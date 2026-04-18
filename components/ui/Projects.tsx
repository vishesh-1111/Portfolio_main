"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
  align: "left" | "right";
}

const projects: Project[] = [
  {
    id: "meruem",
    number: "01",
    title: "Meruem – AI-Powered Data Analysis Platform",
    description:
      "Built an enterprise-grade AI data analysis platform that connects securely to private databases and generates insights without manual SQL. Implemented role-based workspace collaboration and automated visualization pipelines, reducing analysis turnaround time from hours to minutes.",
    link: "https://meruem-v4.vercel.app",
    image: "/Screenshot from 2026-04-18 22-44-38.png",
    imageAlt: "Meruem AI Data Analysis Platform Preview",
    align: "right",
  },
  {
    id: "event-system",
    number: "02",
    title: "Event Ticket Booking System with RAG Chatbot",
    description:
      "Full-stack event management system built with Next.js, Node.js, and MongoDB. Integrated WebSockets for real-time reservation tracking and a RAG-based chatbot to answer contextual queries about the platform, improving user engagement and admin efficiency.",
    link: "#",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80",
    imageAlt: "Event Booking System Preview",
    align: "right",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView();
  const isRight = project.align === "right";

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Image block */}
      <div
        className={`relative group ${isRight ? "md:order-1" : "md:order-2"}`}
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            transform: "rotate(-1.5deg)",
            transition: "transform 0.4s ease",
            border: "1px solid rgba(240,237,232,0.32)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.02)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.transform = "rotate(-1.5deg) scale(1)")
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-64 md:h-80 object-cover"
            style={{ filter: "brightness(0.85)" }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: "linear-gradient(135deg, rgba(240,237,232,0.05) 0%, transparent 60%)",
              transition: "opacity 0.3s ease",
            }}
          />
        </div>

        {/* Decorative dot grid */}
        <div
          className="absolute -bottom-4 -right-4 w-24 h-24 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(240,237,232,0.12) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
            zIndex: -1,
          }}
        />
      </div>

      {/* Text block */}
      <div className={`flex flex-col gap-4 ${isRight ? "md:order-2" : "md:order-1"}`}>
        {/* Number */}
        <span className="proj-number">{project.number}</span>

        {/* Title */}
        <h3 className="proj-title">{project.title}</h3>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(240,237,232,0.12)", width: "100%" }} />

        {/* Description */}
        <p className="proj-description">{project.description}</p>

        {/* Link */}
        <a href={project.link}  target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-fit mt-1">
          <span
            className="proj-link-btn"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(240,237,232,0.7)";
              (e.currentTarget as HTMLSpanElement).style.background = "rgba(240,237,232,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(240,237,232,0.32)";
              (e.currentTarget as HTMLSpanElement).style.background = "transparent";
            }}
          >
            <ExternalLink size={14} color="#f0ede8" />
          </span>
          <span className="proj-link-label">View project</span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .proj-section {
          --c-bg: #0d0d0d;
          --c-ink: #f0ede8;
           ----c-muted: #8a8a8a;
          --c-rule: rgba(240,237,232,0.1);
          --c-border: rgba(240,237,232,0.12);
          --c-card-border: rgba(240,237,232,0.32);
          background: var(--c-bg);
          position: relative;
          overflow: hidden;
        }

        .proj-section::before {
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

        .proj-pill {
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

        .proj-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--c-ink);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.0;
          font-size: clamp(3.5rem, 10vw, 8rem);
        }
        .proj-heading strong { font-weight: 700; }
        .proj-heading em {
          font-style: italic;
          font-weight: 700;
          -webkit-text-stroke: 1.5px var(--c-ink);
          color: transparent;
        }

        .proj-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: rgba(240,237,232,0.15);
          font-weight: 700;
          font-size: clamp(3rem, 8vw, 5rem);
          letter-spacing: -0.03em;
          line-height: 1;
          select: none;
        }

        .proj-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--c-ink);
          font-weight: 600;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .proj-description {
          font-family: 'Cormorant Garamond';
          font-weight: 900;
          color: var(--c-muted);
          font-size: 1.27rem;
          line-height: 1.75;
          letter-spacing: 0.01em;
          max-width: 42ch;
        }

        .proj-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          border: 1px solid rgba(240,237,232,0.32);
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }

        .proj-link-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--c-muted);
        }
      `}</style>

      <section id="projects" className="proj-section min-h-screen w-full px-10 py-24 relative">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-20 relative z-10">
          <span className="proj-pill">Projects</span>
          <span className="proj-pill">{projects.length} works</span>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto relative z-10">
          {/* ── Heading ── */}
          <div ref={headerRef} style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            <h2 className="proj-heading">Things I've</h2>
            <h2 className="proj-heading"><em>made</em> & <strong>shipped.</strong></h2>
          </div>

          {/* ── Projects list ── */}
          <div className="flex flex-col gap-28 mt-10">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}