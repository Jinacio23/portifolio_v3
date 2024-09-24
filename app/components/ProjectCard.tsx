import Image from "next/image"
import GithubImg from "../../public/icon/github.svg"
import ExtlinkImg from "../../public/icon/external_link.svg"

interface Props {
    img: string,
    title: string,
    description: string,
    icons: string[],
    size: number,
    inverse?: boolean,
    link: string,
    repositorio: string
}


export default function ProjectCard({ img, title, description, icons, size, inverse, link, repositorio }: Props) {

    return (
        <article className={`bg-[#48489d] ${inverse ? '' : 'flex-row-reverse'} flex  p-2 rounded-2xl gap-3 mb-5 h-48`}>
            <Image
                key={img}
                src={`/img/${img}.png`}
                alt="imag do projeto"
                height={180}
                width={180}
            />
            <div className={`contentSide flex flex-col w-full ${inverse ? 'pr-2' : 'pl-2'}`}>
                <div className="h-full overflow-scroll no-scrollbar">
                    <h3 className={`text-2xl ${inverse ? 'text-start' : 'text-end'} font-bold mb-2`}>{title}</h3>
                    <p className={`font-light ${inverse ? 'text-start' : ''} text-sm`}>{description}</p>
                </div>
                <div className="refs flex pb-1 justify-between">
                    <div className="actions flex gap-1">
                        <a href={link} target="_blank">
                            <Image
                                src={ExtlinkImg}
                                alt="External Link"
                                height={20}
                                width={20}
                            />
                        </a>
                        <a href={repositorio}>
                            <Image
                                src={GithubImg}
                                alt="Github"
                                height={20}
                                width={20}
                            />
                        </a>
                    </div>
                    <div className="tools flex gap-1">
                        {
                            icons.map((item) => (
                                <Image 
                                key={item}
                                src={`/icon/${item}.svg`}
                                alt={item}
                                height={size}
                                width={size}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}