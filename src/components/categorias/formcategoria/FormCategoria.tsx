import { ChangeEvent, useEffect, useState } from "react";
import Categorias from "../../../models/Categorias";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Categoria não encontrada!')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    function cancelar() {
        alert('Solicitação cancelada.')
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('Categoria Atualizada!')
            } catch (error: any) {
                alert('Categoria, não atualizada! ')
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso!.')
            } catch (error: any) {
                alert('Categoria não cadastrada!')

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
    <div className="flex justify-center w-full items-center py-25 h-211">
        <div className="container flex justify-center box-content">
            <div className=" border border-solid border-[#5E5C70] h-110 flex flex-col justify-evenly items-center text-2xl  text-[#F7F5F1] w-150 rounded-2xl bg-[#D8BFD8]">
                <h1 className="font-bold">{id === undefined ? 'Nova Categoria' : 'Alterar Categoria Existente'}</h1>

                <form onSubmit={gerarNovaCategoria} className="flex flex-col h-90 justify-evenly">
                    <div className="flex flex-col text-lg text-[#F7F5F1] font-medium gap-2">
                        <label htmlFor="nome">Nome</label>
                        <input  
                            type="text" 
                            placeholder="Nome da categoria" 
                            name="nome"
                            value={categoria.nome}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="text-[#F7F5F1] border border-solid border-[#5E5C70] p-3 w-130 rounded-lg font-normal"
                        />
                    </div>
                    <div className="flex flex-col text-lg text-[#F7F5F1] font-medium gap-2">
                        <label htmlFor="descricao">Descrição</label>
                        <input  
                            type="text" 
                            placeholder="Descrição da categoria" 
                            name="descricao" 
                            value={categoria.descricao}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            className="text-[#B98DB9] border border-solid border-[#5E5C70] p-3 w-130 rounded-lg font-normal"
                        />
                    </div>
                    <div className=" text-lg font-bold flex flex-row gap-4">
                        <button type="reset" onClick={cancelar} className="border border-solid border-gray-300 w-50 text-[#A7A5B6]  bg-[#F7F5F1] p-2 rounded-lg cursor-pointer hover:shadow-xl">Cancelar</button>
                        <button type="submit" className="bg-[#A7A5B6] w-76 text-[#F7F5F1] p-2 rounded-lg cursor-pointer hover:shadow-xl">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :

                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>


    )
}

export default FormCategoria