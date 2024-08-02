import Image from "next/image"
import mobile from "@/public/img/devcard_mobile.png"

export default function BackgroundMob(){
    return (
        <Image
        src={mobile}
        alt="cardService"
        width={280}
        />
    )
}