'use client';
import { useState } from 'react';
import { ShoppingCart, Store, Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Recommendations } from './Recommendations';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ShoppingTab() {
  const [store, setStore] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [shoppingList, setShoppingList] = useState('');
  const [preferences, setPreferences] = useState('');
  const [triggerFetch, setTriggerFetch] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!store || !shoppingList || !deliveryAddress) {
      toast({
        title: "Formulario Incompleto",
        description: "Por favor, completa la tienda, la dirección de entrega y tu lista de compras.",
        variant: "destructive",
      });
      return;
    }
    
    let message = `Hola, quiero solicitar una compra.\n\n*Tienda:* ${store}\n*Dirección de Entrega:* ${deliveryAddress}\n\n*Lista de compras:*\n${shoppingList}`;
    if (preferences) {
      message += `\n\n*Preferencias:* ${preferences}`;
    }

    const whatsappUrl = `https://wa.me/573006503800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleGetRecommendations = () => {
    setTriggerFetch(prev => prev + 1);
  }

  if (!showForm) {
    return (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">¿Necesitas hacer compras?</h3>
            <p className="text-muted-foreground text-center mb-6">Nosotros compramos por ti y te lo llevamos a casa.</p>
            <Button onClick={() => setShowForm(true)} size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Solicitar Compra
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-sm animate-in fade-in-50 duration-500">
        <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label htmlFor="store">Tienda</Label>
            <div className="relative">
                <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="store" placeholder="Ej: Supermercado Éxito" value={store} onChange={e => setStore(e.target.value)} className="pl-10" />
            </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="delivery-address">Dirección de Entrega</Label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="delivery-address" placeholder="¿A dónde lo llevamos?" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} className="pl-10" />
                </div>
            </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="shopping-list">Lista de Compras</Label>
          <Textarea id="shopping-list" rows={5} placeholder="Enumera los artículos que necesitas, uno por línea." value={shoppingList} onChange={e => setShoppingList(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="shopping-prefs">Preferencias (opcional)</Label>
          <Textarea id="shopping-prefs" placeholder="Ej: marcas específicas, sustituir si no está disponible..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Solicitar Compra por WhatsApp
          </Button>
          <Button type="button" variant="secondary" onClick={handleGetRecommendations} className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Obtener Recomendaciones
          </Button>
        </div>
      </form>
      <Recommendations
        requestType="shopping"
        preferences={preferences}
        triggerFetch={triggerFetch}
        location={deliveryAddress}
      />
    </div>
  );
}
