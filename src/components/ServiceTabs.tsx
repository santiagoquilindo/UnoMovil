'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CarTaxiFront, Package, ShoppingCart, UserCheck } from 'lucide-react';
import { TransportationTab } from './TransportationTab';
import { DeliveriesTab } from './DeliveriesTab';
import { ShoppingTab } from './ShoppingTab';
import { DesignatedDriverTab } from './DesignatedDriverTab';

export function ServiceTabs() {
  return (
    <Tabs defaultValue="transportation" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-4 bg-muted p-1 h-auto">
        <TabsTrigger 
          value="transportation" 
          className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
        >
          <CarTaxiFront className="mr-2 h-5 w-5" />
          Transporte
        </TabsTrigger>
        <TabsTrigger 
          value="deliveries" 
          className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
        >
          <Package className="mr-2 h-5 w-5" />
          Domicilios
        </TabsTrigger>
        <TabsTrigger 
          value="shopping" 
          className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Compras
        </TabsTrigger>
        <TabsTrigger 
          value="designated-driver" 
          className="text-xs sm:text-sm text-muted-foreground data-[state=active]:text-primary data-[state=active]:bg-card data-[state=active]:shadow-md h-12 transition-colors duration-200"
        >
          <UserCheck className="mr-2 h-5 w-5" />
          Conductor Elegido
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
       <TabsContent value="designated-driver" className="mt-6">
        <DesignatedDriverTab />
      </TabsContent>
    </Tabs>
  );
}
