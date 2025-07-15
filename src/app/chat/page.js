'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import conocimiento from '../../../data/conocimiento.json';

const quickQuestions = [
  "Tengo dolor de cabeza y fiebre",
  "Tengo dificultad para respirar",
  "¿Qué hago si tengo fiebre alta por más de tres días?",
  "Tengo estrés",
  "Quiero registrarme",
  "¿Necesito un internista?",
];

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(getRandomItems(quickQuestions, 5));
  }, []);

  const handleFrequentlyQuestions = (question) => {
    const value = question;
    if (!value.trim()) return;

    const lower = value.toLowerCase();
    let respuesta = 'Lo siento, no tengo una respuesta para eso.';

    for (let categoria in conocimiento) {
      for (let clave in conocimiento[categoria]) {
        if (lower.includes(clave.toLowerCase())) {
          respuesta = conocimiento[categoria][clave];
          break;
        }
      }
    }

    setMessages([...messages, { role: 'user', content: value }, { role: 'assistant', content: respuesta }]);
    setInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    const assistantReply = await sendMessage(input);
    setMessages(prev => [...prev, assistantReply]);
    setLoading(false);
  };

  const sendMessage = async (userInput) => {
    const systemPrompt = {
      role: 'system',
      content: 'Eres un asistente médico virtual. Tu dirección es Calle 123, San Salvador y tu número es 0000-0000. Responde de manera clara y empática.'
    };

    const userMessage = {
      role: 'user',
      content: userInput
    };

    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/chatgpt',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_URL,
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        messages: [systemPrompt, userMessage],
        web_access: false
      }
    };

    try {
      const response = await axios.request(options);
      const reply = response.data.result || 'Lo siento, no pude responder en este momento.';
      return { role: 'assistant', content: reply };
    } catch (error) {
      console.error('Error al consultar chatgpt-42:', error);
      return { role: 'assistant', content: 'Hubo un error al procesar tu consulta. Intenta nuevamente.' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot h-5 w-5 text-white">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Asistente Médico</h1>
                <p className="text-sm text-green-600">En línea</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Disponible 24/7</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* advertencia lateral */}
          <section className="lg:col-span-1 space-y-4">
            <div className="border border-green-100 bg-white rounded-md p-6 shadow-sm">
              <h2 className="text-sm font-medium text-gray-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert h-4 w-4 mr-2 text-amber-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line>
                </svg>
                Importante
              </h2>

              <p className="text-xs text-gray-600 leading-relaxed mt-3">
                Este asistente proporciona orientación general. En caso de emergencia, llama al 911 o acude al
                hospital más cercano.
              </p>
            </div>
          </section>

          {/* area de chat */}
          <section className="lg:col-span-3">
            <div className="h-[620px] flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="border-b border-gray-300 p-5">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-200 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope h-5 w-5 text-green-600">
                      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
                      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                      <circle cx="20" cy="10" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-900">Dr. Virtual</h1>
                    <p className="text-base text-gray-600">Asistente de Atención Primaria</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col p-0 overflow-y-auto">
                {/* Se mostrará cuándo no se haya comenzado un chat */}
                {messages.length === 0 && (
                  <div className="text-center py-5">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot h-8 w-8 text-green-600">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      ¡Hola! Soy tu asistente médico virtual
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Puedo ayudarte con consultas sobre síntomas, recomendaciones de especialistas e información
                      general de salud.
                    </p>

                    <div className="space-y-2 px-5">
                      <p className="text-sm font-medium text-gray-700 mb-3">Preguntas frecuentes:</p>
                      <div className="grid gap-2">
                        {questions.map((question, index) => (
                          <button
                            type="button"
                            key={index}
                            className="text-left justify-start h-auto py-2 px-3 text-xs border border-green-200 hover:bg-green-50 bg-transparent cursor-pointer rounded-md"
                            onClick={() => handleFrequentlyQuestions(question)}
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Mostramos los mensajes del chat */}
                <div className="space-y-4 p-5">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex space-x-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === "user" ? "bg-blue-100" : "bg-green-100"}`}>
                          {message.role === "user" ? (
                            <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <circle cx="12" cy="7" r="4" />
                              <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <path d="M12 8V4H8"></path>
                              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                              <path d="M2 14h2"></path>
                              <path d="M20 14h2"></path>
                              <path d="M15 13v2"></path>
                              <path d="M9 13v2"></path>
                            </svg>
                          )}
                        </div>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {loading && (
                  <div className="flex justify-start p-5">
                    <div className="flex space-x-3 items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="animate-spin h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                      </div>
                      <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2">
                        <p className="text-sm">Escribiendo respuesta...</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input de mensaje */}
            <div className="border-t border-gray-100 bg-white mt-4">
              <form onSubmit={handleSubmit} className="flex items-end space-x-2">
                <textarea
                  rows="2"
                  type="text"
                  value={input}
                  onChange={(e) => {
                    if (e.target.value.length <= 150) setInput(e.target.value);
                  }}
                  placeholder="Describe tu síntoma o pregunta..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white rounded-lg px-4 py-3 hover:bg-green-700 transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-4 w-4">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </button>
              </form>
            </div>
            <p className="text-xs text-gray-500 ml-2">
              {input.length}/150 caracteres
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
