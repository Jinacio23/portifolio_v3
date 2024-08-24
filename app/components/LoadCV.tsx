interface Props {
    hide: string,
    fhide: any
}

export default function LoadCV({ hide, fhide }: Props) {

    let popUp = () => hide == 'hidden' ? fhide('') : fhide('hidden')

    return (

        <div id="cv" className={`bg-[#5a5ab2] fixed top-0 bottom-0 left-0 right-0 m-auto flex flex-col p-3 rounded-xl justify-between h-[20vh] w-[80vw] max-w-[650px] shadow-black/40 ${hide}`}>
            <p className="text-sm font-light">Deseja fazer o downloading do CV ?</p>
            <div className="flex justify-between items-center">
                <button onClick={popUp} className="bg-[#23232e] text-xs p-2 px-5 rounded-lg">Voltar</button>
                <div className="flex items-center gap-2">
                    <a href="/docs/joseInacio.pdf" target="_blank" className="bg-[#23232e] text-xs p-2 px-5 rounded-lg">Apenas vizualizar</a>
                    <a href="/docs/joseInacio.pdf" className="bg-[#23232e] text-xs p-2 px-5 rounded-lg" download>Sim</a>
                </div>
            </div>
        </div>
    )
}