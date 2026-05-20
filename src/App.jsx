import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import foto from './assets/FotoPerfil.jpeg'
import parqueaImg from './assets/parquea.png'

export default function PortfolioBrayan() {

  

  const tecnologias = [
    'Java',
    'Spring Boot',
    'React',
    'MongoDB',
    'MySQL',
    'Git',
    'Linux',
    'JavaScript',
    'HTML',
    'CSS',
    'PHP',
    'QA Testing'
  ];

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
      titulo: 'Sistema POS Restaurante',
      descripcion:
        'Sistema web para restaurantes orientado a meseros, cocina y caja con manejo de pedidos en tiempo real y división de cuentas.',
      tecnologias: 'React, MongoDB, Spring Boot',
      github: '#'
    },
    {
      titulo: 'QA & Software Testing',
      descripcion:
        'Experiencia en validación funcional, pruebas de software, análisis de incidencias y soporte sobre aplicaciones empresariales.',
      tecnologias: 'QA, Git, Linux',
      github: '#'
    }
  ];

  const experiencia = [
    {
      cargo: 'Ingeniero de Sistemas',
      empresa: 'Neurotrauma Center & Cuidamed S.A.S',
      fecha: '2024 - Actualidad',
      descripcion:
        'Soporte tecnológico, mantenimiento de sistemas, gestión de infraestructura y apoyo en soluciones administrativas.'
    }
  ];

  const certificados = [
    'Construcción de Bases de Datos con MySQL',
    'Programación Web con HTML, CSS y JavaScript',
    'Creación y Diseño de Páginas Web',
    'Conceptualización del Lenguaje C++',
    'Marketing Digital'
  ];

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
              Ingeniero de Sistemas | Java Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-8">
              Ingeniero de sistemas con experiencia en desarrollo de software,
              pruebas QA y aplicaciones empresariales. Enfocado en tecnologías
              Java, React, bases de datos y soluciones administrativas modernas.
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
              <div
                key={tech}
                className="bg-zinc-900 border border-zinc-800 hover:border-green-500 transition rounded-2xl p-6 text-center"
              >

                <p className="text-lg font-semibold">
                  {tech}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="px-6 py-24 max-w-7xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {proyectos.map((proyecto) => (
            <div
              key={proyecto.titulo}
              className="bg-zinc-900 border border-zinc-800 hover:border-green-500 transition rounded-3xl p-6"
            >

              <div className="h-44 w-full rounded-2xl mb-6 overflow-hidden bg-zinc-800 flex items-center justify-center">

                {proyecto.video ? (

                  <video
                    src={proyecto.video}
                    autoPlay
                    muted
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

              <h3 className="text-2xl font-bold mb-4">
                {proyecto.titulo}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">
                {proyecto.descripcion}
              </p>

              <p className="text-green-400 text-sm mb-6">
                {proyecto.tecnologias}
              </p>

             <a
                href={proyecto.github}
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center bg-green-500 hover:bg-green-600 transition py-3 rounded-xl text-black font-bold"
              >
                Ver GitHub
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
              key={cert}
              className="bg-zinc-900 border border-zinc-800 hover:border-green-500 transition rounded-2xl p-6"
            >

              <p className="text-lg font-semibold">
                {cert}
              </p>

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

    </div>
  );
}