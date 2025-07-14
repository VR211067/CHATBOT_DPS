import Link from 'next/link';
import { Header } from './components/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="mb-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-4 w-4 mr-2">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                </path>
              </svg>
              Asistente Virtual 24/7
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tu Asistente de
              <span className="text-green-600 block">Salud Personal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Obtén orientación médica instantánea, encuentra el especialista adecuado antes de poder agendar tu cita de manera
              inteligente con nuestro asistente conversacional.
            </p>
          </section>

          {/* Call to Action */}
          <section className="flex justify-center gap-4 mb-16">
            <Link href="/chat">
              <button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 h-auto text-white flex items-center rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-4 w-4 mr-2">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                Comenzar Consulta
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5 ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </section>

          {/* Sección de Características */}
          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-green-100 hover:shadow-lg transition-shadow bg-white rounded-xl">
              <div className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-8 w-8">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Consulta Inteligente</h3>
                <p className="text-gray-600">
                  Describe tus síntomas y recibe orientación personalizada sobre los pasos a seguir.
                </p>
              </div>
            </div>

            <div className="border border-blue-100 hover:shadow-lg transition-shadow bg-white rounded-xl">
              <div className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-8 w-8">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fácil de usar</h3>
                <p className="text-gray-600">
                  Interactúa con nuestro chatbot de manera natural y sencilla, como si estuvieras hablando con un amigo.
                </p>
              </div>
            </div>

            <div className="border border-purple-100 hover:shadow-lg transition-shadow bg-white rounded-xl">
              <div className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-8 w-8 text-purple-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Disponible 24/7</h3>
                <p className="text-gray-600">
                  Accede a orientación médica en cualquier momento, desde cualquier lugar.
                </p>
              </div>
            </div>
          </section>

          {/* Sección para Call to Action detallado */}
          <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-12 w-12 mx-auto mb-4 opacity-90">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>

              <h2 className="text-3xl font-bold mb-4">Comienza tu consulta ahora</h2>
              <p className="text-lg mb-6 opacity-90">
                Nuestro asistente virtual está listo para ayudarte a encontrar la atención médica que necesitas.
              </p>
              <Link href="/chat">
                <button
                  className="bg-white text-green-600 hover:bg-gray-50 text-lg px-8 py-4 h-auto mx-auto flex items-center rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-4 w-4 mr-2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  Iniciar Chat Médico
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5 ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-green-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope h-6 w-6 text-white">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                <circle cx="20" cy="10" r="2"></circle>
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-900">Clínica Salud+</span>
          </div>
          <p className="text-gray-600 text-sm">© 2025 Clínica Salud+. Un espacio para tu salud y bienestar.</p>
        </div>
      </footer>
    </div>
  );
}
