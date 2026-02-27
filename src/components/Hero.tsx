// src/components/Hero.tsx
import { useEffect, useRef } from 'react';
import Photo from '../assets/photo-valisoa.jpeg';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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

    type();
  }, []);

  return (
    <section
      id="about"
      className={`
        relative min-h-screen flex items-center justify-center
        bg-gradient-to-br from-zinc-50 via-white to-zinc-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
        transition-colors duration-500 ease-in-out
        overflow-hidden
      `}
    >
       <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1F8A7030_0%,transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#1F8A7030_0%,transparent_50%)] animate-pulse-slow delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-0 text-center md:text-left flex flex-col md:flex-row items-center gap-12 md:gap-16">
         <div className="flex-1 space-y-6 md:space-y-8">
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Rafanomezantsoa <br className="hidden sm:block" />
              <span className="text-primary">Valisoa</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300">
              <span ref={typedRef} className="inline-block min-w-[280px] text-left">
                Frontend Developer
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            2+ years crafting high-performance, accessible web & mobile experiences with React, TypeScript, and modern UI/UX practices.  
            Reduced load times by ~40% and collaborated closely with design teams to boost user engagement.
          </p>

           <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a
              href="#contact"
              className={`
                inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                bg-primary text-white font-medium
                hover:bg-primary/90 transition-all duration-300
                shadow-lg shadow-primary/20 hover:shadow-primary/30
                transform hover:-translate-y-1
              `}
            >
              Get in Touch
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 px-6 py-3.5 rounded-full
                border-2 border-zinc-300 dark:border-zinc-700
                hover:border-primary hover:text-primary
                transition-all duration-300
              `}
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 px-6 py-3.5 rounded-full
                border-2 border-zinc-300 dark:border-zinc-700
                hover:border-primary hover:text-primary
                transition-all duration-300
              `}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

         <div className="flex-shrink-0 relative">
          <div className={`
            w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
            rounded-full overflow-hidden
            border-4 border-primary/30 dark:border-primary/20
            shadow-2xl shadow-black/10 dark:shadow-black/40
            transition-all duration-500
            hover:scale-105 hover:rotate-2
          `}>
             <img
              src={Photo}  
              alt="Valisoa - Frontend Developer"
              className="w-full h-full object-cover"
            />
          </div>

           <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-pulse-slow pointer-events-none" />
        </div>
      </div>

       <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} className="text-zinc-400 dark:text-zinc-600" />
      </a>
    </section>
  );
}