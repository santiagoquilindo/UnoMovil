import { ServiceTabs } from "@/components/ServiceTabs";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { Facebook, Instagram, Twitter, Phone } from "lucide-react";
import { WhatsAppButton, WhatsAppIcon } from "@/components/WhatsAppButton";

const serviceAllies = [
  {
    name: "Domi 3",
    logoUrl: "/domi3.png",
    hint: "supermarket logo",
  },
  {
    name: "Mauro Autos",
    logoUrl: "/mauroautos.png",
    hint: "pharmacy logo",
  },
  {
    name: "pizzetas",
    logoUrl: "/pizza.png",
    hint: "groceries logo",
  },
  {
    name: "dr ice granizados",
    logoUrl: "doctor-ice.png",
    hint: "pet store",
  },
  {
    name: "Ferretería El Tornillo",
    logoUrl: "https://placehold.co/100x100.png",
    hint: "hardware store",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-grow bg-transparent">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <section className="text-center my-8 md:my-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
            Tu Ciudad, a tu Manera
          </h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pide un transporte, envía un paquete o recibe lo que necesites. Uno
            Móvil te conecta con servicios locales de confianza al instante.
          </p>
        </section>

        <ServiceTabs />

        <section className="mt-16 space-y-12">
          <PartnersCarousel
            title="Aliados de Servicios"
            partners={serviceAllies}
          />
        </section>
      </div>
      <footer className="bg-muted py-6 mt-auto">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://wa.me/573104503898"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 w-16 h-16 z-50 rounded-full shadow-lg transition-transform hover:scale-110"
              title="Chatea por WhatsApp"
            >
              <img
                src="/2.png"
                alt="WhatsApp"
                className="w-full h-full object-contain"
              />
            </a>

            <a
              href="tel:+573192057484"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm">319 205 7484</span>
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Uno Móvil. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
