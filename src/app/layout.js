import './globals.css';

export const metadata = {
  title: 'ChatBot Clínico',
  description: 'Chat de orientación médica automatizado',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
