import { Montserrat } from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'Sign In - Prisko Jr Mod',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
