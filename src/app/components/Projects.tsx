import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Society Workshop Registration Backend',
      description: 'Payment gateway integration that processed 110+ real paid registrations',
      highlights: [
        'Successfully handled real money transactions with zero failures',
        'Razorpay integration with transaction verification',
        'reCAPTCHA security layer to prevent fraud',
        'Built for reliability under registration spikes',
      ],
      tech: ['Django', 'Razorpay', 'PostgreSQL', 'reCAPTCHA'],
      github: 'https://github.com/Anaghjaiswar/workshop-form',
      demo: 'https://drive.google.com/file/d/1TUeEQ5UAVqx-GrbXoe8Hu_YKK-tymHga/view?usp=sharing',
    },
    {
      title: 'Society Application Backend',
      description: 'Real-time communication system with WebSocket-based group chat',
      highlights: [
        'REST APIs serving both user and admin workflows',
        'Django Channels for real-time WebSocket connections',
        'Notification system with media handling',
        'Attendance tracking and reporting features',
      ],
      tech: ['Django', 'Django Channels', 'WebSockets', 'DRF'],
      github: 'https://github.com/Anaghjaiswar/CSI_BACKEND',
      demo: 'https://drive.google.com/file/d/1TVbuSBbTrG8GP4k78MwBlfvcR_GV1dcH/view',
    },
    {
      title: 'Hola Project API',
      description: 'Social platform backend built in a team environment',
      highlights: [
        'Token-based authentication with JWT',
        'Social features: posts, comments, likes',
        'API documentation for frontend integration',
        'Collaborative development workflow',
      ],
      tech: ['Django', 'DRF', 'JWT', 'PostgreSQL'],
      github: 'https://github.com/Anaghjaiswar/hola_project',
      demo: null,
    },
    {
      title: 'Recipe Blog Website',
      description: 'Full-stack application deployed to production on Render',
      highlights: [
        'Complete authentication and authorization',
        'Tag system with pagination for scalability',
        'PostgreSQL with optimized queries',
        'Production deployment with Cloudinary for media',
      ],
      tech: ['Django', 'PostgreSQL', 'Render', 'Cloudinary'],
      github: 'https://github.com/Anaghjaiswar/Recipe-Blog',
      demo: 'https://drive.google.com/file/d/1OxUAf7Aoh0IaFtsH5N6MUJdyY6BCMy-D/view?usp=sharing',
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}