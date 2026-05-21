import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEye,
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaDocker,
  FaLaravel,
  FaVuejs
} from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiJenkins
} from 'react-icons/si'

import { useState } from 'react'

import foto from './assets/FotoPerfil.jpeg'
import parqueaImg from './assets/parquea.png'
import maia from './assets/maia.png'

/* CERTIFICADOS */
import cert1 from './assets/certificados/BD.pdf'
import cert2 from './assets/certificados/C.pdf'
import cert3 from './assets/certificados/CREACION.pdf'
import cert4 from './assets/certificados/PAGINAS.pdf'
import cert5 from './assets/certificados/MARKETING.pdf'

export default function PortfolioBrayan() {

  const [pdfActivo, setPdfActivo] = useState(null)
  const [techActiva, setTechActiva] = useState(null)

  /* TECNOLOGIAS */

  const tecnologias = [
    {
      nombre: 'Java',
      icono: <FaJava className="text-4xl text-orange-400" />,
      nivel: 90
    },
    {
      nombre: 'Spring Boot',
      icono: <SiSpringboot className="text-4xl text-green-500" />,
      nivel: 82
    },
    {
      nombre: 'React',
      icono: <FaReact className="text-4xl text-cyan-400" />,
      nivel: 78
    },
    {
      nombre: 'Vue.js',
      icono: <FaVuejs className="text-4xl text-green-400" />,
      nivel: 72
    },
    {
      nombre: 'Laravel',
      icono: <FaLaravel className="text-4xl text-red-500" />,
      nivel: 74
    },
    {
      nombre: 'MongoDB',
      icono: <SiMongodb className="text-4xl text-green-400" />,
      nivel: 70
    },
    {
      nombre: 'MySQL',
      icono: <SiMysql className="text-4xl text-blue-400" />,
      nivel: 88
    },
    {
      nombre: 'Git',
      icono: <FaGitAlt className="text-4xl text-orange-500" />,
      nivel: 85
    },
    {
      nombre: 'Docker',
      icono: <FaDocker className="text-4xl text-blue-400" />,
      nivel: 70
    },
    {
      nombre: 'Linux',
      icono: <FaLinux className="text-4xl text-yellow-400" />,
      nivel: 78
    },
    {
      nombre: 'JavaScript',
      icono: <FaJs className="text-4xl text-yellow-300" />,
      nivel: 82
    },
    {
      nombre: 'HTML',
      icono: <FaHtml5 className="text-4xl text-orange-600" />,
      nivel: 92
    },
    {
      nombre: 'CSS',
      icono: <FaCss3Alt className="text-4xl text-blue-500" />,
      nivel: 86
    },
    {
      nombre: 'PHP',
      icono: <FaPhp className="text-4xl text-indigo-400" />,
      nivel: 75
    },
    {
      nombre: 'Jenkins',
      icono: <SiJenkins className="text-4xl text-red-400" />,
      nivel: 68
    }
  ]

  /* PROYECTOS */

  const proyectos = [
    {
      titulo: 'Sistema de Parqueadero',
      descripcion:
        'Sistema administrativo desarrollado en Java Swing con control de ingreso y salida de vehículos, autenticación por roles, facturación y conexión a base de datos.',
      tecnologias: 'Java, Swing, MySQL',
      github: 'https://github.com/brayanvelandia001/Parquea',
      imagen: parqueaImg,
      video: '/videos/parquea.mp4'
    },

    {
      titulo: 'Sistema de Votaciones Electrónicas',
      descripcion:
        'Aplicación web desarrollada para la gestión de procesos de votación y registro de participantes, enfocada en control, validación y administración de datos en tiempo real.',
      tecnologias: 'PHP, MySQL, JavaScript, HTML, CSS',
      github: 'https://github.com/brayanvelandia001/VOTACIONES_PIEDECUESTA'
    },
    {
      titulo: 'QA & Desarrollo – MAIA ERP (UNIDROGAS / TIRESIA S.A.S)',
      descripcion:
        'Participación como Ingeniero de Sistemas en TIRESIA S.A.S dentro del ecosistema MAIA ERP para clientes como UNIDROGAS. Roles de desarrollo y QA, pruebas funcionales, validación de módulos, análisis de incidencias y soporte técnico en entorno empresarial.',
      tecnologias: 'QA, JMeter, Jenkins, Git, Linux, SQL, PERL, ERP',
      imagen: maia,
      link: 'https://tiresia.com.co/'
    }
  ]

  /* EXPERIENCIA */

  const experiencia = [
    {
      cargo: 'Ingeniero de Sistemas | Desarrollo y QA',
      empresa: 'TIRESIA S.A.S',
      fecha: 'Febrero 2025 - Abril 2026',
      descripcion:
        'Participación en el desarrollo y validación de soluciones empresariales para UNIDROGAS utilizando tecnologías PERL, SQL y FLEX. Ejecución de pruebas QA funcionales, soporte sobre desarrollos internos, manejo de Git y entornos Docker.'
    },

    {
      cargo: 'Analista de Pruebas',
      empresa: 'HEXASOLUTIONS',
      fecha: 'Noviembre 2024 - Enero 2025',
      descripcion:
        'Ejecución de pruebas funcionales y soporte nivel 2 sobre aplicaciones empresariales. Manejo de consultas SQL/MySQL, creación de SP, análisis de incidencias, uso de JMeter, Jenkins y herramientas de mesa de ayuda.'
    },

    {
      cargo: 'Ingeniero de Sistemas',
      empresa: 'Neurotrauma Center Cuidamed S.A.S',
      fecha: 'Febrero 2024 - Noviembre 2024',
      descripcion:
        'Desarrollo de soluciones internas con Java, JSF y SQL. Administración de servidores, backups, certificados de seguridad, soporte biomédico básico, facturación electrónica DIAN y creación de módulos administrativos para salud ocupacional.'
    },

    {
      cargo: 'Ingeniero de Sistemas',
      empresa: 'Superintendencia del Subsidio Familiar',
      fecha: 'Enero 2023 - Diciembre 2023',
      descripcion:
        'Desarrollo y soporte sobre herramientas SIMON V1 y V2. Participación en desarrollo Java, SQL, HTML y CSS, soporte nivel 1 y 2, administración Moodle, pruebas QA y pruebas de rendimiento con JMeter.'
    },

    {
      cargo: 'Ingeniero de Sistemas',
      empresa: 'NELIZ',
      fecha: 'Junio 2021 - Noviembre 2021',
      descripcion:
        'Desarrollo frontend con Vue.js y backend Laravel para soluciones orientadas al Banco Inmobiliario de Floridablanca (BIF). Manejo de bases de datos SQL y pruebas QA con automatización y análisis de performance.'
    },

    {
      cargo: 'Ingeniero de Sistemas | Prácticas',
      empresa: 'INTERMARKET',
      fecha: 'Julio 2020 - Diciembre 2020',
      descripcion:
        'Soporte y administración de páginas web de clientes, gestión de hosting y capacitación en herramientas de creación web como Elementor.'
    },

    {
      cargo: 'Ingeniero de Sistemas Freelance',
      empresa: 'SOPORTCOL',
      fecha: 'Marzo 2018 - Noviembre 2022',
      descripcion:
        'Desarrollo de soluciones web, soporte técnico, mantenimiento de sistemas, QA y acompañamiento tecnológico para diferentes clientes y proyectos empresariales.'
    }
  ]

  /* CERTIFICADOS */

  const certificados = [
    {
      titulo: 'Construcción de Bases de Datos con MySQL',
      pdf: cert1
    },
    {
      titulo: 'Conceptualización del Lenguaje C++',
      pdf: cert2
    },
    {
      titulo: 'Creación y Diseño de Páginas Web',
      pdf: cert3
    },
    {
      titulo: 'Programación Web con HTML, CSS y JavaScript',
      pdf: cert4
    },
    {
      titulo: 'Marketing Digital',
      pdf: cert5
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}

      <section className="px-6 py-24 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-green-400 text-lg mb-4">
              Hola, soy
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Brayan Velandia
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mt-5 font-semibold">
              Ingeniero de Sistemas | Full Stack Developer | QA Engineer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-8">
              Ingeniero de Sistemas con experiencia en desarrollo de software,
              pruebas QA, soporte empresarial y soluciones tecnológicas orientadas
              a optimizar procesos administrativos. Experiencia en tecnologías como
              Java, Spring Boot, React, PHP, PERL, FLEX, SQL y herramientas de
              testing y automatización como JMeter y Jenkins.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <a
                href="#proyectos"
                className="bg-green-500 hover:bg-green-600 transition px-7 py-3 rounded-2xl text-black font-bold"
              >
                Ver proyectos
              </a>

              <a
                href="/CV-Brayan-Velandia.pdf"
                download
                className="border border-zinc-700 hover:border-green-500 transition px-7 py-3 rounded-2xl"
              >
                Descargar CV
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 p-1 shadow-2xl">

              <img
                src={foto}
                alt="Brayan Velandia"
                className="w-full h-full object-cover rounded-full"
              />

            </div>

          </div>

        </div>

      </section>

    {/* TECNOLOGIAS */}
      <section className="bg-zinc-950 px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Tecnologías
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {tecnologias.map((tech) => (

              <button
                key={tech.nombre}
                onClick={() => setTechActiva(tech)}
                className="bg-zinc-900 border border-zinc-800 hover:border-green-500 hover:-translate-y-1 transition rounded-2xl p-6 text-center"
              >

                <div className="flex justify-center mb-4">
                  {tech.icono}
                </div>

                <p className="text-lg font-semibold">
                  {tech.nombre}
                </p>

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* MODAL TECNOLOGIA */}

          {techActiva && (

            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
              onClick={() => setTechActiva(null)}
            >

              <div
                className="relative w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-[32px] p-8 shadow-2xl shadow-green-500/10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >

                {/* EFECTO FONDO */}

                <div className="absolute -top-24 -right-24 w-52 h-52 bg-green-500/10 rounded-full blur-3xl" />

                <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="relative flex flex-col items-center text-center">

                  {/* BOTON CERRAR */}

                  <button
                    onClick={() => setTechActiva(null)}
                    className="absolute -top-2 -right-2 text-3xl text-zinc-500 hover:text-green-400 transition"
                  >
                    ×
                  </button>

                  {/* ICONO */}

                  <div className="relative mb-7">

                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 p-[4px] shadow-2xl shadow-green-500/20">

                      <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-6xl">

                        {techActiva.icono}

                      </div>

                    </div>

                    {/* BADGE */}

                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black border border-green-500 text-green-400 text-sm px-4 py-1 rounded-full font-bold shadow-lg shadow-green-500/20">
                      {techActiva.nivel}%
                    </div>

                  </div>

                  {/* NOMBRE */}

                  <h3 className="text-3xl font-bold mb-2">
                    {techActiva.nombre}
                  </h3>

                  <p className="text-gray-400 mb-8 text-sm">
                    Nivel de dominio profesional
                  </p>

                  {/* BARRA */}

                  <div className="w-full">

                    <div className="flex justify-between text-sm mb-2 text-gray-400">
                      <span>Progreso</span>
                      <span>{techActiva.nivel}%</span>
                    </div>

                    <div className="w-full bg-zinc-800 rounded-full h-5 overflow-hidden border border-zinc-700">

                      <div
                        className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 h-full rounded-full transition-all duration-700 shadow-lg shadow-green-500/30"
                        style={{ width: `${techActiva.nivel}%` }}
                      />

                    </div>

                  </div>

                  {/* TEXTO EXTRA */}

                  <div className="mt-6 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 w-full">

                    <p className="text-gray-400 text-sm leading-relaxed">
                      Experiencia aplicada en proyectos reales, desarrollo de soluciones
                      administrativas y buenas prácticas de programación.
                    </p>

                  </div>

                  {/* NIVEL */}

                  <div className="mt-5">

                    {techActiva.nivel >= 85 && (
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">
                        Nivel Avanzado
                      </span>
                    )}

                    {techActiva.nivel >= 70 && techActiva.nivel < 85 && (
                      <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30">
                        Nivel Intermedio
                      </span>
                    )}

                    {techActiva.nivel < 70 && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-500/30">
                        Nivel Básico
                      </span>
                    )}

                  </div>

                  {/* BOTON */}

                  <button
                    onClick={() => setTechActiva(null)}
                    className="mt-8 bg-gradient-to-r from-green-400 to-cyan-400 hover:scale-105 transition duration-300 px-8 py-3 rounded-2xl text-black font-bold shadow-lg shadow-green-500/20"
                  >
                    Cerrar
                  </button>

                </div>

              </div>

            </div>

          )}

      {/* PROYECTOS */}
     <section
        id="proyectos"
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.titulo}
              className="bg-zinc-900 border border-zinc-800 hover:border-green-500 transition rounded-3xl p-6 flex flex-col h-full"
            >

              {/* MEDIA */}
              <div className="h-44 w-full rounded-2xl mb-6 overflow-hidden bg-zinc-800 flex items-center justify-center">

                {proyecto.video ? (
                  <video
                    src={proyecto.video}
                    autoPlay
                    controls
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : proyecto.imagen ? (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="h-full w-full object-contain p-4"
                  />
                ) : (
                  <div className="text-gray-500 text-lg font-semibold">
                    Proyecto en desarrollo
                  </div>
                )}

              </div>

              {/* TITULO */}
              <h3 className="text-2xl font-bold mb-4">
                {proyecto.titulo}
              </h3>

              {/* DESCRIPCIÓN */}
              <p className="text-gray-400 leading-relaxed mb-5 flex-grow">
                {proyecto.descripcion}
              </p>

              {/* TECNOLOGÍAS */}
              <p className="text-green-400 text-sm mb-6">
                {proyecto.tecnologias}
              </p>

              {/* BOTÓN */}
              <a
                href={proyecto.github || proyecto.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition py-3 rounded-xl text-black font-bold"
              >
                {proyecto.github ? (
                  <>
                    <FaGithub className="text-xl" />
                    Ver GitHub
                  </>
                ) : (
                  <>
                    <FaExternalLinkAlt className="text-xl" />
                    Ver Empresa
                  </>
                )}
              </a>

            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-zinc-950 px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Experiencia
          </h2>

          <div className="space-y-6">

            {experiencia.map((exp) => (
              <div
                key={exp.cargo}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.cargo}
                    </h3>

                    <p className="text-green-400 mt-2">
                      {exp.empresa}
                    </p>
                  </div>

                  <p className="text-gray-500">
                    {exp.fecha}
                  </p>

                </div>

                <p className="text-gray-400 leading-relaxed mt-6">
                  {exp.descripcion}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CERTIFICADOS */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Certificaciones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {certificados.map((cert) => (
            <div
              key={cert.titulo}
              className="bg-zinc-900 border border-zinc-800 hover:border-green-500 transition rounded-2xl p-6 flex flex-col justify-between"
            >

             <>
            <p className="text-lg font-semibold mb-5 min-h-[56px]">
              {cert.titulo}
            </p>

          <button
            onClick={() => setPdfActivo(cert.pdf)}
            className="w-full bg-green-500 hover:bg-green-600 hover:scale-[1.02] transition duration-300 py-3 rounded-xl text-black font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
          >
            <FaEye />
            Ver Certificado
          </button>
          </>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACTO */}
     <div className="flex flex-wrap justify-center gap-5">

        <a
          href="https://www.linkedin.com/in/brayan-gonzalo-velandia-jaramillo-204875208"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-zinc-900 hover:bg-blue-600 transition px-7 py-3 rounded-2xl text-white font-bold border border-zinc-800"
        >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/brayanvelandia001"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-zinc-900 hover:bg-orange-500 transition px-7 py-3 rounded-2xl text-white font-bold border border-zinc-800"
        >
          <FaGithub className="text-2xl" />
          GitHub
        </a>

        <a
          href="https://wa.me/573212532600"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-zinc-900 hover:bg-green-600 transition px-7 py-3 rounded-2xl text-white font-bold border border-zinc-800"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </a>

      </div>

    {/* MODAL PDF */}

        {pdfActivo && (

          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setPdfActivo(null)}
          >

            <div
              className="relative w-full max-w-6xl h-[92vh] rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl shadow-green-500/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >

              {/* HEADER */}

              <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-zinc-800">

                <h3 className="text-white font-semibold text-lg">
                  Certificado
                </h3>

                <button
                  onClick={() => setPdfActivo(null)}
                  className="text-white text-3xl hover:text-green-400 transition"
                >
                  ×
                </button>

              </div>

              {/* PDF */}

              <iframe
                src={pdfActivo}
                title="Certificado"
                className="w-full h-full bg-white pt-16"
              />

            </div>

          </div>

        )}

    </div>
  );
}