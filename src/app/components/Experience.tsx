import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Software Engineer Intern — Algorithmic Trading Platform',
      company: 'Potoos',
      logo: 'https://res.cloudinary.com/dcbla9zbl/image/upload/v1767465039/iarolp7gytbbhlkpdavq.jpg',
      duration: 'September 2025 – Present',
      current: true,
      description: [
        'Primary backend contributor (70% of commits, ~28K LOC) to a live production trading platform handling real user capital, alongside one other engineer',
        'Built async pipelines with Django, Celery, and Redis for order placement, stop-loss, modification, and exit flows',
        'Used Redis and Lua scripts to guarantee concurrency-safe rule state, eliminating duplicate or conflicting order executions',
        'Designed execution logic supporting multiple brokers through a shared rule and dispatch layer',
        'Deployed and operate Dockerized services behind Nginx on Linux servers',
      ],
      techStack: [
        { name: 'Django', icon: '🐍' },
        { name: 'Celery', icon: '🌿' },
        { name: 'Redis + Lua', icon: '⚡' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Nginx', icon: '🌐' },
        { name: 'Linux', icon: '🐧' },
      ],
    },
    {
      role: 'Backend Engineer — Research Services (Go Microservice)',
      company: 'Potoos Research Services',
      logo: 'https://res.cloudinary.com/dcbla9zbl/image/upload/v1767465039/iarolp7gytbbhlkpdavq.jpg',
      duration: 'Alongside the role above',
      current: true,
      description: [
        'Independently designed and built a Go/Gin microservice (96% of commits, 15.8K+ LOC) for KYC verification, risk profiling, and trade-signal distribution for a SEBI-regulated research advisory product',
        'Automated KYC status verification using headless Chrome with anti-detection evasion, async result polling, PDF generation, and MinIO storage',
        'Built a scored risk-profiling engine gating access to cash-equity vs. F&O segments per SEBI-style compliance rules',
        'Built a CSV-based multi-leg strategy ingestion pipeline with Google Drive → MinIO migration and cross-service sync to the Django backend',
        'Hardened OTP auth (rate limiting, cooldowns, IP abuse blocking), JWT session versioning, and authored the production Nginx layer (TLS 1.2/1.3 hardening, strict ciphers, Host-header allow-listing)',
      ],
      techStack: [
        { name: 'Go + Gin', icon: '🐹' },
        { name: 'chromedp', icon: '🌐' },
        { name: 'MinIO', icon: '📦' },
        { name: 'JWT', icon: '🔐' },
        { name: 'Nginx / TLS', icon: '🔒' },
        { name: 'WhatsApp API', icon: '💬' },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-white">Experience</h2>
            <div className="h-1 w-16 bg-white mt-4"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border border-neutral-800 bg-neutral-900/30 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all hover:bg-neutral-900/50"
              >
                {/* Top: Company Logo (Full Width) */}
                <div className="bg-neutral-950 border-b border-neutral-800 p-12 lg:p-16 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full max-w-3xl object-contain opacity-90"
                  />
                </div>

                {/* Bottom: Experience Details */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-white text-2xl">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-900/30 border border-green-800 text-green-400 rounded text-xs">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-400">{exp.company}</p>
                      <p className="text-neutral-500 text-sm mt-1">{exp.duration}</p>
                    </div>

                    {/* Description */}
                    <div className="space-y-2.5 mb-8">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-neutral-600 mt-1.5 text-xs">▪</span>
                          <p className="text-neutral-400 text-sm leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-6 border-t border-neutral-800">
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400 text-xs flex items-center gap-1.5"
                          >
                            <span className="opacity-60">{tech.icon}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
