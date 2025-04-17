function Home() {
    return (
        <>
            <div className="bg-emerald-500 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            FarmaCom
                        </h2>
                        <p className='text-xl'>
                            Tudo que você precisa para sua saúde e bem estar
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Acessar
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-farmaceutico_114360-2775.jpg?ga=GA1.1.351213388.1717013748&w=740" 
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home