'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CarTaxiFront, Package, ShoppingCart, UserCheck } from 'lucide-react';
import { TransportationTab } from './TransportationTab';
import { DeliveriesTab } from './DeliveriesTab';
import { ShoppingTab } from './ShoppingTab';
import { DesignatedDriverTab } from './DesignatedDriverTab';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ServiceTabs() {
  return (
    <Tabs defaultValue="transportation" className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <TabsList className="h-auto w-full justify-start bg-muted p-1 overflow-x-auto">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 basis-auto">
                <TabsTrigger 
                  value="transportation" 
                  className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
                >
                  <CarTaxiFront className="mr-2 h-5 w-5" />
                  Transporte
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-auto">
                 <TabsTrigger 
                    value="designated-driver" 
                    className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
                  >
                    <UserCheck className="mr-2 h-5 w-5" />
                    Conductor Elegido
                  </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-auto">
                <TabsTrigger 
                  value="deliveries" 
                  className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Domicilios
                </TabsTrigger>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-auto">
                <TabsTrigger 
                  value="shopping" 
                  className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Compras
                </TabsTrigger>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex disabled:hidden" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex disabled:hidden" />
          </Carousel>
        </TabsList>
      </div>
      <TabsContent value="transportation" className="mt-6">
        <TransportationTab />
      </TabsContent>
      <TabsContent value="designated-driver" className="mt-6">
        <DesignatedDriverTab />
      </TabsContent>
      <TabsContent value="deliveries" className="mt-6">
        <DeliveriesTab />
      </TabsContent>
      <TabsContent value="shopping" className="mt-6">
        <ShoppingTab />
      </TabsContent>
    </Tabs>
  );
}
