import Image from "next/image"
import GithubImg from "../../public/icon/github.svg"
import ExtlinkImg from "../../public/icon/external_link.svg"
import html_img from "../../public/icon/html_icon.svg"
import css_img from "../../public/icon/css_icon.svg"
import js_img from "../../public/icon/js_icon.svg"


export default function ProjectCard() {
    return (
        <article>
            <img className="imgSide" src="#" alt="img do projeto" />
            <div className="contentSide">
                <div>
                    <h3>Projeto 1</h3>
                    <p>description</p>
                </div>
                <div className="refs">
                    <div className="actions">
                        <Image
                            src={ExtlinkImg}
                            alt="External Link"
                            height={30}
                            width={30}
                        />
                        <Image
                            src={GithubImg}
                            alt="Github"
                            height={30}
                            width={30}
                        />
                    </div>
                    <div className="tools">

                        <Image
                            src={html_img}
                            alt="HTML"
                            height={30}
                            width={30}
                        />
                        <Image
                            src={css_img}
                            alt="CSS"
                            height={30}
                            width={30}
                        />
                        <Image
                            src={js_img}
                            alt="Javascript"
                            height={30}
                            width={30}
                        />

                    </div>
                </div>
            </div>
        </article>
    )
}