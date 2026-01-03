import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thanks for reaching out! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaiswaranagh@gamil.com',
      href: 'mailto:anagh@example.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anaghjaiswar',
      href: 'https://linkedin.com/in/anaghjaiswar',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/anaghjaiswar',
      href: 'https://github.com/anaghjaiswar',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-white">Let's Work Together</h2>
            <div className="h-1 w-16 bg-white mt-4 mx-auto"></div>
            <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
              I'm currently open to backend engineering opportunities, internships, and
              collaborations. Feel free to reach out if you'd like to work together or
              discuss potential projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-white text-xl">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-white text-xl">Connect With Me</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-neutral-800 bg-neutral-900/30 rounded-lg p-6 hover:border-neutral-700 transition-all hover:bg-neutral-900/50 group flex items-center gap-4"
                    >
                      <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-neutral-700 transition-colors">
                        <Icon size={20} className="text-neutral-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-neutral-500 text-sm mb-1">{method.label}</p>
                        <p className="text-neutral-300 text-sm break-all">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-12 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              © 2025 Anagh Jaiswar. Backend Engineer building production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}