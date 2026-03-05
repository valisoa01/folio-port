// src/components/Skills.tsx
import { Code, Database, Server, Terminal, GitBranch, Coffee, Cpu, Globe, Zap, Layers, FileText} from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: Globe, color: 'text-orange-500' },
  { name: 'CSS3', icon: Layers, color: 'text-blue-400' },
  { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: FileText, color: 'text-blue-500' },
  { name: 'React', icon: Zap, color: 'text-cyan-400' },
  { name: 'Node.js', icon: Server, color: 'text-green-500' },
  { name: 'Express.js', icon: Terminal, color: 'text-gray-300' },
  { name: 'Java', icon: Coffee, color: 'text-red-500' },
  { name: 'C++', icon: Cpu, color: 'text-yellow-500' },
   { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: Layers, color: 'text-teal-400' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
  { name: 'Prisma', icon: Database, color: 'text-indigo-400' },
  { name: 'Linux', icon: Terminal, color: 'text-gray-400' },
  { name : 'Bootstrap', icon: Layers, color: 'text-purple-400' },
 ];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-20 md:py-32
        bg-gradient-to-b from-zinc-950 to-black
        dark:from-black dark:to-zinc-950
        overflow-hidden
      "
    >
       <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1F8A7030_0%,transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,#1F8A7030_0%,transparent_50%)] animate-pulse-slow delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
         <div className="text-center mb-16 md:mb-20">
          <h2 className="
            text-4xl sm:text-5xl md:text-6xl font-bold
            bg-gradient-to-r from-[#1F8A70] via-teal-400 to-cyan-400
            bg-clip-text text-transparent
            tracking-tight
          ">
            My Skills
          </h2>
          <p className="
            mt-4 text-lg md:text-xl text-zinc-400
            max-w-3xl mx-auto
          ">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

         <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-4 sm:gap-6 md:gap-8
        ">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="
                  group relative
                  bg-zinc-900/70 backdrop-blur-md
                  border border-zinc-800/50
                  rounded-xl p-6
                  hover:border-[#1F8A70]/50
                  hover:shadow-[0_0_25px_rgba(31,138,112,0.25)]
                  transition-all duration-300
                  hover:-translate-y-1.5
                  overflow-hidden
                "
              >
                 <div className="
                  absolute inset-0
                  bg-gradient-to-br from-[#1F8A70]/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <Icon
                    className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${skill.color}`}
                  />
                  <span className="
                    text-base md:text-lg font-medium
                    text-zinc-200 group-hover:text-white
                    transition-colors duration-300
                  ">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}