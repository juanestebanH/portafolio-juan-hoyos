import { motion } from 'framer-motion';
import { div, h1 } from 'framer-motion/client';
import { ExternalLink, Github } from 'lucide-react';

function Proyectos() {
  const projects = [
    //   {
    //     title: 'E-Commerce Platform',
    //     description:
    //       'Plataforma de comercio electrónico completa con pasarela de pagos y gestión de inventario.',
    //     image:
    //       'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjA2NzY4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    //     tags: ['React', 'Node.js', 'MongoDB'],
    //     color: 'hsl(var(--primary))',
    //   },
  ];
  return (
    <section
      id="proyectos"
      className="min-h-screen py-20 px-6 bg-[hsl(var(--cn-black))] relative"
    >
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 border-4 border-[hsl(var(--primary))] opacity-10 rotate-45" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-[hsl(var(--secondary))] opacity-10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[hsl(var(--cn-white))] mb-4 text-center">
            Proyectos Destacados
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className="group"
              >
                <div className="bg-[hsl(var(--cn-white))] border-[5px] border-[hsl(var(--cn-black))] shadow-[6px_6px_0_hsl(var(--cn-black))] overflow-hidden group-hover:shadow-[8px_8px_0_hsl(var(--cn-black))] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200 h-full flex flex-col">
                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden border-b-[5px] border-[hsl(var(--cn-black))]">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className="absolute top-0 left-0 w-2 h-full"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  {/* Project content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-[hsl(var(--cn-black))] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[hsl(var(--cn-gray))] mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[hsl(var(--cn-light-gray))] text-[hsl(var(--cn-black))] border-2 border-[hsl(var(--cn-black))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-[hsl(var(--primary))] text-[hsl(var(--cn-white))] py-3 border-3 border-[hsl(var(--cn-black))] hover:bg-[hsl(var(--secondary))] transition-colors duration-200 flex items-center justify-center gap-2">
                        <ExternalLink size={18} strokeWidth={3} />
                        Demo
                      </button>
                      <button className="flex-1 bg-[hsl(var(--cn-dark-gray))] text-[hsl(var(--cn-white))] py-3 border-3 border-[hsl(var(--cn-black))] hover:bg-[hsl(var(--cn-gray))] transition-colors duration-200 flex items-center justify-center gap-2">
                        <Github size={18} strokeWidth={3} />
                        Código
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center col-span-3">
              <h3 className="mt-16 text-[hsl(var(--cn-white))]">
                Realizando proyectos...
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
