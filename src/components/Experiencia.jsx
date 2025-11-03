import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

function Experiencia() {
  const experiences = [
    {
      type: 'educacion',
      icon: GraduationCap,
      title: 'Desarrollo de software',
      organization: 'Servicio Nacional de Aprendizaje - SENA',
      period: '2023 - 2024 ',
      description:
        'Tecnologo en analisis y desarrollo de software, enfocado en la creacion de aplicaciones web y moviles.',
      color: 'hsl(var(--primary))',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Desarrollor full stack',
      organization: 'cafioccidente coperativa de cafe',
      period: '2024 - 2025',
      description:
        'Desarrollo de soluciones tecnológicas para la automatización y gestión eficiente de procesos internos.',
      color: 'hsl(var(--secondary))',
    },
  ];
  return (
    <section
      id="experiencia"
      className="min-h-screen py-20 px-6 bg-[hsl(var(--cn-light-gray))] relative"
    >
      {/* Pattern background */}
      <div className="absolute inset-0 cn-pattern-diagonal pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[hsl(var(--cn-black))] mb-16 text-center">
            Experiencia & Educación
          </h2>
        </motion.div>

        {/* Comic strip style timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[hsl(var(--cn-black))] hidden sm:block" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${exp.title}-${index}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className="w-16 h-16 rounded-full border-4 border-[hsl(var(--cn-black))] flex items-center justify-center shadow-[4px_4px_0_hsl(var(--cn-black))]"
                      style={{ backgroundColor: exp.color }}
                    >
                      <Icon
                        size={28}
                        className="text-[hsl(var(--cn-white))]"
                        strokeWidth={3}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="w-full md:w-[calc(50%-4rem)] flex justify-end">
                    <div className="w-full bg-[hsl(var(--cn-white))] p-6 border-[5px] border-[hsl(var(--cn-black))] shadow-[6px_6px_0_hsl(var(--cn-black))] hover:shadow-[8px_8px_0_hsl(var(--cn-black))] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">
                      {/* Mobile icon */}
                      <div className="flex items-start gap-4 mb-4 md:hidden">
                        <div
                          className="w-12 h-12 rounded-lg border-3 border-[hsl(var(--cn-black))] flex items-center justify-center shrink-0"
                          style={{ backgroundColor: exp.color }}
                        >
                          <Icon
                            size={24}
                            className="text-[hsl(var(--cn-white))]"
                            strokeWidth={3}
                          />
                        </div>
                        <div>
                          <h3 className="text-[hsl(var(--cn-black))]">
                            {exp.title}
                          </h3>
                          <p className="text-[hsl(var(--cn-gray))]">
                            {exp.organization}
                          </p>
                        </div>
                      </div>

                      {/* Desktop title */}
                      <div className="hidden md:block mb-4">
                        <h3 className="text-[hsl(var(--cn-black))]">
                          {exp.title}
                        </h3>
                        <p className="text-[hsl(var(--cn-gray))]">
                          {exp.organization}
                        </p>
                      </div>

                      <div
                        className="inline-block px-3 py-1 mb-3 border-2 border-[hsl(var(--cn-black))]"
                        style={{ backgroundColor: exp.color }}
                      >
                        <span className="text-[hsl(var(--cn-white))]">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-[hsl(var(--cn-gray))]">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-4rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
