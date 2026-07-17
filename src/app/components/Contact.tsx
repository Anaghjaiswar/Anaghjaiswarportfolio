import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are missing!');
      setStatusMessage({
        type: 'error',
        text: 'Email service is not fully configured yet. Please configure your .env file.',
      });
      setIsSending(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage({
            type: 'success',
            text: 'Thanks for reaching out! I\'ve received your message and will respond shortly.',
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatusMessage({
            type: 'error',
            text: 'Failed to send the message. Please try again later or contact me directly.',
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
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
      value: 'jaiswaranagh@gmail.com',
      href: 'mailto:jaiswaranagh@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anagh-jaiswar',
      href: 'https://linkedin.com/in/anagh-jaiswar',
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
            <h2 className="text-white">Building something?</h2>
            <div className="h-1 w-16 bg-white mt-4 mx-auto"></div>
            <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
              If you need someone who can take a backend from a blank repo to
              production and actually own it — that's what I do. Open to backend
              roles, internships, and interesting problems in general.
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
                {statusMessage && (
                  <div
                    className={`p-4 rounded-lg text-sm ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/30 border border-emerald-800 text-emerald-400'
                        : 'bg-rose-950/30 border border-rose-800 text-rose-400'
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className={isSending ? "animate-pulse" : ""} />
                  {isSending ? 'Sending...' : 'Send Message'}
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
              © 2026 Anagh Jaiswar. Building backend systems that don't fall over.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}