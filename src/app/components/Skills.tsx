export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C', 'JavaScript'],
    },
    {
      title: 'Backend Frameworks',
      skills: ['Django', 'Django REST Framework', 'FastAPI', 'Django Channels'],
    },
    {
      title: 'Databases & Infrastructure',
      skills: ['PostgreSQL', 'Redis'],
    },
    {
      title: 'Tools & Services',
      skills: ['Git', 'GitHub', 'Postman', 'JWT', 'Render', 'Cloudinary', 'Razorpay'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div>
            <h2 className="text-white">Skills & Tech Stack</h2>
            <div className="h-1 w-16 bg-white mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-white text-xl">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm hover:border-neutral-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
