'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, Package, ShoppingCart } from 'lucide-react';
import { TransportationTab } from './TransportationTab';
import { DeliveriesTab } from './DeliveriesTab';
import { ShoppingTab } from './ShoppingTab';

export function ServiceTabs() {
  return (
    <Tabs defaultValue="transportation" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 bg-primary/10 p-1 h-auto">
        <TabsTrigger value="transportation" className="text-xs sm:text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg h-12">
          <Car className="mr-2 h-5 w-5" />
          Transporte
        </TabsTrigger>
        <TabsTrigger value="deliveries" className="text-xs sm:text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg h-12">
          <Package className="mr-2 h-5 w-5" />
          Domicilios
        </TabsTrigger>
        <TabsTrigger value="shopping" className="text-xs sm:text-sm data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg h-12">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Compras
        </TabsTrigger>
      </TabsList>
      <TabsContent value="transportation" className="mt-6">
        <TransportationTab />
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
