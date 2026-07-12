import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaProjectDiagram
} from "react-icons/fa";

import Footer from "../components/Footer";


export default function Desenvolvidor() {

  const desenvolvedores = [
    {
      nome: "Augusto Firmino",
      instituicao: "ISPEKA",
      funcao: "Full Stack Developer",

      biografia:
        "Desenvolvedor focado na criação de aplicações web modernas, sistemas de streaming, plataformas digitais e soluções utilizando tecnologias atuais como React.js, Node.js e bases de dados.",

      tecnologias: [
        "React.js",
        "Node.js",
        "MySQL",
        "Socket.io",
        "Tailwind CSS"
      ],

      projetos: [
        "RCTV Stream - Plataforma de transmissão online em direto",
        "Sistema de gestão de conteúdos digitais",
        "Aplicações web responsivas"
      ],

      contactos: {
        email: "augusto@email.com",
        telefone: "+244 900 000 000",
        github: "#",
        linkedin: "#"
      }

    },


    {
      nome: "Segundo Desenvolvedor",
      instituicao: "Instituição de Tecnologia",

      funcao:
        "Frontend Developer",

      biografia:
        "Especialista no desenvolvimento de interfaces modernas, experiências digitais e criação de componentes reutilizáveis com foco em desempenho e usabilidade.",


      tecnologias: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "UI Design"
      ],


      projetos: [
        "Interfaces para plataformas digitais",
        "Sistemas administrativos",
        "Sites institucionais modernos"
      ],


      contactos: {
        email: "desenvolvedor@email.com",
        telefone: "+244 900 000 001",
        github: "#",
        linkedin: "#"
      }

    }

  ];


  return (

    <div className="min-h-screen bg-gray-950 text-white">


      {/* Cabeçalho */}

      <header
        className="
        flex
        items-center
        gap-5
        p-6
        bg-gray-900
        "
      >

        <Link
          to="/"
          className="
          w-11
          h-11
          rounded-full
          bg-red-700
          flex
          items-center
          justify-center
          hover:bg-red-600
          transition
          "
        >

          <FaArrowLeft />

        </Link>


        <div>

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            Desenvolvedores
          </h1>

          <p className="text-gray-400">
            Conheça a equipa responsável pelos projetos
          </p>

        </div>


      </header>



      {/* Desenvolvedores */}

      <main
        className="
        max-w-6xl
        mx-auto
        px-6
        py-12
        space-y-12
        "
      >


        {
          desenvolvedores.map((dev,index)=>(


            <section
              key={index}
              className="
              bg-gray-900
              rounded-3xl
              p-8
              shadow-xl
              "
            >


              {/* Perfil */}

              <div
                className="
                flex
                flex-col
                md:flex-row
                gap-8
                items-center
                "
              >


                <div
                  className="
                  w-32
                  h-32
                  rounded-full
                  bg-red-700
                  flex
                  items-center
                  justify-center
                  text-5xl
                  "
                >

                  <FaCode />

                </div>



                <div>


                  <h2
                    className="
                    text-3xl
                    font-bold
                    "
                  >
                    {dev.nome}
                  </h2>


                  <p className="text-red-500 mt-2">
                    {dev.funcao}
                  </p>


                  <p className="text-gray-400">
                    {dev.instituicao}
                  </p>


                </div>


              </div>




              {/* Biografia */}

              <div className="mt-8">


                <h3 className="
                text-xl
                font-bold
                flex
                items-center
                gap-2
                ">

                  <FaCode/>
                  Biografia

                </h3>


                <p
                  className="
                  text-gray-300
                  mt-3
                  leading-relaxed
                  "
                >

                  {dev.biografia}

                </p>


              </div>




              {/* Tecnologias */}

              <div className="mt-8">


                <h3 className="
                text-xl
                font-bold
                ">

                  Tecnologias

                </h3>


                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-4
                  "
                >

                  {
                    dev.tecnologias.map((tec)=>(

                      <span
                        key={tec}
                        className="
                        bg-red-700
                        px-4
                        py-2
                        rounded-full
                        "
                      >

                        {tec}

                      </span>

                    ))
                  }

                </div>


              </div>




              {/* Projetos */}

              <div className="mt-8">


                <h3
                  className="
                  text-xl
                  font-bold
                  flex
                  gap-2
                  items-center
                  "
                >

                  <FaProjectDiagram/>

                  Projetos realizados

                </h3>


                <ul
                  className="
                  mt-4
                  space-y-3
                  text-gray-300
                  "
                >

                  {
                    dev.projetos.map((proj)=>(

                      <li key={proj}>
                        • {proj}
                      </li>

                    ))
                  }

                </ul>


              </div>




              {/* Contactos */}

              <div className="mt-8">


                <h3 className="text-xl font-bold">

                  Contactos para projetos

                </h3>


                <div
                  className="
                  mt-4
                  grid
                  md:grid-cols-2
                  gap-4
                  "
                >


                  <p>
                    <FaEnvelope className="inline mr-2 text-red-500"/>
                    {dev.contactos.email}
                  </p>


                  <p>
                    <FaPhone className="inline mr-2 text-red-500"/>
                    {dev.contactos.telefone}
                  </p>


                  <a href={dev.contactos.github}>
                    <FaGithub className="inline mr-2 text-red-500"/>
                    GitHub
                  </a>


                  <a href={dev.contactos.linkedin}>
                    <FaLinkedin className="inline mr-2 text-red-500"/>
                    LinkedIn
                  </a>


                </div>


              </div>



            </section>


          ))
        }


      </main>



      <Footer/>


    </div>

  );

}