import { useState, FormEvent } from 'react';
import emailjs from "@emailjs/browser";
import { Send, Loader2 } from "lucide-react";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setMessage('Message envoyé avec succès ! Je vous répondrai bientôt.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section
      id="contact"
      className={`
        py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950
        transition-colors duration-500
      `}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
Send me a message to discuss projects, collaborations, or just to say hello!</p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={`
                  w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800
                  border border-zinc-300 dark:border-zinc-700
                  focus:border-primary focus:ring-2 focus:ring-primary/30
                  outline-none transition-all duration-300
                  placeholder-zinc-500 dark:placeholder-zinc-500
                `}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className={`
                  w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800
                  border border-zinc-300 dark:border-zinc-700
                  focus:border-primary focus:ring-2 focus:ring-primary/30
                  outline-none transition-all duration-300
                  placeholder-zinc-500 dark:placeholder-zinc-500
                `}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject of your message"
              className={`
                w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800
                border border-zinc-300 dark:border-zinc-700
                focus:border-primary focus:ring-2 focus:ring-primary/30
                outline-none transition-all duration-300
                placeholder-zinc-500 dark:placeholder-zinc-500
              `}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your message here..."
              className={`
                w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800
                border border-zinc-300 dark:border-zinc-700
                focus:border-primary focus:ring-2 focus:ring-primary/30
                outline-none transition-all duration-300 resize-y
                placeholder-zinc-500 dark:placeholder-zinc-500
              `}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`
              w-full py-4 px-6 rounded-xl font-medium text-white
              flex items-center justify-center gap-3
              transition-all duration-300
              ${status === 'loading'
                ? 'bg-primary/70 cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1'
              }
            `}
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending message...
              </>
            ) : (
              <>
                Send message
                <Send size={18} />
              </>
            )}
          </button>

          {message && (
            <p
              className={`text-center mt-4 font-medium ${
                status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
 
export default Contact;