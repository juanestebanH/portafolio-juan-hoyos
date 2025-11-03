import { motion } from 'framer-motion';
import { Github, Linkedin, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

function Contacto() {
  const [estadoEnvio, setEstadoEnvio] = useState(0); // 0: sin enviar, 1: enviado, 2: error
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/juanestebanH',
      color: 'hsl(var(--cn-dark-gray))',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/juan-esteban-hoyos-0b60912b4',
      color: 'hsl(var(--primary))',
    },
  ];

  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_27ecmm7', // Service ID
        'template_1ujbt2e', // Template ID
        form.current,
        '8XOsc6JgD28fsiEwo' // Public Key
      )
      .then(
        () => {
          toast.success('Mensaje enviado con exito');
          form.current.reset();
        },
        (error) => {
          toast.error('Ocurrio un error, intenta de nuevo');
        }
      );
  };

  return (
    <section
      id="contacto"
      className="min-h-screen py-20 px-6 bg-[hsl(var(--cn-dark-gray))] relative"
    >
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-4 border-[hsl(var(--primary))] opacity-10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-[hsl(var(--secondary))] opacity-10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[hsl(var(--cn-white))] mb-4 text-center">
            ¡Hablemos!
          </h2>
          <p className="text-[hsl(var(--cn-light-gray))] text-center mb-16 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? Contáctame y
            hagamos algo increíble juntos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[hsl(var(--cn-white))] p-8 border-[5px] border-[hsl(var(--cn-black))] shadow-[8px_8px_0_hsl(var(--cn-black))]">
              <form ref={form} onSubmit={enviarCorreo} className="space-y-6">
                <div>
                  <label className="block text-[hsl(var(--cn-black))] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 border-3 border-[hsl(var(--cn-black))] focus:border-[hsl(var(--primary))] bg-[hsl(var(--cn-light-gray))] text-[hsl(var(--cn-black))] rounded-none shadow-[2px_2px_0_hsl(var(--cn-black))]"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-[hsl(var(--cn-black))] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-2  border-3 border-[hsl(var(--cn-black))] focus:border-[hsl(var(--primary))] bg-[hsl(var(--cn-light-gray))] text-[hsl(var(--cn-black))] rounded-none shadow-[2px_2px_0_hsl(var(--cn-black))]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[hsl(var(--cn-black))] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className=" w-full p-2 border-3 border-[hsl(var(--cn-black))] focus:border-[hsl(var(--primary))] bg-[hsl(var(--cn-light-gray))] text-[hsl(var(--cn-black))] rounded-none shadow-[2px_2px_0_hsl(var(--cn-black))] resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--cn-white))] py-4 border-4 border-[hsl(var(--cn-black))] shadow-[4px_4px_0_hsl(var(--cn-black))] hover:shadow-[6px_6px_0_hsl(var(--cn-black))] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} strokeWidth={3} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>

          {/* Social links and info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {/* Info block */}
            <div className="bg-[hsl(var(--primary))] p-8 border-[5px] border-[hsl(var(--cn-black))] shadow-[8px_8px_0_hsl(var(--cn-black))]">
              <h3 className="text-[hsl(var(--cn-white))] mb-4">Conectemos</h3>
              <p className="text-[hsl(var(--cn-white))]">
                Siempre estoy abierto a nuevas oportunidades y colaboraciones.
                No dudes en contactarme a través de cualquiera de mis redes
                sociales.
              </p>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <div className="bg-[hsl(var(--cn-white))] p-6 border-4 border-[hsl(var(--cn-black))] shadow-[4px_4px_0_hsl(var(--cn-black))] group-hover:shadow-[6px_6px_0_hsl(var(--cn-black))] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200 flex flex-col items-center justify-center text-center min-h-[140px]">
                      <div
                        className="w-14 h-14 mb-3 flex items-center justify-center rounded-lg border-3 border-[hsl(var(--cn-black))]"
                        style={{ backgroundColor: social.color }}
                      >
                        <Icon
                          size={28}
                          className="text-[hsl(var(--cn-white))]"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-[hsl(var(--cn-black))]">
                        {social.name}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default Contacto;
