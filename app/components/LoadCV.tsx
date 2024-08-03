export default function LoadCV(){
    return (
        <div className="bg-[#5a5ab2] fixed top-0 bottom-0 left-0 right-0 m-auto flex flex-col p-3 rounded-xl justify-between h-32 max-w-96 shadow-black/40 hidden">
            <p className="text-sm font-light">Deseja fazer o downloading do CV ?</p>
            <div className="flex justify-between">
                <button className="bg-[#23232e] text-xs p-2 px-5 rounded-lg">Voltar</button>
                <div>
                    <button className="bg-[#23232e] text-xs p-2 px-5 rounded-lg mr-3">Apenas vizualizar</button>
                    <button className="bg-[#23232e] text-xs p-2 px-5 rounded-lg">Sim</button>
                </div>
            </div>
        </div>
    )
}