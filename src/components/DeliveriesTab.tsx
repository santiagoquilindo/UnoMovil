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
        title: "Incomplete Form",
        description: "Please fill out both pickup and drop-off locations.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Delivery Booked!",
      description: `Delivery from ${pickup} to ${dropoff} has been scheduled.`,
    });
  }

  const handleGetRecommendations = () => {
    if (!pickup) {
       toast({
        title: "Location needed",
        description: "Please enter a pickup location to get recommendations.",
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
            <Label htmlFor="pickup">Pickup Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="pickup" placeholder="Sender's address" value={pickup} onChange={e => setPickup(e.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dropoff">Drop-off Location</Label>
             <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="dropoff" placeholder="Recipient's address" value={dropoff} onChange={e => setDropoff(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="details">Parcel Details</Label>
            <Textarea id="details" placeholder="e.g., Small box, fragile, documents" value={details} onChange={e => setDetails(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="delivery-prefs">Preferences (optional)</Label>
          <Textarea id="delivery-prefs" placeholder="e.g., need receipt, contact recipient first..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <Package className="mr-2 h-4 w-4" />
            Book Delivery
          </Button>
          <Button type="button" variant="secondary" onClick={handleGetRecommendations} className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Get Recommendations
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
