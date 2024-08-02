import Image from "next/image"
import Linkedin from "@/public/icon/linkedin.svg"
import Github from "@/public/icon/github.svg"
import Instagram from "@/public/icon/instagram.svg"

export default function FooterLinks() {
    return (
        <div>
            <Image
                src={Linkedin}
                alt="External Link"
                height={30}
                width={30}
            />
            <Image
                src={Github}
                alt="External Link"
                height={30}
                width={30}
            />
            <Image
                src={Instagram}
                alt="External Link"
                height={30}
                width={30}
            />
            
        </div>
    )
}