'use client';
import { useState } from 'react';
import { Package, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Recommendations } from './Recommendations';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function DeliveriesTab() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [details, setDetails] = useState('');
  const [preferences, setPreferences] = useState('');
  const [triggerFetch, setTriggerFetch] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     if (!pickup || !dropoff) {
      toast({
        title: "Formulario Incompleto",
        description: "Por favor, completa las direcciones de recogida y entrega.",
        variant: "destructive",
      });
      return;
    }
    
    let message = `Hola, quiero agendar un domicilio.\n\n*Recogida:* ${pickup}\n*Entrega:* ${dropoff}`;
    if (details) {
      message += `\n*Detalles del paquete:* ${details}`;
    }
    if (preferences) {
      message += `\n*Preferencias:* ${preferences}`;
    }
    
    const whatsappUrl = `https://wa.me/573104503898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleGetRecommendations = () => {
    if (!pickup) {
       toast({
        title: "Ubicación necesaria",
        description: "Por favor, ingresa una dirección de recogida para obtener recomendaciones.",
        variant: "destructive",
      });
      return;
    }
    setTriggerFetch(prev => prev + 1);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-sm">
         <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickup">Dirección de Recogida</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="pickup" placeholder="Dirección del remitente" value={pickup} onChange={e => setPickup(e.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dropoff">Dirección de Entrega</Label>
             <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="dropoff" placeholder="Dirección del destinatario" value={dropoff} onChange={e => setDropoff(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="details">Detalles del Paquete</Label>
            <Textarea id="details" placeholder="Ej: Caja pequeña, frágil, documentos" value={details} onChange={e => setDetails(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="delivery-prefs">Preferencias (opcional)</Label>
          <Textarea id="delivery-prefs" placeholder="Ej: necesito factura, contactar al destinatario primero..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <Package className="mr-2 h-4 w-4" />
            Agendar Domicilio
          </Button>
          <Button type="button" variant="secondary" onClick={handleGetRecommendations} className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Obtener Recomendaciones
          </Button>
        </div>
      </form>
      <Recommendations
        requestType="deliveries"
        location={pickup}
        preferences={preferences}
        triggerFetch={triggerFetch}
      />
    </div>
  );
}
