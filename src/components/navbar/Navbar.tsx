import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
                bg-emerald-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">FarmaCom</Link>

                    <div className='flex gap-4'>
                        Categoria
                        produtos 
                        Cadastrar produto
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar