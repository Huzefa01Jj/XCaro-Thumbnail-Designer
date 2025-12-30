import React from 'react';
import { Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white">X</div>
              <span className="text-xl font-bold text-white">XCaro</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              The AI-first design tool built for the next generation of creators. Stop designing, start growing.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'API', 'Showcase'].map(item => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 XCaro Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>Made with ❤️ for creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;