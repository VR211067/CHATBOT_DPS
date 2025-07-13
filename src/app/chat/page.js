'use client';

import { useState } from 'react';
import styles from './chatbot.module.css';
import conocimiento from '../../../data/conocimiento.json';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const lower = input.toLowerCase();
    let respuesta = 'Lo siento, no tengo una respuesta para eso.';

    for (let categoria in conocimiento) {
      for (let clave in conocimiento[categoria]) {
        if (lower.includes(clave.toLowerCase())) {
          respuesta = conocimiento[categoria][clave];
          break;
        }
      }
    }

    setMessages([...messages, { user: input, bot: respuesta }]);
    setInput('');
  };

  return (
    <main className={styles.chatbot}>
      <h2>Asistente Médico Virtual</h2>
      <div className={styles.chatWindow}>
        {messages.map((msg, i) => (
          <div key={i}>
            <p><strong>👤:</strong> {msg.user}</p>
            <p><strong>🤖:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        placeholder="Escribe tu consulta..."
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Enviar</button>
    </main>
  );
}
