export function Services() {
    return (
        <>
            <h2 className="text-4xl font-extrabold dark:text-white">Serviços</h2>

            <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2 p-4 space-y-5">
                    <h3 className="text-2xl font-bold mb-2 mx-auto text-center">Sessão PRO_ativo - Consultoria</h3>
                 
                    <div className="w-full mx-auto max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Consultoria</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">€</span>
                            <span className="text-5xl font-extrabold tracking-tight">X</span>
                            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mês</span>
                        </div>
                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Formulário de diagnóstico: para ajudar no planeamento prévio da sessão.</span>
                            </li>
                            <li className="flex">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">1 sessão via GoogleMeet de aproximadamente 1 hora</span>
                            </li>
                            <li className="flex">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Materiais pós-sessão:</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Consultoria com duração de 1 hora.</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Documento resumo de tudo o que foi abordado durante a sessão</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">14 dias de suporte via Whatsapp/E-mail para esclarecer dúvidas após a sessão.</span>
                            </li>
                            <li className="flex decoration-gray-500">

                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">No serviço premium, temos ainda:</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Passo a passo das principais contribuições.</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Ficheiro Excel "Controlo Financeiro TI"</span>
                            </li>
                        </ul>

                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Esta sessão é 100% personalizada e adaptada às tuas necessidades! O teu negócio reflete o teu conhecimento. Quanto mais investires em compreendê-lo, menos erros cometerás e mais facilmente superarás os desafios!</span>
                        <a href="https://forms.gle/4gHgp2YyjyFQCafm9" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
                            Quero Inscrever-me</a>
                    </div>

                    <p>Iniciar um negócio pode ser intimidante... Muitas vezes, esse receio está relacionado com as
                        responsabilidades declarativas, fiscais e contributivas. Investir numa orientação que descomplica estes temas é
                        o primeiro passo para o sucesso do teu negócio!
                        És empreendedor? Estás a considerar abrir atividade, mas precisa de orientação contabilística e fiscal para
                        estar consciente das obrigações? Nas sessões de consultoria focamos no conhecimento e esclarecimento de
                        todas as tuas dúvidas
                        Como te posso ajudar?
                        Esquece o excesso de informação online que pode parecer contraditória (mesmo que esteja correta, pode
                        não ser aplicável ao teu caso específico). Nas sessões de consultoria vamos analisar o teu negócio,
                        compreender todos os aspetos fiscais e contributivos associados e melhorar a tua organização financeira!
                        Cada sessão é 100% personalizada e adaptada às necessidades do teu projeto! Não existe obrigatoriedades
                        nem periodicidades!
                    </p>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Abordaremos temas como:</h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>
                            Abrir ou alterar a atividade do teu negócio.
                        </li>
                        <li>
                            Impostos e contribuições aplicáveis à tua situação.
                        </li>
                        <li>
                            Emissão de faturas.
                        </li>
                        <li>
                            Organização financeira do teu negócio
                        </li>
                        <li>
                            Precificação dos teus serviços/produtos de forma adequada.
                        </li>
                    </ul>



                </div>
                <div className="w-full md:w-1/2 p-4 space-y-5">
                    <h3 className="text-2xl font-bold mb-2 mx-auto text-center">Acompanhamento Mensal</h3>
                   
                    <div className="w-full mx-auto max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Acompanhamento Mensal</h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">€</span>
                            <span className="text-5xl font-extrabold tracking-tight">X</span>
                            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mês</span>
                        </div>
                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex items-center">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Submissão das declarações IVA</span>
                            </li>
                            <li className="flex">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Submissão da declaração trimestral da Segurança social.</span>
                            </li>
                            <li className="flex">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Envio mensal das guias de pagamento dos impostos.</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Emissão de faturas/Envio ficheiro SAF-T</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Classificação de despesas E-Fatura.</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Análise e entrega da declaração IRS.</span>
                            </li>
                            <li className="flex decoration-gray-500">

                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Apoio à gestão financeira do negócio.</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Reuniões mensais ou trimestrais para análise da progressão do negócio.</span>
                            </li>
                            <li className="flex decoration-gray-500">
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">Suporte via WhatsApp para esclarecimento de dúvidas.</span>
                            </li>
                        </ul>

                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Empreender torna-se mais fácil quando não estás sozinho! Delega-me a parte fiscal e contabilística.</span>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                    </div>

                    <p>Tão crucial quanto entender o teu negócio é dedicar tempo a geri-lo. Se não tens esse tempo ou
                        simplesmente não gostas de o fazer, estás no lugar certo!</p>
                    <p>
                        Tens um negócio, mas não tem tempo para geri-lo ou simplesmente não gosta de o fazer? estás no lugar
                        certo!</p>
                    <p>
                        Com o meu acompanhamento mensal, não só entenderás o porquê, como também terás a parte
                        financeira, fiscal e contributiva sempre organizada! Vou acompanhar cada passo do teu negócio e ajudar-te a
                        geri-lo! Desta forma, conseguirás dedicar tempo ao teu serviço/produto, sem estares preocupado com prazos e
                        erros financeiros! E, principalmente, vais sentir-te apoiado!</p>


                </div>


            </div>

        </>
    );
}
