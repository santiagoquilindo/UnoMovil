'use client';

import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-white"
    >
      <path d="M16.75 13.96c.25.13.42.2.46.3.05.1.04.6-.13 1.18-.18.58-.34.55-1.03.55h-.1c-.68 0-1.14-.13-1.68-.32-.54-.18-1.1-.4-1.61-.7-.5-.3-1.04-.72-1.46-1.22-.42-.5-.73-1.1-.9-1.72-.15-.62-.05-1.1.1-1.48.15-.38.32-.5.47-.63.15-.14.3-.2.42-.2.13 0 .25.01.36.01.1.01.14.01.2.15.08.14.32.78.36.83.04.05.06.1.02.2s-.14.28-.2.33c-.05.05-.1.07-.15.13-.05.06-.1.1-.14.18s-.1.15-.04.25c.06.1.15.25.28.4.13.15.28.3.45.45.18.15.34.27.47.32.14.05.2.04.28-.02.08-.06.26-.3.34-.4.08-.1.17-.1.25-.04.08.04.34.4.4.47.05.08.1.12.1.18.02.06.02.28 0 .36-.02.08-.07.13-.15.2zM12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10a10 10 0 0010-10c0-5.52-4.48-10-10-10zm0 18.5c-4.68 0-8.5-3.82-8.5-8.5s3.82-8.5 8.5-8.5 8.5 3.82 8.5 8.5-3.82 8.5-8.5 8.5z"/>
    </svg>
);

export function WhatsAppButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-50 transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <a href="https://wa.me/573104503898" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </a>
    </Button>
  );
}
