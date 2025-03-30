import { Montserrat } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/app-siderbar';
import SessionProvider from '@/components/session-provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
});

export const metadata = {
  title: {
    template: '%s - Prisko Jr Mod',
    default: 'Dashboard - Prisko Jr Mod',
  },
  robots: {
    index: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable}`}
      >
        <SessionProvider>
          <SidebarProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              disableTransitionOnChange
            >
              <AppSidebar />
              <SidebarInset className="min-h-screen overflow-x-hidden">
                <Header />
                <div className="flex-1 p-4 mb-25">
                  {children}
                </div>
                <Footer />
              </SidebarInset>
            </ThemeProvider>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
