import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Logo } from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Uno Móvil',
  description: 'Tu solución integral para transporte, domicilios y compras en Popayán.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full bg-background">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-center border-b bg-background px-4 sm:px-6">
            <Logo />
        </header>
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
