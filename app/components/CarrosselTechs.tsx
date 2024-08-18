import Image from "next/image"

interface Props{
    icons: string[],
    size: number
}

export default function CarrosselTechs({icons, size}: Props) {
    return (
        
            <div className="min-w-full justify-between flex px-5 p-2 relative animate-carrossel">
            {
                icons.map((icon) => (
                    <Image
                    key={icon}
                    src={`/icon/${icon}_white.svg`}
                    alt={icon}
                    height={size}
                    width={size}
                    />
                ))
            }            
            </div>
    )
}