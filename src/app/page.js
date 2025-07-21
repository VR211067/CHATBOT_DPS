import Link from 'next/link';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import CardInfo from './components/CardInfo';

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
            <CardInfo
              title="Consulta Inteligente"
              description="Describe tus síntomas y recibe orientación personalizada sobre los pasos a seguir."
              backgroundIcon="bg-green-100 text-green-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-8 w-8">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              }
            />

            <CardInfo
              title="Fácil de usar"
              description="Interactúa con nuestro chatbot de manera natural y sencilla, como si estuvieras hablando con un amigo."
              backgroundIcon="bg-blue-100 text-blue-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-8 w-8">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              }
            />

            <CardInfo
              title="Disponible 24/7"
              description="Accede a orientación médica en cualquier momento, desde cualquier lugar."
              backgroundIcon="bg-purple-100 text-purple-600"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-8 w-8">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              }
            />
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
      <Footer />
    </div>
  );
}
