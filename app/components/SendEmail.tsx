export default function SendEmail() {
    return (
        <form action={'#'} method="POST" className="fixed top-0 bottom-0 left-0 right-0 m-auto bg-[#5a5ab2] flex flex-col p-3 rounded-xl w-64 max-h-80 shadow-black/40 hidden" >
            <label htmlFor="name" className="">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome..."  className="bg-[#23232e] mb-5 rounded p-1.5"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu email..."  className="bg-[#23232e] mb-5 rounded p-1.5"/>
            <label htmlFor="msg">Mensagem</label>
            <textarea name="msg" id="msg" placeholder="Tudo bem! Me diga no que posso ajudar..."  className="bg-[#23232e] mb-5 rounded p-1.5" rows={4}></textarea>

            <div className="flex justify-between">
                <a href="#" className="bg-[#23232e] text-xs p-2 px-5 rounded-lg">Voltar</a>
                <input type="submit" value={"Confirmar"}  className="bg-[#23232e] text-xs p-2 px-5 rounded-lg"/>
            </div>
        </form>
    )
}