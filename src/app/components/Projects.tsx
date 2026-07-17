import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'RheumaLink — Clinic Management Platform',
      description:
        'Full-stack practice management system for rheumatology clinics, built from studying real clinical intake workflows (DAS28, HAQ).',
      highlights: [
        'Domain-accurate data model spanning 100+ structured clinical fields',
        'Real-time appointment and queue system (Django Channels/WebSockets) with live per-doctor dashboards',
        'Interactive clickable SVG joint chart feeding a DAS28 disease-activity scoring engine',
        'Companion FastAPI + Gemini/Groq microservice for LLM-based report extraction, serving multiple clinics on separate API keys',
      ],
      tech: ['Django', 'DRF', 'Celery', 'Channels', 'FastAPI', 'Docker'],
      github: null,
      demo: 'https://drive.google.com/file/d/1EWLT0GRH7XhIOzhUWCWU1cJUdsC4jfIS/view',
    },
    {
      title: 'ColdMail AI — RAG-Powered Cold Email Agent',
      description:
        'Self-hosted RAG system that reads a job description and drafts a tailored cold email using the right resume variant.',
      highlights: [
        'Layout-aware resume parsing (Docling) with local embeddings in Postgres/pgvector',
        'Retrieves top-8 matching resume chunks and drafts emails with LangChain + Groq (Llama 3.3 70B)',
        'Background SMTP mailer that compiles Markdown into styled HTML MIME emails with resume attachments',
        'Async ingestion with live status polling, fully Dockerized',
      ],
      tech: ['FastAPI', 'LangChain', 'pgvector', 'Groq', 'Docling'],
      github: 'https://github.com/Anaghjaiswar/AI-Powered-Cold-Email-Application-Assistant',
      demo: 'https://drive.google.com/file/d/169amEHxwpfGUFhRpoGzTcPJcS6pHJ1ts/view',
    },
    {
      title: 'CSI Society Application Backend',
      description: 'Modular Django backend for a 500+ member college tech society.',
      highlights: [
        'Apps for members, domains, events, tasks, attendance, and announcements',
        'Proximity-based attendance and automated notification pipeline',
        'Real-time group chat (WebSockets) with media sharing and threaded replies',
      ],
      tech: ['Django', 'DRF', 'WebSockets'],
      github: 'https://github.com/Anaghjaiswar/CSI_BACKEND',
      demo: 'https://drive.google.com/file/d/1TVbuSBbTrG8GP4k78MwBlfvcR_GV1dcH/view',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-white">Projects</h2>
            <div className="h-1 w-16 bg-white mt-4"></div>
            <p className="text-neutral-400 mt-4">
              Production systems that solve real problems for real users.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-neutral-800 bg-neutral-900/30 rounded-lg p-8 hover:border-neutral-700 transition-all hover:bg-neutral-900/50 group flex flex-col"
              >
                {/* Header */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-white text-xl">{project.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-neutral-600 mt-1 text-xs">▪</span>
                      <span className="text-neutral-400 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.demo) ? (
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
                ) : (
                  <p className="pt-4 border-t border-neutral-800 text-neutral-600 text-xs">
                    Private repo — happy to walk through the code on a call.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}