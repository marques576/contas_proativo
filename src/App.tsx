import { Footer } from './Footer';
import { NavbarComponent } from './Navbar';
import { About } from './About';
import { Services } from './Services';
import { Contacts } from './Contacts';
import { Feedback } from './Feedback';

function App() {
  return (
    <>
      <NavbarComponent />

      <div className='w-4/5 mx-auto space-y-10'>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lembra-te: o sucesso não tem atalhos! Mas, quando compreendes o teu negócio, cada passo que dás é mais
              seguro e firme!</h1>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Vamos Descomplicar
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>

            </div>
          </div>
        </section>



        <div className="w-full p-4 flex flex-col md:flex-row space-x-0 md:space-x-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

          <div className='w-full md:w-1/3'>
            <img src="/4-nobg_v2.png" alt="Imagem" className="object-cover"></img>
          </div>

          <div>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">O acompanhamento perfeito para ti que…</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Já tens o teu próprio negócio: és uma empreendedora que desejas impulsionar o teu negócio, mas te
              sentes perdida e confrontada diariamente com dúvidas e desafios relacionados à gestão da tua atividade</p>

            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Queres começar o teu negócio: estás a considerar abrir atividade e necessitas de uma linha orientadora a nível contabilístico e fiscal</p>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Encontra a solução que melhor se adequa a ti…</h5>

            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sessão_Pro ativo</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Consultoria 100% personalizada e adaptada à s tuàs dificuldàdes! abordaremos todas as tuas dúvidas,
                  principais obrigações e métodos de organização do teu negócio!</p>
              </a><a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Acompanhamento mensal</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Não só entenderás o porquê, como também terás a parte financeira, fiscal e contributiva sempre organizada!
                  Vou acompanhar cada passo do teu negócio e ajudar-te a geri-lo!</p>
              </a>
            </div>
          </div>
        </div>



        <Services />
        <About />
        <Feedback />
        <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default App
