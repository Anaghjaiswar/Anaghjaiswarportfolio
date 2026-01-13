import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const educationEntries = [
    {
      institution: 'Ajay Kumar Garg Engineering College, Ghaziabad',
      degree: 'B.Tech in Information Technology',
      duration: 'October 2023 – 2027',
      status: 'Currently Studying',
      logo: 'https://res.cloudinary.com/dcbla9zbl/image/upload/v1767475619/ly845neyzsijn2u6yuif.jpg',
      isPrimary: true,
    },
    {
      institution: 'BEN-HUR Public School, Pilibhit, UP',
      level: 'High School',
      logo: 'https://res.cloudinary.com/dcbla9zbl/image/upload/v1767464523/vbjtpadsdo2xbbffce6j.png',
      isPrimary: false,
      duration: '2020',
    },
    {
      institution: 'Pragati Public Senior Secondary School, Kota, Rajasthan',
      level: 'Intermediate',
      logo: 'https://res.cloudinary.com/dcbla9zbl/image/upload/v1767464766/w7sd17aemmsku3hhgyf4.png',
      isPrimary: false,
      duration: '2022'
    },
  ];

  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-white">Education</h2>
            <div className="h-1 w-16 bg-white mt-4"></div>
          </div>

          {/* Education Cards */}
          <div className="space-y-4">
            {educationEntries.map((edu, index) => (
              <div
                key={index}
                className={`border border-neutral-800 bg-neutral-900/30 rounded-xl overflow-hidden hover:border-neutral-700 transition-all hover:bg-neutral-900/50 ${
                  edu.isPrimary ? 'p-8' : 'p-6'
                }`}
              >
                <div className="flex items-start gap-6">
                  {/* Institution Logo */}
                  <div className="flex-shrink-0">
                    <div
                      className={`${
                        edu.isPrimary ? 'w-14 h-14' : 'w-12 h-12'
                      } rounded-lg bg-white/5 border border-neutral-800 p-2 flex items-center justify-center overflow-hidden`}
                    >
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1">
                    {edu.isPrimary ? (
                      // Primary Education (College)
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-2">
                          <div>
                            <h3 className="text-white text-xl mb-1">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-neutral-300">
                              <GraduationCap size={16} className="text-neutral-500" />
                              <span>{edu.institution}</span>
                            </div>
                          </div>
                          <p className="text-neutral-500 text-sm">{edu.status}</p>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-400 text-sm">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    ) : (
                      // Secondary Education (Schools)
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="text-neutral-300 text-base">
                            {edu.institution}
                          </h4>
                          <p className="text-neutral-500 text-sm mt-0.5">{edu.level}</p>
                        </div>
                        {edu.duration && (
                          <div className="flex items-center gap-2 text-neutral-400 text-sm">
                            <Calendar size={14} />
                            <span>{edu.duration}</span>
                          </div>
                        )}
                      </div>
                    )}
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