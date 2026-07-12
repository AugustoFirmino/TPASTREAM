import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaBullhorn,
  FaTimes
} from "react-icons/fa";


import dev1 from "../assets/devs1.jpeg";



function Desenvolvedores() {


const [projetoSelecionado, setProjetoSelecionado] = useState(null);



const desenvolvedor = {


nome:"Augusto Firmino Correia",

foto:dev1,


instituicao:"Ensino Médio: Instituto de Telecomunicações - ITEL",

universidade:"Ensino Superior: Instituto Superior Politécnico Kalandula de Angola - ISPEKA",


funcao:"Programador Full Stack | Técnico de Informática",



biografia:`

Augusto Firmino Correia, concluiu o Instituto de Telecomunicações - ITEL na área de formação média técnica como Técnico de Informática.

Atualmente frequenta o 2º Ano do Curso de Engenharia Informática no Instituto Superior Politécnico Kalandula de Angola - ISPEKA.

Dedicado ao desenvolvimento de soluções tecnológicas modernas, inovadoras e eficientes.

Atua na criação de aplicações web completas, sistemas digitais, plataformas online e soluções personalizadas.

Possui experiência em React.js, Node.js, APIs, MySQL, Tailwind CSS, Inteligência Artificial, Marketing Digital, Excel Avançado e Informática na Óptica do Utilizador.

`,



projetos:[

{
nome:"RCTV Stream - Plataforma de Transmissão Online",

descricao:`
Plataforma digital de transmissão de conteúdos em directo,
desenvolvida para disponibilizar canais online através da internet.

O sistema permite reprodução de vídeo, gestão de canais,
transmissão em tempo real e uma experiência semelhante
a uma televisão digital profissional.
`,

objetivo:`
Criar uma solução própria de streaming capaz de transmitir
conteúdos online de forma simples, rápida e acessível.
`,

link:"https://rctvstream.vercel.app",

estado:"Online",

tecnologias:[
"React.js",
"Node.js",
"Socket.io",
"Tailwind CSS",
"Cloudflare",
"Streaming"
]

},



{

nome:"Sistema de Gestão de Directores",

descricao:`
Sistema web desenvolvido para cadastro e administração
completa de informações de directores.

Permite gerir dados pessoais, biografias, experiências,
qualificações, imagens, depoimentos e informações profissionais.
`,

objetivo:`
Facilitar a organização e gestão de informações institucionais
através de uma plataforma digital moderna.
`,

link:"#",

estado:"Em desenvolvimento",

tecnologias:[
"React.js",
"Node.js",
"MySQL",
"Express",
"Cloudinary"
]

},




{

nome:"Tradutor Português - Kimbundu com Inteligência Artificial",

descricao:`
Projeto de tradução linguística criado para aproximar
a língua portuguesa e o Kimbundu através da tecnologia.

O sistema utiliza dicionário personalizado, regras gramaticais,
processamento de frases e possibilidade de integração
com reconhecimento de voz.
`,

objetivo:`
Preservar e valorizar a língua Kimbundu através de uma
ferramenta tecnológica de tradução.
`,

link:"#",

estado:"Em desenvolvimento",

tecnologias:[
"React.js",
"Node.js",
"MySQL",
"IA",
"Processamento de Linguagem Natural"
]

},




{

nome:"Sistemas Web Empresariais",

descricao:`
Desenvolvimento de sistemas personalizados para empresas,
incluindo plataformas administrativas, dashboards,
gestão de utilizadores e APIs.

As soluções são adaptadas às necessidades específicas
de cada organização.
`,

objetivo:`
Digitalizar processos empresariais e melhorar a produtividade
através de sistemas inteligentes.
`,

link:"#",

estado:"Projetos personalizados",

tecnologias:[
"React.js",
"Node.js",
"Express",
"MySQL",
"API REST"
]

},




{

nome:"Aplicações Digitais Personalizadas",

descricao:`
Criação de aplicações web personalizadas para diferentes
necessidades, desde websites institucionais até plataformas
digitais completas.

O foco é desenvolver experiências modernas, rápidas
e responsivas.
`,

objetivo:`
Transformar ideias em produtos digitais funcionais
e preparados para o mercado.
`,

link:"#",

estado:"Disponível para projetos",

tecnologias:[
"JavaScript",
"React.js",
"Tailwind CSS",
"Node.js"
]

}



],




tecnologias:[

"React.js",
"Node.js",
"MySQL",
"Tailwind CSS",
"JavaScript",
"Socket.io",
"Cloudinary",
"Inteligência Artificial",
"Marketing Digital"

],



email:"gugufirmino1@email.com",

telefone:"+244 942 081 324"


};





return (


<div className="
min-h-screen
bg-white
text-gray-900
py-10
px-5
">



<div className="
max-w-5xl
mx-auto
">



<Link

to="/"

className="
flex
items-center
gap-3
mb-10
text-red-600
font-bold
"

>

<FaArrowLeft/>

Voltar

</Link>






<div className="
bg-gray-50
rounded-3xl
shadow-lg
p-8
flex
flex-col
md:flex-row
items-center
gap-8
">


<img

src={desenvolvedor.foto}

alt={desenvolvedor.nome}

className="
w-52
h-52
rounded-full
object-cover
border-8
border-red-600
"

/>



<div>

<h1 className="
text-4xl
font-bold
">

{desenvolvedor.nome}

</h1>


<h2 className="
text-red-600
font-semibold
mt-2
">

{desenvolvedor.funcao}

</h2>


<p className="mt-3 text-gray-600">

{desenvolvedor.instituicao}

</p>


<p className="text-gray-600">

{desenvolvedor.universidade}

</p>


</div>


</div>







<section className="mt-10">


<h2 className="text-2xl font-bold mb-4">

Sobre mim

</h2>


<p className="
whitespace-pre-line
leading-relaxed
text-gray-700
">

{desenvolvedor.biografia}

</p>


</section>










<section className="mt-10">


<h2 className="
text-2xl
font-bold
mb-5
">

Projetos Realizados

</h2>




<div className="
grid
md:grid-cols-2
gap-5
">


{

desenvolvedor.projetos.map((projeto,index)=>(


<button

key={index}

onClick={()=>setProjetoSelecionado(projeto)}

className="
text-left
bg-gray-100
p-5
rounded-xl
border-l-4
border-red-600
hover:bg-red-50
transition
"

>


<h3 className="
font-bold
text-lg
">

{projeto.nome}

</h3>


<p className="
text-sm
text-gray-500
mt-2
">

Clique para ver detalhes

</p>


</button>


))


}


</div>


</section>








<section className="mt-10">


<h2 className="
text-2xl
font-bold
mb-5
">

Tecnologias

</h2>



<div className="
flex
flex-wrap
gap-3
">


{

desenvolvedor.tecnologias.map((tec,index)=>(


<span

key={index}

className="
bg-red-100
text-red-700
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


</section>









<section className="
mt-10
bg-gray-900
text-white
rounded-2xl
p-8
">


<h2 className="text-2xl font-bold mb-5">

Contactos para Projetos

</h2>



<p className="flex gap-3 items-center">

<FaEnvelope className="text-red-500"/>

{desenvolvedor.email}

</p>


<p className="flex gap-3 items-center mt-3">

<FaPhone className="text-red-500"/>

{desenvolvedor.telefone}

</p>



<div className="
flex
gap-6
text-3xl
mt-6
">


<a href="https://github.com/AugustoFirmino">

<FaGithub/>

</a>


<a href="https://www.linkedin.com/in/augusto-firmino-correia-a71287270/">

<FaLinkedin/>

</a>


</div>


</section>








{/* MODAL DOS PROJETOS */}

{

projetoSelecionado && (

<div className="
fixed
inset-0
bg-black/60
flex
items-center
justify-center
p-5
z-50
">


<div className="
bg-white
max-w-xl
w-full
rounded-2xl
p-8
relative
shadow-2xl
overflow-y-auto
max-h-[90vh]
">



<button

onClick={()=>setProjetoSelecionado(null)}

className="
absolute
right-5
top-5
text-red-600
text-xl
hover:scale-110
transition
"

>

<FaTimes/>

</button>





<h2 className="
text-2xl
font-bold
mb-5
text-gray-900
">

{projetoSelecionado.nome}

</h2>





{/* DESCRIÇÃO */}

<h3 className="
font-bold
text-lg
mb-2
text-red-600
">

Descrição do Projeto

</h3>


<p className="
text-gray-700
whitespace-pre-line
leading-relaxed
">

{projetoSelecionado.descricao}

</p>







{/* OBJECTIVO */}

<h3 className="
font-bold
text-lg
mt-6
mb-2
text-red-600
">

Objetivo do Projeto

</h3>


<p className="
text-gray-700
whitespace-pre-line
leading-relaxed
bg-gray-100
p-4
rounded-xl
">

{projetoSelecionado.objetivo}

</p>







{/* ESTADO */}

<h3 className="
font-bold
text-lg
mt-6
mb-2
text-red-600
">

Estado

</h3>


<span className="
inline-block
bg-green-100
text-green-700
px-4
py-2
rounded-full
font-semibold
">

{projetoSelecionado.estado}

</span>








{/* TECNOLOGIAS */}

<h3 className="
font-bold
text-lg
mt-6
mb-3
text-red-600
">

Tecnologias usadas

</h3>



<div className="
flex
flex-wrap
gap-2
">


{

projetoSelecionado.tecnologias.map((tec,index)=>(


<span

key={index}

className="
bg-red-100
text-red-700
px-3
py-1
rounded-full
text-sm
"

>

{tec}

</span>


))


}


</div>







{/* LINK DO PROJECTO */}

{

projetoSelecionado.link !== "#" && (

<a

href={projetoSelecionado.link}

target="_blank"

rel="noopener noreferrer"

className="
block
mt-8
text-center
bg-red-600
text-white
py-3
rounded-xl
font-bold
hover:bg-red-700
transition
"

>

Acessar Projeto

</a>


)

}



</div>


</div>


)

}




</div>


</div>


)

}


export default Desenvolvedores;