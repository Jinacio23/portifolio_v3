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
      <header>

        <nav>

          <button className="menu" disabled>
            <Menu />
          </button>

          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Serviços</li>
            <li>Experiência/Conhecimentos</li>
            <li>Contatos</li>
          </ul>

        </nav>

      </header>


      <main>

        <section className="home">
          <Image
            src={Perfil}
            alt="Perfil"
            height={80}
            width={80}
          />
          <div className="conteiner">
            <p>Olá, me chamo</p>
            <p>José Inácio</p>
            <p>Desenvolvedor web e Freelancer</p>
          </div>
          <div className="utils">
            <button>Saiba mais</button>

            <Image
              src={LinkedinImg}
              alt="Linkedin"
              height={30}
              width={30}
            />
            <Image
              src={InstagramImg}
              alt="Instagram"
              height={30}
              width={30}
            />

            <div>

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
