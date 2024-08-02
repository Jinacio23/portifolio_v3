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

export default function Home() {
  return (
    <>
      <header className="bg-[#5a5ab2] max-h-10 flex items-center ">
        <button className="menu m-1.5" disabled>
          <Menu
            color="#fff"
          />
        </button>
      </header>

      <nav className="bg-[#393994] m-1 p-2 rounded-xl" hidden>{/*hidden -> esconde nav */}

        <ul className="flex flex-col items-center gap-2">
          <a href="#" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Home</a>
          <a href="#" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Sobre</a>
          <a href="#" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Projetos</a>
          <a href="#" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Serviços</a>
          <a href="#" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Experiência/Conhecimentos</a>
          <a href="#" className="duration-300 delay-100 hover:bg-[#48489d] w-full flex items-center justify-center hover:p-1 rounded-xl">Contatos</a>
        </ul>

      </nav>

      <main className="m-4 mt-12">

        <section className="home flex flex-col items-center gap-8 mb-10">
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
            <button className="bg-[#5a5ab2] p-2 px-4 rounded-full text-sm shadow-lg shadow-black/40 font-light">Saiba mais</button>

            <div className="flex items-center gap-2">
              <a href="#">
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

        <section className="sobre mb-10">
          <img src="#" alt="exibir em desktop/ mudar este alt" hidden/>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl mb-4">Sobre mim</h2>
            <p className="text-center text-sm px-2 font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ullam vitae nam dolore, non fugit quae explicabo placeat sed possimus necessitatibus pariatur suscipit autem quisquam ut deserunt quibusdam ratione totam.</p>
          </div>
        </section>

        <section className="projetos flex flex-col items center mb-10">
          <h2 className="text-2xl mb-6 text-center">Projetos</h2>
          <ProjectCard1 />
          <ProjectCard2 />

        </section>

        <section className="services flex flex-col items-center mb-10">
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

        <section className="experiencia mb-10">
          <h2 className="text-2xl text-center mb-4">Experiência</h2>
          <CarrosselExp />

        </section>

      </main>


      <footer className="bg-[#48489d]">

        <section className="contatos">
          <h2>Contato</h2>
          <p>Entre em contato</p>
          <p>Caso queira fazer um orçamento ou apenas conversar, seguem:</p>

          <div>
            <Image
              src={whatsapp}
              alt="Whatsapp"
              height={30}
              width={30}
            />
            <p>(61) 9 9457-1454</p>
          </div>

          <button>Enviar Email</button>
        </section>

        <hr />
        <div>
          <button>Meu Currículo</button>
          <div>
            <FooterLinks />
          </div>
        </div>

        <p>© 2024 por José Inácio. Todos os direitos reservados.</p>
      </footer>

    </>
  );
}
