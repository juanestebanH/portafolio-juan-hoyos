import { motion } from 'framer-motion';
import { User, Code, Zap } from 'lucide-react';

function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen py-20 px-6 bg-[hsl(var(--cn-light-gray))] relative"
    >
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 cn-pattern-diagonal pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[hsl(var(--cn-black))] mb-12 text-center">
            Sobre Mí
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 bg-[hsl(var(--cn-white))] border-[6px] border-[hsl(var(--cn-black))] shadow-[8px_8px_0_hsl(var(--cn-black))] flex items-center justify-center rounded-3xl overflow-hidden">
              {/* Placeholder avatar - replace with actual image */}
              <div className="w-full h-full bg-linear-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center">
                <svg viewBox="0 0 200 250" className="w-full">
                  {/* Head */}
                  <circle
                    cx="100"
                    cy="80"
                    r="50"
                    fill="#E5E5E5"
                    stroke="#000000"
                    strokeWidth="3"
                  />

                  {/* Eyes - Simple dots */}
                  <circle cx="85" cy="75" r="4" fill="#000000" />
                  <circle cx="115" cy="75" r="4" fill="#000000" />

                  {/* Minimalist smile */}
                  <path
                    d="M 80 95 Q 100 105 120 95"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Simple hair */}
                  <path
                    d="M 60 50 L 50 35 M 80 45 L 80 25 M 100 40 L 105 20 M 120 45 L 125 25 M 140 50 L 150 35"
                    stroke="#4B2400"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  {/* Body - Rectangle */}
                  <rect
                    x="60"
                    y="125"
                    width="80"
                    height="100"
                    fill="#00000"
                    stroke="#000000"
                    strokeWidth="3"
                  />

                  {/* Arms - Simple lines */}
                  <line
                    x1="60"
                    y1="140"
                    x2="30"
                    y2="180"
                    stroke="#E5E5E5"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <line
                    x1="140"
                    y1="140"
                    x2="170"
                    y2="180"
                    stroke="#E5E5E5"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />

                  {/* Hands */}
                  <circle
                    cx="30"
                    cy="185"
                    r="8"
                    fill="#E5E5E5"
                    stroke="#000000"
                    strokeWidth="2"
                  />
                  <circle
                    cx="170"
                    cy="185"
                    r="8"
                    fill="#E5E5E5"
                    stroke="#000000"
                    strokeWidth="2"
                  />

                  {/* Code Symbol */}
                  <text
                    x="100"
                    y="175"
                    fontSize="24"
                    fill="#000000"
                    textAnchor="middle"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {'</>'}
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-[hsl(var(--cn-white))] p-8 border-[5px] border-[hsl(var(--cn-black))] shadow-[6px_6px_0_hsl(var(--cn-black))]">
              <p className="text-[hsl(var(--cn-dark-gray))] mb-4">
                ¡Hola! Soy Juan Esteban Hoyos de Colombia. Estudié Análisis y
                Desarrollo de Software y me apasiona todo lo relacionado con la
                tecnología. Me encanta aprender cosas nuevas, tengo experiencias
                herramientas como React, Node.js, MySQL, TailwindCSS, Python y
                JavaScript, y poner en práctica mis conocimientos en proyectos
                reales.
              </p>
              <p className="text-[hsl(var(--cn-dark-gray))]">
                Soy una persona curiosa, autodidacta y adaptable, siempre
                buscando retos que me permitan crecer y mejorar.
              </p>
            </div>

            {/* Skills highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[hsl(var(--primary))] p-6 border-4 border-[hsl(var(--cn-black))] shadow-[4px_4px_0_hsl(var(--cn-black))] hover:shadow-[6px_6px_0_hsl(var(--cn-black))] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">
                <Code
                  size={32}
                  className="text-[hsl(var(--cn-white))] mb-2"
                  strokeWidth={3}
                />
                <h3 className="text-[hsl(var(--cn-white))]">Logico</h3>
              </div>
              <div className="bg-[hsl(var(--secondary))] p-6 border-4 border-[hsl(var(--cn-black))] shadow-[4px_4px_0_hsl(var(--cn-black))] hover:shadow-[6px_6px_0_hsl(var(--cn-black))] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">
                <Zap
                  size={32}
                  className="text-[hsl(var(--cn-white))] mb-2"
                  strokeWidth={3}
                />
                <h3 className="text-[hsl(var(--cn-white))]">Eficiente</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
