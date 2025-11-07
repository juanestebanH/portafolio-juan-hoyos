import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[hsl(var(--cn-black))]"
    >
      {/* Geometric shapes background - CN style */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--primary))] opacity-20 rounded-full"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-40 border-4 border-[hsl(var(--secondary))] opacity-20"
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-[hsl(var(--accent))] opacity-20"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-36 h-36 border-4 border-[hsl(var(--cn-deep-red))] opacity-20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 cn-pattern-grid pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            bounce: 0.4,
          }}
        >
          <h1 className="text-[hsl(var(--cn-white))] mb-4">Juan Hoyos</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: 'spring',
            bounce: 0.4,
          }}
          className="inline-block"
        >
          <div className="bg-[hsl(var(--primary))] px-8 py-4 border-4 border-[hsl(var(--cn-black))] shadow-[6px_6px_0_hsl(var(--cn-black))]">
            <h2 className="text-[hsl(var(--cn-black))]">
              Desarrollador Full Stack
            </h2>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-[hsl(var(--cn-light-gray))] max-w-2xl mx-auto"
        >
          Apasionado por crear experiencias digitales increíbles y soluciones
          innovadoras
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="https://www.linkedin.com/in/juan-esteban-hoyos-0b60912b4/"
            target="_blank"
            className="group flex gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--cn-white))] px-8 py-4 border-4 border-[hsl(var(--cn-black))] shadow-[4px_4px_0_hsl(var(--cn-black))] hover:shadow-[6px_6px_0_hsl(var(--cn-black))] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
          >
            <Linkedin /> Linkedin
          </a>
          <a
            href="/cv_JuanHoyos.pdf"
            download="CV_JuanHoyos.pdf"
            className="group bg-transparent text-[hsl(var(--cn-white))] px-8 py-4 border-4 border-[hsl(var(--cn-white))] shadow-[4px_4px_0_hsl(var(--cn-white))] hover:shadow-[6px_6px_0_hsl(var(--cn-white))] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
          >
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Inicio;
