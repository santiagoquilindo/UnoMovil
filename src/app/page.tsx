
import { ServiceTabs } from '@/components/ServiceTabs';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

const transportPartners = [
  { name: 'Taxi Veloz', logoUrl: 'https://placehold.co/100x100.png', hint: 'taxi logo' },
  { name: 'Domi 3', logoUrl: 'https://placehold.co/275x183.png', hint: 'delivery logo' },
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
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
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
