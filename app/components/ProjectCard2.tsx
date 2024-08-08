import Image from "next/image"
import GithubImg from "../../public/icon/github.svg"
import ExtlinkImg from "../../public/icon/external_link.svg"
import html_img from "../../public/icon/html_icon.svg"
import css_img from "../../public/icon/css_icon.svg"
import js_img from "../../public/icon/js_icon.svg"
import imgTest from "../../public/img/WordleTest.png"


export default function ProjectCard2() {
    return (
        <article className="bg-[#48489d] flex p-2 rounded-2xl gap-3 mb-5">
            <Image
                src={imgTest}
                alt="External Link"
                height={180}
                width={150}
            />
            <div className="contentSide flex flex-col w-full pr-2 ">
                <div className="h-full">
                    <h3 className="text-2xl text-start font-bold mb-2">Projeto 2</h3>
                    <p className="font-light text-start">description</p>
                </div>
                <div className="refs flex pb-1 justify-between">
                    <div className="actions flex gap-1">
                        <a href="#">
                            <Image
                                src={ExtlinkImg}
                                alt="External Link"
                                height={20}
                                width={20}
                            />
                        </a>
                        <a href="https://github.com/Jinacio23">
                            <Image
                                src={GithubImg}
                                alt="Github"
                                height={20}
                                width={20}
                            />
                        </a>
                    </div>
                    <div className="tools flex gap-1">

                        <Image
                            src={html_img}
                            alt="HTML"
                            height={20}
                            width={20}
                        />
                        <Image
                            src={css_img}
                            alt="CSS"
                            height={20}
                            width={20}
                        />
                        <Image
                            src={js_img}
                            alt="Javascript"
                            height={20}
                            width={20}
                        />

                    </div>
                </div>
            </div>
        </article>
    )
}