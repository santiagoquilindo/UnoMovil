'use client';
import { useState } from 'react';
import { Car, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function VehicleRentalTab() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDateTime, setPickupDateTime] = useState('');
  const [returnDateTime, setReturnDateTime] = useState('');
  const [preferences, setPreferences] = useState('');
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation || !pickupDateTime || !returnDateTime) {
      toast({
        title: "Formulario Incompleto",
        description: "Por favor, completa la ubicación y las fechas de alquiler.",
        variant: "destructive",
      });
      return;
    }
    
    let message = `Hola, quiero cotizar un alquiler de vehículo.\n\n*Lugar de Recogida:* ${pickupLocation}\n*Fecha y Hora de Recogida:* ${pickupDateTime}\n*Fecha y Hora de Entrega:* ${returnDateTime}`;
    if (preferences) {
      message += `\n*Preferencias:* ${preferences}`;
    }

    const whatsappUrl = `https://wa.me/573104503898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  if (!showForm) {
    return (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">¿Necesitas un vehículo?</h3>
            <p className="text-muted-foreground text-center mb-6">Explora la ciudad a tu propio ritmo. Tenemos el vehículo perfecto para ti.</p>
            <Button onClick={() => setShowForm(true)} size="lg">
                <Car className="mr-2 h-5 w-5" />
                Cotizar Alquiler
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-sm animate-in fade-in-50 duration-500">
        <div className="space-y-2">
            <Label htmlFor="pickup-location-vr">Lugar de Recogida</Label>
            <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="pickup-location-vr" placeholder="¿Dónde recoges el vehículo?" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} className="pl-10" />
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pickup-datetime-vr">Fecha y Hora de Recogida</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="pickup-datetime-vr" type="datetime-local" value={pickupDateTime} onChange={e => setPickupDateTime(e.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="return-datetime-vr">Fecha y Hora de Entrega</Label>
             <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="return-datetime-vr" type="datetime-local" value={returnDateTime} onChange={e => setReturnDateTime(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="vr-prefs">Preferencias (opcional)</Label>
          <Textarea id="vr-prefs" placeholder="Ej: tipo de vehículo, transmisión automática, silla para bebé..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <Car className="mr-2 h-4 w-4" />
            Solicitar Alquiler por WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}
