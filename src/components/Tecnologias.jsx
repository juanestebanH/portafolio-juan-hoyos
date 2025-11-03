import { motion } from 'framer-motion';
import { Code2, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';
import IconReact from '../assets/react.svg?react';
import IconGit from '../assets/git.svg?react';
import IconMysql from '../assets/mysql-icon-light.svg?react';
import IconNode from '../assets/nodejs.svg?react';
import IconJavascript from '../assets/javascript.svg?react';
import IconPhyton from '../assets/python.svg?react';
import IconTailwind from '../assets/tailwindcss.svg?react';
import IconHtmlCss from '../assets/cod.svg?react';

function Tecnologias() {
  const technologies = [
    { name: 'Html/Css', icon: IconHtmlCss, color: 'hsl(var(--primary))' },
    {
      name: 'React',
      icon: IconReact,
      color: 'hsl(var(--primary))',
    },
    {
      name: 'Tailwind css',
      icon: IconTailwind,
      color: 'hsl(var(--secondary))',
    },
    { name: 'Node js', icon: IconNode, color: 'hsl(var(--secondary))' },
    { name: 'MySQL', icon: IconMysql, color: 'hsl(var(--accent))' },
    { name: 'JavaScript', icon: IconJavascript, color: 'hsl(var(--accent))' },
    {
      name: 'Phyton',
      icon: IconPhyton,
      color: 'hsl(var(--cn-deep-red))',
    },
    { name: 'Git', icon: IconGit, color: 'hsl(var(--cn-deep-red))' },
  ];

  return (
    <section
      id="tecnologias"
      className="min-h-screen py-20 px-6 bg-[hsl(var(--cn-dark-gray))] relative"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 cn-pattern-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[hsl(var(--cn-white))] mb-4 text-center">
            Tecnologías
          </h2>
          <p className="text-[hsl(var(--cn-light-gray))] text-center mb-16 max-w-2xl mx-auto">
            Herramientas y tecnologías que uso para dar vida a mis proyectos
          </p>
        </motion.div>

        {/* Technology blocks - CN style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: 'spring',
                  bounce: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [-1, 1, -1, 0],
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-[hsl(var(--cn-white))] p-6 border-4 border-[hsl(var(--cn-black))] shadow-[4px_4px_0_hsl(var(--cn-black))] group-hover:shadow-[6px_6px_0_hsl(var(--cn-black))] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200 h-full flex flex-col items-center justify-center text-center min-h-40">
                  <div
                    className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg border-3 border-[hsl(var(--cn-black))]"
                    style={{ backgroundColor: tech.color }}
                  >
                    <tech.icon className="text-[hsl(var(--cn-white))]" />
                  </div>
                  <h3 className="text-[hsl(var(--cn-black))]">{tech.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-[hsl(var(--primary))] p-8 border-4 border-[hsl(var(--cn-black))] shadow-[6px_6px_0_hsl(var(--cn-black))]"
        >
          <p className="text-[hsl(var(--cn-white))] text-center">
            Siempre aprendiendo nuevas tecnologías y expandiendo mi stack para
            crear mejores soluciones
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Tecnologias;
