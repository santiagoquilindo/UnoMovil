'use client';
import { useState } from 'react';
import { UserCheck, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function DesignatedDriverTab() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [preferences, setPreferences] = useState('');
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
    
    let message = `Hola, necesito un Conductor Elegido.\n\n*Punto de recogida:* ${from}\n*Punto de destino:* ${to}`;
    if (preferences) {
      message += `\n*Información adicional:* ${preferences}`;
    }

    const whatsappUrl = `https://wa.me/573104503898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  if (!showForm) {
    return (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">¿Necesitas un conductor?</h3>
            <p className="text-muted-foreground text-center mb-6">Nosotros manejamos por ti. Viaja seguro a casa en tu propio vehículo.</p>
            <Button onClick={() => setShowForm(true)} size="lg">
                <UserCheck className="mr-2 h-5 w-5" />
                Solicitar Conductor Elegido
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-sm animate-in fade-in-50 duration-500">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from-dd">Punto de Recogida</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="from-dd" placeholder="¿Dónde estás ubicado?" value={from} onChange={e => setFrom(e.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-dd">Punto de Destino</Label>
             <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="to-dd" placeholder="¿A dónde te diriges?" value={to} onChange={e => setTo(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dd-prefs">Información adicional (opcional)</Label>
          <Textarea id="dd-prefs" placeholder="Ej: tipo de vehículo (automático/mecánico), nombre del evento..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <UserCheck className="mr-2 h-4 w-4" />
            Solicitar Conductor por WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}
