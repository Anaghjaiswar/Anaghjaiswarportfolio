import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Backend Engineer',
      company: 'Potoos',
      logo: 'https://res.cloudinary.com/dcbla9zbl/image/upload/v1767465039/iarolp7gytbbhlkpdavq.jpg',
      duration: 'September 2024 – Present',
      current: true,
      description: [
        'Own production backend systems serving real users and traffic',
        'Build asynchronous pipelines for data processing and job orchestration',
        'Deploy and maintain infrastructure on Linux with Docker and CI/CD',
        'Optimize performance-critical systems with caching and database tuning',
        'Develop internal control panels and tooling for operations',
        'Work with PostgreSQL, TimescaleDB, Redis, and message queues',
      ],
      techStack: [
        { name: 'Docker', icon: '🐳' },
        { name: 'Linux', icon: '🐧' },
        { name: 'Redis', icon: '⚡' },
        { name: 'Celery', icon: '🌿' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'TimescaleDB', icon: '⏱️' },
        { name: 'Nginx', icon: '🌐' },
        { name: 'CI/CD', icon: '🔄' },
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
