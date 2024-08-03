import Image from "next/image"
import Linkedin from "@/public/icon/linkedin.svg"
import Github from "@/public/icon/github.svg"
import Instagram from "@/public/icon/instagram.svg"

export default function FooterLinks() {
    return (
        <div className="flex gap-6">
            <a href="#">
            <Image
                src={Linkedin}
                alt="External Link"
                height={25}
                width={25}
            />
            </a>
            <a href="#">
            <Image
                src={Github}
                alt="External Link"
                height={25}
                width={25}
            />
            </a>
            <a href="#">
            <Image
                src={Instagram}
                alt="External Link"
                height={25}
                width={25}
            />
            </a>
            
        </div>
    )
}