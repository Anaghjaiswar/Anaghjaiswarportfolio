export function About() {
  const stats = [
    { value: '28K+', label: 'Lines of Code, Live Trading Platform' },
    { value: '70%', label: 'Of Commits on a Two-Engineer Team' },
    { value: '2', label: 'Production Systems Shipped, Same Company' },
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
                I'm a 3rd-year B.Tech student who spends more time reading production
                logs than lecture notes.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                At Potoos, I'm the primary backend contributor — about 70% of commits —
                to a live algorithmic trading platform handling real user capital. I've
                also independently built a separate Go microservice for a SEBI-regulated
                research advisory product: KYC verification, risk profiling, and
                trade-signal distribution, running alongside the main backend.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Outside of work, I build my own systems end-to-end: a clinic management
                platform for rheumatology practices with a custom disease-activity
                scoring engine, and a RAG-based tool that reads job descriptions and
                drafts tailored cold emails from my resume.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                I gravitate toward problems where getting it wrong costs someone money
                or time — that's usually where the real engineering is.
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