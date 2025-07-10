import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

interface Partner {
  name: string;
  logoUrl: string;
  hint: string;
}

interface PartnersCarouselProps {
  title: string;
  partners: Partner[];
}

export function PartnersCarousel({ title, partners }: PartnersCarouselProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="flex aspect-video items-center justify-center p-6 flex-col gap-4">
                    <div className="relative w-24 h-24">
                       <Image
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        data-ai-hint={partner.hint}
                      />
                    </div>
                    <span className="text-lg font-semibold text-center">{partner.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
