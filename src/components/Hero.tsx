import { useEffect, useRef } from 'react';
import Photo from '../assets/photo-valisoa.jpeg';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './style.css';
export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const texts = [
      "Frontend Developer",
      "React & TypeScript Specialist",
      "UI/UX Enthusiast",
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
      const element = typedRef.current;
      if (!element) return;

      if (isDeleting) {
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
      }

      element.textContent = currentText;

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === texts[index].length) {
        speed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 300;
      }

      setTimeout(type, speed);
    };

    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 overflow-hidden"
    >
       <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1F8A7030_0%,transparent_50%)] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
         <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Rafanomezantsoa <br />
              <span className="text-primary text-[#1F8A70]">Valisoa</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300">
              <span ref={typedRef} className="inline-block min-w-[280px]">
                Frontend Developer
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            2+ years crafting high-performance web experiences. Reduced load times by ~40% and passionate about clean, maintainable React code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1F8A70] text-white hover:scale-105 transition-transform shadow-lg shadow-[#1F8A70]/20">
              Get in Touch <Mail size={18} />
            </a>
            <div className="flex gap-4">
               <a href="#" className="p-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:text-[#1F8A70] transition-colors"><Github size={20} /></a>
               <a href="#" className="p-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:text-[#1F8A70] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

         <div className="flex-shrink-0 relative group">
          <div className="svg-frame">
             <svg style={{ '--i': 1, '--j': 5 } as any} viewBox="0 0 344 344">
              <rect x="22" y="22" width="300" height="300" rx="20" stroke="#1F8A70" strokeWidth="2" opacity="0.3" />
            </svg>

             <svg style={{ '--i': 2, '--j': 4 } as any} viewBox="0 0 344 344">
              <circle id="out2" cx="172" cy="172" r="130" stroke="#1F8A70" strokeWidth="1" strokeDasharray="10 5" />
            </svg>

             <svg style={{ '--i': 3, '--j': 3 } as any} viewBox="0 0 344 344">
              <circle id="out3" cx="172" cy="172" r="100" strokeWidth="2" fill="none" />
            </svg>

             <svg style={{ '--i': 4, '--j': 2 } as any} viewBox="0 0 344 344">
              <rect id="inner1" x="72" y="72" width="200" height="200" rx="100" stroke="#1F8A70" strokeWidth="2" />
            </svg>

             <div 
              className="absolute w-[300px] h-[300px] transition-all duration-500 z-10 overflow-hidden rounded-full  border-[#1F8A70]/50 group-hover:rotate-[-10deg] group-hover:skew-x-[10deg] group-hover:translate-x-[45px] group-hover:translate-y-[-35px]"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '20px 20px 50px rgba(,0,0,0.2)'
              }}
            >
              <img
                src={Photo}
                alt="Valisoa Profile"
                className="w-[85%] rounded-full h-[85%]  mt-[1.5rem] ml-[1.5rem] object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
              />
               <div id="center1" className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#ff0]" />
            </div>
          </div>
        </div>
      </div>

      <a href="#skills" className="absolute bottom-8 animate-bounce text-zinc-400">
        <ArrowDown size={32} />
      </a>
    </section>
  );
}