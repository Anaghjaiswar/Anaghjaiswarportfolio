export function About() {
  const stats = [
    { value: '110+', label: 'Real Paid Transactions Processed' },
    { value: '6+', label: 'Months Production Backend Work' },
    { value: 'Zero', label: 'Payment Failures in Production' },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-white">About</h2>
            <div className="h-1 w-16 bg-white mt-4"></div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-neutral-300 text-lg leading-relaxed">
                I'm a B.Tech IT student (3rd year) who builds backend systems that work
                in the real world — not just on localhost.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Currently working as a Backend Engineering Intern at Potoos, I design APIs
                and systems that handle real users, real money, and real failure cases.
                My work focuses on reliability, robustness, and production-minded engineering.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                I don't just write code — I build systems that survive bad inputs, scale
                under load, and degrade gracefully when things go wrong. I think in terms
                of edge cases, race conditions, and production constraints.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                My experience includes payment gateway integrations, WebSocket-based
                real-time systems, and deploying production applications that serve
                actual users.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg hover:border-neutral-700 transition-colors"
                >
                  <div className="text-white text-3xl mb-2">{stat.value}</div>
                  <div className="text-neutral-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}