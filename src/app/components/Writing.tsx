import { FileText, ArrowUpRight } from 'lucide-react';

export function Writing() {
  const articles = [
    {
      title: 'Designing APIs for Real Users',
      description: 'Lessons learned from building production APIs that handle real traffic and diverse use cases.',
      date: 'Coming Soon',
      readTime: '8 min read',
    },
    {
      title: 'Lessons from Building Production Backends',
      description: 'What I learned deploying Django applications to production with real users and real money.',
      date: 'Coming Soon',
      readTime: '10 min read',
    },
    {
      title: 'Things I Learned the Hard Way in Backend Systems',
      description: 'Error handling, validation, async processing, and other lessons from real-world experience.',
      date: 'Coming Soon',
      readTime: '6 min read',
    },
  ];

  return (
    <section id="writing" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-white">Writing</h2>
            <div className="h-1 w-16 bg-white mt-4"></div>
            <p className="text-neutral-400 mt-4">
              Notes on backend engineering, systems thinking, and lessons from production.
            </p>
          </div>

          {/* Articles List */}
          <div className="space-y-4">
            {articles.map((article, index) => (
              <div
                key={index}
                className="border border-neutral-800 bg-neutral-950/50 rounded-lg p-6 hover:border-neutral-700 transition-all hover:bg-neutral-900/30 group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 p-2 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-neutral-700 transition-colors mt-1">
                      <FileText size={18} className="text-neutral-400" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-white text-lg group-hover:text-neutral-200 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-3 text-neutral-500 text-xs">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-neutral-600 group-hover:text-neutral-400 transition-colors flex-shrink-0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Message */}
          <div className="text-center pt-8">
            <p className="text-neutral-500 text-sm">
              Blog posts coming soon. Follow me on{' '}
              <a
                href="https://linkedin.com/in/anaghjaiswar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors underline"
              >
                LinkedIn
              </a>{' '}
              for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
