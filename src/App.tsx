import { Footer } from './Footer';
import { NavbarComponent } from './Navbar';
import { About } from './About';
import { Services } from './Services';
import { Contacts } from './Conta';

function App() {
  return (
    <>
      <NavbarComponent />

      <div  className='w-4/5 mx-auto'>
      <h1>Lembra-te: o sucesso não tem atalhos! Mas, quando compreendes o teu negócio, cada passo que dás é mais
        seguro e firme!</h1>

        <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lembra-te: o sucesso não tem atalhos! Mas, quando compreendes o teu negócio, cada passo que dás é mais
        seguro e firme!</h1>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Vamos Descomplicar
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            
        </div>
    </div>
</section>

      <About />
      <Services/>
      <Contacts />
      </div>
      <Footer />
    </>
  )
}

export default App
