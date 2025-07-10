
import { ServiceTabs } from '@/components/ServiceTabs';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';
import { WhatsAppButton, WhatsAppIcon } from '@/components/WhatsAppButton';

const transportPartners = [
  { name: 'Taxi Veloz', logoUrl: 'https://placehold.co/100x100.png', hint: 'taxi logo' },
  { name: 'Domi 3', logoUrl: 'https://placehold.co/100x100.png', hint: 'delivery logo' },
  { name: 'Rapido Colectivo', logoUrl: 'https://placehold.co/100x100.png', hint: 'bus logo' },
  { name: 'Auto Amigo', logoUrl: 'https://placehold.co/100x100.png', hint: 'car logo' },
  { name: 'Bici-entrega', logoUrl: 'https://placehold.co/100x100.png', hint: 'bicycle logo' },
];

const serviceAllies = [
  { name: 'Super Éxito', logoUrl: 'https://placehold.co/100x100.png', hint: 'supermarket logo' },
  { name: 'Drogas La Rebaja', logoUrl: 'https://placehold.co/100x100.png', hint: 'pharmacy logo' },
  { name: 'La Cesta Campesina', logoUrl: 'https://placehold.co/100x100.png', hint: 'groceries logo' },
  { name: 'Todo Mascotas', logoUrl: 'https://placehold.co/100x100.png', hint: 'pet store' },
  { name: 'Ferretería El Tornillo', logoUrl: 'https://placehold.co/100x100.png', hint: 'hardware store' },
];


export default function Home() {
  return (
    <div className="flex flex-col flex-grow bg-transparent">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
            <section className="text-center my-8 md:my-12">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">Tu Ciudad, a tu Manera</h1>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Pide un transporte, envía un paquete o recibe lo que necesites. Uno Móvil te conecta con servicios locales de confianza al instante.
                </p>
            </section>

            <ServiceTabs />

            <section className="mt-16 space-y-12">
                <PartnersCarousel title="Socios de Transporte" partners={transportPartners} />
                <PartnersCarousel title="Aliados de Servicios" partners={serviceAllies} />
            </section>
        </div>
      <footer className="bg-muted py-6 mt-auto">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://wa.me/573104503898" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.316 1.906 6.03l-1.457 5.219 5.233-1.46z"
                    />
                    <path
                        d="M18.118 14.732c-.27-.135-.994-.491-1.148-.548-.155-.055-.267-.082-.38.082-.111.164-.433.547-.531.659-.098.112-.196.126-.363.041-.168-.083-1.156-.425-2.201-1.361-.81-.722-1.35-1.611-1.504-1.888-.154-.277-.015-.43.067-.561.076-.122.168-.211.253-.312.085-.102.112-.168.168-.279.056-.112.028-.211-.014-.294-.042-.083-.38-.912-.52-1.246-.138-.333-.279-.288-.38-.293-.09-.004-.197-.004-.294-.004s-.267.041-.409.208c-.141.168-.532.523-.532 1.268 0 .744.546 1.469.622 1.579.076.111 1.054 1.693 2.553 2.242.362.131.64.209.859.267.433.12.822.102 1.125.061.346-.046.994-.403 1.134-.794.14-.39.14-.729.098-.794-.042-.065-.141-.104-.27-.208z"
                    />
                </svg>
                <span className="sr-only">WhatsApp</span>
            </a>
            <a href="tel:+573192057484" className="hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm">319 205 7484</span>
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Uno Móvil. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
