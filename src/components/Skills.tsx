import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface Skill {
  name: string;
  level: 'Avancé' | 'Intermédiaire';
  barClass: string; 
}

const frontendSkills: Skill[] = [
  {
    name: 'HTML / CSS / Tailwind / Bootstrap',
    level: 'Avancé',
    barClass: 'bg-gradient-to-r from-amber-400 to-orange-500 w-[90%]',
  },
  {
    name: 'JavaScript',
    level: 'Intermédiaire',
    barClass: 'bg-gradient-to-r from-yellow-400 to-amber-500 w-[70%]',
  },
  {
    name: 'React',
    level: 'Avancé',
    barClass: 'bg-gradient-to-r from-cyan-400 to-blue-500 w-[95%]',
  },
  {
    name: 'Node.js',
    level: 'Intermédiaire',
    barClass: 'bg-gradient-to-r from-green-400 to-emerald-500 w-[65%]',
  },
];

const otherSkills: Skill[] = [
  {
    name: 'Java',
    level: 'Intermédiaire',
    barClass: 'bg-gradient-to-r from-purple-500 to-indigo-600 w-[60%]',
  },
  {
    name: 'Git',
    level: 'Avancé',
    barClass: 'bg-gradient-to-r from-gray-600 to-gray-800 w-[90%]',
  },
  {
    name: 'PostgreSQL',
    level: 'Avancé',
    barClass: 'bg-gradient-to-r from-violet-500 to-purple-600 w-[92%]',
  },
];

export default function Skills() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fill');
          }
        });
      },
      { threshold: 0.2 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
         <div className="flex items-center justify-center gap-3 mb-12 md:mb-16">
          <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#1F8A70]" />
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Mes <span className="text-[#1F8A70]">Compétences</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
           <div className="space-y-10">
            <h3 className="text-2xl font-semibold text-center md:text-left text-zinc-800 dark:text-zinc-200">
              Frontend & Web
            </h3>
            <div className="space-y-8">
              {frontendSkills.map((skill, idx) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      ref={(el) => (progressRefs.current[idx] = el)}
                      className={`h-full ${skill.barClass} rounded-full origin-left scale-x-0 transition-transform duration-1500 ease-out`}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

           <div className="space-y-10">
            <h3 className="text-2xl font-semibold text-center md:text-left text-zinc-800 dark:text-zinc-200">
              Autres Technologies
            </h3>
            <div className="space-y-8">
              {otherSkills.map((skill, idx) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      ref={(el) => (progressRefs.current[idx + frontendSkills.length] = el)}
                      className={`h-full ${skill.barClass} rounded-full origin-left scale-x-0 transition-transform duration-1500 ease-out`}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}