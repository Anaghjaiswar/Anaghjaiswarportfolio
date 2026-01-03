import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Small intro */}
            <div className="inline-block">
              <span className="text-neutral-500 text-sm tracking-wide uppercase">
                Backend Engineering Intern
              </span>
            </div>

            {/* Main tagline - the core message */}
            <h1 className="text-white leading-tight">
              Designing systems that survive bad inputs, bad data, bad traffic and bad days.
            </h1>

            {/* Supporting line */}
            <p className="text-neutral-400 text-lg max-w-xl">
              Backend engineer focused on APIs, async systems, and production-ready architectures.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white text-black px-6 py-3 rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-neutral-700 text-white px-6 py-3 rounded-md hover:border-neutral-500 hover:bg-neutral-900 transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                Contact
              </button>
            </div>
          </div>

          {/* Right: Professional Photo */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-transparent z-10 rounded-lg"></div>
              <img
                src="https://res.cloudinary.com/dcbla9zbl/image/upload/v1767403018/wfd0nwqddvfvu9zeqb2c.png"
                alt="Anagh Jaiswar"
                className="
                  w-full
                  max-w-[500px]
                  aspect-[3/4]
                  object-cover
                  rounded-xl
                  grayscale
                  opacity-80
                  transition
                  duration-300
                  hover:grayscale-0
                  hover:opacity-100
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}