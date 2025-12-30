import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400">Have questions about the Enterprise API or need support?</p>
        </div>

        <div className="bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl relative">
          {submitted ? (
             <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-violet-400 hover:text-violet-300 font-medium"
                >
                    Send another message
                </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;