import React, { useState } from 'react';
import { Github, Instagram, Linkedin, ExternalLink, Calendar, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Failed to send email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-warm-900">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-warm-900 mb-4">Phil Anderson</h2>
          <p className="text-warm-600 mb-2">Enfield</p>
          <p className="text-warm-600 mb-6">United Kingdom</p>

          <div className="space-y-4">
            <a
              href="https://github.com/philanderson888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <Github size={24} />
              <span>@philanderson888</span>
            </a>

            <a
              href="https://linktr.ee/philanderson888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <ExternalLink size={24} />
              <span>Linktree</span>
            </a>

            <a
              href="https://instagram.com/philanderson888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <Instagram size={24} />
              <span>@philanderson888</span>
            </a>

            <a
              href="https://www.linkedin.com/in/phil-anderson-60648a11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://calendly.com/philanderson888/1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <Calendar size={24} />
              <span>Schedule a Meeting</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-warm-900 mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-warm-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-warm-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-warm-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-warm-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-warm-600 text-white px-4 py-2 rounded-md hover:bg-warm-700 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
