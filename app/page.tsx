import { Menu } from "lucide-react";
import Image from "next/image";
import Perfil from "../public/icon/perfil.svg"
import LinkedinImg from "../public/icon/linkedin.svg"
import InstagramImg from "../public/icon/instagram.svg"
import whatsapp from "../public/icon/whatsapp.svg"

import ProjectCard from "./components/ProjectCard";
import CarrosselExp from "./components/CarrosselExp";
import FooterLinks from "./components/FooterLinks";

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
            <p>Olá, me chamo</p>
            <p className="text-3xl">José Inácio</p>
            <p>Desenvolvedor web e Freelancer</p>
          </div>

          <div className="utils flex gap-6">
            <button className="bg-[#5a5ab2] p-2 px-4 rounded-full text-sm shadow-lg shadow-black/40">Saiba mais</button>

            <div className="flex gap-2">
              <Image
                src={LinkedinImg}
                alt="Linkedin"
                height={20}
                width={20}
              />
              <Image
                src={InstagramImg}
                alt="Instagram"
                height={20}
                width={20}
              />
            </div>

          </div>
        </section>

        <section className="sobre">
          <img src="#" alt="exibir em desktop/ mudar este alt" />
          <div>
            <h2>Sobre mim</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, ullam vitae nam dolore, non fugit quae explicabo placeat sed possimus necessitatibus pariatur suscipit autem quisquam ut deserunt quibusdam ratione totam.</p>
          </div>
        </section>

        <section className="projetos">
          <h2>Projetos</h2>
          <ProjectCard />

        </section>

        <section className="services">
          <h2>Serviços</h2>
          <div className="cardDesktop">
            {/* background com imagem do card, pos. absolute para os textos */}
            <h3>Desenvolvedor Web</h3>
            <p>Um pouco sobre...</p>
          </div>
          <div className="cardMobile">
            {/* background com imagem do card, pos. absolute para os textos */}
            <h3>Desenvolvedor Mobile</h3>
            <p>Um pouco sobre...</p>
          </div>
        </section>

        <section className="experiencia">
          <h2>Experiência</h2>
          <CarrosselExp />

        </section>

      </main>


      <footer>

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
