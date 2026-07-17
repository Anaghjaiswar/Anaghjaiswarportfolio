import { Database, Activity, ShieldCheck, Layers } from 'lucide-react';

export function WhatIDo() {
  const values = [
    {
      icon: Database,
      title: 'Order execution for real money',
      description:
        'I build the pipelines that place, modify, and exit trades on a live platform — using real user capital, with no room for a silent double-execution.',
    },
    {
      icon: ShieldCheck,
      title: "Making sure two things don't happen at once",
      description:
        'I use Redis and Lua scripting to lock down order state, so a stop-loss and a manual exit can never both fire on the same trade.',
    },
    {
      icon: Activity,
      title: 'Background jobs that keep running when things go wrong',
      description:
        'Django, Celery, and Redis pipelines for order flow, KYC checks, and notifications — built to retry, queue, and recover instead of just failing.',
    },
    {
      icon: Layers,
      title: 'AI tools I designed end-to-end, not just prompted',
      description:
        "RAG pipelines and applied GenAI systems I've architected myself — data model, retrieval, generation, and the plumbing in between.",
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
              The kind of problems I actually spend my time on.
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