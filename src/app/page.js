import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido al ChatBot Clínico</h1>
      <p>Haz clic abajo para empezar la conversación.</p>
      <Link href="/chat">
        <button style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
          Ir al Chat
        </button>
      </Link>
    </main>
  );
}
