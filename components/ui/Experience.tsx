"use client";

import { Briefcase, Apple, PlayCircle } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
};
const experiences = [
  {
    company: "Senda",
    role: "AI Engineer Intern",
    duration: "Oct 2025 – Present",
    icon: "🤖",
    description:
      "Architected a Django-based agentic system using LangGraph to orchestrate multi-step workflows for data ingestion, analysis, and reporting—reducing portfolio report generation time from 3–4 hours to under 60 seconds. Engineered a high-accuracy (95%) table extraction pipeline for financial documents using mathematical validation. Built real-time Gmail inbox integration with Pub/Sub and WebSockets, leveraging LLM-based classification to convert advisor emails into actionable tasks."
  },
  {
    company: "Attestr",
    role: "ML Engineer Intern",
    duration: "Apr 2025 – Jul 2025",
    icon: "🧠",
    description:
      "Developed and fine-tuned CNN-based passive liveness detection models for KYC systems, trained on ~20K images, achieving 92% validation accuracy under constrained data conditions. Containerized training and inference pipelines using Docker to enable reproducible, GPU-ready cloud deployments."
  },
  {
    company: "The Email Mafia",
    role: "Software Developer Intern",
    duration: "Mar 2025",
    icon: "💻",
    description:
      "Evaluated AI avatar platforms including ElevenLabs and SeaSalt AI, reducing prototyping time by one week. Built a proof-of-concept memory-aware conversational AI system using Letta AI, improving context retention and accelerating product feasibility decisions."
  }
];

export default function ExperienceSection() {
  return (
    <>
      <style>{`
        .exp-section {
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

        .exp-section::before {
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

        .exp-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--c-ink);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.0;
          font-size: clamp(3.5rem, 10vw, 8rem);
        }
        .exp-heading strong { font-weight: 700; }
        .exp-heading em {
          font-style: italic;
          font-weight: 700;
          -webkit-text-stroke: 1.5px var(--c-ink);
          color: transparent;
        }

        .exp-pill {
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

        .exp-card {
          border: 1px solid var(--c-card-border);
          border-radius: 10px;
          background: #161616;
          padding: 2rem 2.5rem;
          isolation: isolate;
          transition: border-color 0.2s;
        }
        .exp-card:hover {
          border-color: rgba(240,237,232,0.5);
        }

        .exp-role {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: var(--c-ink);
          font-weight: 600;
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .exp-company {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--c-muted);
        }

        .exp-duration {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--c-muted);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .exp-description {
          font-family: Cormorant Garamond;

          font-weight: 900;
          color: var(--c-muted);
          font-size: 1.27rem;
          line-height: 1.5;
          letter-spacing: 0.01em;
        }

        .exp-icon-wrap {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 8px;
          border: 1px solid var(--c-card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp-divider {
          height: 1px;
          background: var(--c-border);
          width: 100%;
          margin: 1.25rem 0;
        }
      `}</style>

      <section  id="experience" className="exp-section w-full px-10 py-24 relative">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-20 relative z-10">
          <span className="exp-pill">Experience</span>
          <span className="exp-pill">3 roles</span>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-7xl mx-auto relative z-10">
          {/* ── Heading ── */}
          <div>
            <h2 className="exp-heading">Where I've</h2>
            <h2 className="exp-heading"><em>built</em> & <strong>grown.</strong></h2>
          </div>

          {/* ── Cards ── */}
          <div className="flex flex-col gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card">
                {/* Top row */}
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="exp-icon-wrap">{exp.icon}</div>
                    <div className="flex flex-col gap-1">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-role">{exp.role}</span>
                    </div>
                  </div>
                  <span className="exp-duration mt-1">{exp.duration}</span>
                </div>

                <div className="exp-divider" />

                {/* Description */}
                <p className="exp-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}