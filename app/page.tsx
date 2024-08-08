'use client'
import { Menu } from "lucide-react";
import Image from "next/image";
import Perfil from "../public/icon/perfil.svg"
import LinkedinImg from "../public/icon/linkedin.svg"
import InstagramImg from "../public/icon/instagram.svg"
import whatsapp from "../public/icon/whatsapp.svg"

import ProjectCard1 from "./components/ProjectCard1";
import ProjectCard2 from "./components/ProjectCard2";
import CarrosselExp from "./components/CarrosselExp";
import FooterLinks from "./components/FooterLinks";
import BackgroundDesk from "./components/BackgroundDesk";
import BackgroundMob from "./components/BackgroundMob";
import SendEmail from "./components/SendEmail";
import LoadCV from "./components/LoadCV";
import Button from "./components/Button";


export default function Home() {

  function showMenu() {

    document.getElementById('nav')?.classList.toggle('hidden')

  }

  return (
    <>
      <header className="bg-[#5a5ab2] max-h-10 flex items-center ">
        <Button
          title={
            <Menu
              color="#fff"
            />
          }
          className="menu m-1.5"
          func={showMenu}
        />
      </header>

      <nav id="nav" className="bg-[#393994] m-1 p-2 rounded-xl hidden">

        <ul className="flex flex-col items-center gap-2">
          <a href="#home" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Home</a>
          <a href="#sobre" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Sobre</a>
          <a href="#projetos" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Projetos</a>
          <a href="#services" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Serviços</a>
          <a href="#experiencia" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Experiência</a>
          <a href="#contatos" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Contatos</a>
        </ul>

      </nav>

      <main className="m-4 mt-12">

        <section id="home" className="flex flex-col items-center gap-8 mb-10">
          <Image
            src={Perfil}
            alt="Perfil"
            height={160}
            width={160}
          />
          <div className="conteiner flex flex-col  items-center gap-2">
            <p className="font-light">Olá, me chamo</p>
            <p className="text-3xl">José Inácio</p>
            <p>Desenvolvedor web e Freelancer</p>
          </div>

          <div className="utils flex gap-6">
            <a href="#services" className="bg-[#5a5ab2] p-2 px-4 rounded-full text-sm shadow-lg shadow-black/40 font-light">Saiba mais</a>

            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/jos%C3%A9-in%C3%A1cio-277a62264/">
                <Image
                  src={LinkedinImg}
                  alt="Linkedin"
                  height={20}
                  width={20}
                />
              </a>
              <a href="#">
                <Image
                  src={InstagramImg}
                  alt="Instagram"
                  height={20}
                  width={20}

                />
              </a>
            </div>

          </div>
        </section>

        <section id="sobre" className="mb-10">
          <img src="#" alt="exibir em desktop/ mudar este alt" hidden />
          <div className="flex flex-col items-center">
            <h2 className="text-2xl mb-4">Sobre mim</h2>
            <p className="text-center text-sm px-2 font-light">
              Sou uma pessoa otimista e resiliente, gosto de aprender e desenvolver minhas habilidades projetando e concluindo desafios de forma que possa conhecer e descobrir coisas novas. Atualmente, sou estudante de análise e desenvolvimento de sistemas, pela faculdade Senac-DF. Quando possível, gosto também de jogar games ou assistir alguma série.
            </p>
          </div>
        </section>

        <section id="projetos" className="flex flex-col items center mb-10">
          <h2 className="text-2xl mb-6 text-center">Projetos</h2>
          <ProjectCard1 />
          <ProjectCard2 />

        </section>

        <section id="services" className="flex flex-col items-center mb-10">
          <h2 className="text-2xl text-center mb-8">Serviços</h2>
          <div className="cardService relative mb-8">
            <BackgroundDesk />
            <div className="absolute top-6 right-5 text-center text-wrap w-36">

              <h3 className="text-black text-ms font-medium">Desenvolvedor Web</h3>
            </div>
            <p className="absolute text-wrap top-28 right-3 w-64 text-sm font-light p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores consequuntur modi consequatur aspernatur dolore iusto aliquam dolorem facere, quae, aut ex sequi accusantium numquam ducimus eius maxime architecto ipsam?</p>
          </div>

          <div className="cardService relative">
            <BackgroundMob />
            <div className="absolute top-6 right-5 text-center text-wrap w-36">

              <h3 className="text-black text-ms font-medium">Desenvolvedor Mobile</h3>
            </div>
            <p className="absolute text-wrap top-28 right-3 w-64 text-sm font-light p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores consequuntur modi consequatur aspernatur dolore iusto aliquam dolorem facere, quae, aut ex sequi accusantium numquam ducimus eius maxime architecto ipsam?</p>
          </div>
        </section>

        <section id="experiencia" className="mb-10">
          <h2 className="text-2xl text-center mb-4">Experiência</h2>
          <CarrosselExp />

        </section>

      </main>


      <footer className="bg-[#48489d] rounded-t-3xl p-4">

        <section id="contatos" className="flex flex-col">
          <h2 className="text-2xl text-center mb-4">Contato</h2>
          <p>Entre em contato!</p>
          <p className="text-sm w-60 font-light">Caso queira fazer um orçamento ou apenas conversar, seguem:</p>

          <div className="flex items-center gap-2 py-4">
            <Image
              src={whatsapp}
              alt="Whatsapp"
              height={25}
              width={25}
            />
            <p className="text-sm">(61) 9 9457-1454</p>
          </div>

          <button className="bg-[#393994] text-xs p-2 w-28 rounded-xl mb-3 self-end font-medium" disabled>Enviar Email</button>
        </section>

        <hr />
        <div className="flex justify-between items-center">
          <button className="bg-[#393994] text-xs p-2 w-28 rounded-xl mb-3 font-medium mt-3" disabled>Meu Currículo</button>
          <div>
            <FooterLinks />
          </div>
        </div>

        <p className="text-xs text-center">© 2024 por José Inácio. Todos os direitos reservados.</p>
      </footer>

      <SendEmail />
      <LoadCV />
    </>
  );
}
