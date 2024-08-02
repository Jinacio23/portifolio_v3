import Image from "next/image"
import desktop from "@/public/img/devcard_desktop.png"

export default function BackgroundDesk(){
    return (
        <Image
        src={desktop}
        alt="cardService"
        width={280}
        />
    )
}