'use client';

import { Button } from '@/components/ui/button';

export const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-white"
    >
        <path
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.316 1.906 6.03l-1.457 5.219 5.233-1.46z"
        />
        <path
            d="M18.118 14.732c-.27-.135-.994-.491-1.148-.548-.155-.055-.267-.082-.38.082-.111.164-.433.547-.531.659-.098.112-.196.126-.363.041-.168-.083-1.156-.425-2.201-1.361-.81-.722-1.35-1.611-1.504-1.888-.154-.277-.015-.43.067-.561.076-.122.168-.211.253-.312.085-.102.112-.168.168-.279.056-.112.028-.211-.014-.294-.042-.083-.38-.912-.52-1.246-.138-.333-.279-.288-.38-.293-.09-.004-.197-.004-.294-.004s-.267.041-.409.208c-.141.168-.532.523-.532 1.268 0 .744.546 1.469.622 1.579.076.111 1.054 1.693 2.553 2.242.362.131.64.209.859.267.433.12.822.102 1.125.061.346-.046.994-.403 1.134-.794.14-.39.14-.729.098-.794-.042-.065-.141-.104-.27-.208z"
        />
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
