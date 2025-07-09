'use client';
import { useState } from 'react';
import { CarTaxiFront, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Recommendations } from './Recommendations';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function TransportationTab() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [preferences, setPreferences] = useState('');
  const [triggerFetch, setTriggerFetch] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) {
      toast({
        title: "Formulario Incompleto",
        description: "Por favor, completa los campos 'Desde' y 'Hasta'.",
        variant: "destructive",
      });
      return;
    }
    
    let message = `Hola, necesito un transporte.\n\n*Desde:* ${from}\n*Hasta:* ${to}`;
    if (preferences) {
      message += `\n*Preferencias:* ${preferences}`;
    }

    const whatsappUrl = `https://wa.me/573104503898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleGetRecommendations = () => {
    if (!from) {
       toast({
        title: "Ubicación necesaria",
        description: "Por favor, ingresa una ubicación de origen para obtener recomendaciones.",
        variant: "destructive",
      });
      return;
    }
    setTriggerFetch(prev => prev + 1);
  }

  if (!showForm) {
    return (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">¿A dónde te llevamos?</h3>
            <p className="text-muted-foreground text-center mb-6">Pide un transporte seguro y confiable en minutos.</p>
            <Button onClick={() => setShowForm(true)} size="lg">
                <CarTaxiFront className="mr-2 h-5 w-5" />
                Solicitar Transporte
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-sm animate-in fade-in-50 duration-500">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from">Desde</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="from" placeholder="Ubicación actual o dirección" value={from} onChange={e => setFrom(e.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">Hasta</Label>
             <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="to" placeholder="Dirección de destino" value={to} onChange={e => setTo(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="transport-prefs">Preferencias (opcional)</Label>
          <Textarea id="transport-prefs" placeholder="Ej: aire acondicionado, amigable con mascotas..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <CarTaxiFront className="mr-2 h-4 w-4" />
            Solicitar Transporte por WhatsApp
          </Button>
          <Button type="button" variant="secondary" onClick={handleGetRecommendations} className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Obtener Recomendaciones
          </Button>
        </div>
      </form>
      <Recommendations
        requestType="transportation"
        location={from}
        preferences={preferences}
        triggerFetch={triggerFetch}
      />
    </div>
  );
}
