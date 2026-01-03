import { Database, Activity, ShieldCheck, Layers } from 'lucide-react';

export function WhatIDo() {
  const values = [
    {
      icon: Database,
      title: 'Scalable Backend APIs for Real Users',
      description: 'Production systems that handle real traffic, not just test data.',
    },
    {
      icon: ShieldCheck,
      title: 'Payment Systems That Handle Real Money',
      description: 'Robust transaction processing with verification and security built-in.',
    },
    {
      icon: Activity,
      title: "Async Workflows That Don't Break Under Load",
      description: 'WebSocket channels, background tasks, and event-driven architectures.',
    },
    {
      icon: Layers,
      title: 'Systems Designed for Failure, Not Just Success',
      description: 'Error handling, validation, and graceful degradation as core principles.',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white">What I Build</h2>
            <div className="h-1 w-16 bg-white mt-4 mx-auto"></div>
            <p className="text-neutral-400 mt-6">
              I focus on outcomes, not just code. Here's how I add value.
            </p>
          </div>

          {/* Value Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="border border-neutral-800 bg-neutral-950/50 rounded-lg p-8 hover:border-neutral-700 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-neutral-700 transition-colors">
                      <Icon size={24} className="text-neutral-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white text-lg">{value.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}