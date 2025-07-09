'use client';
import { useState } from 'react';
import { Car, MapPin, Search } from 'lucide-react';
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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out both 'From' and 'To' fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Ride Requested!",
      description: `Searching for a ride from ${from} to ${to}.`,
    });
  }

  const handleGetRecommendations = () => {
    if (!from) {
       toast({
        title: "Location needed",
        description: "Please enter a 'From' location to get recommendations.",
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
            <Label htmlFor="from">From</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="from" placeholder="Current location or address" value={from} onChange={e => setFrom(e.target.value)} className="pl-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">To</Label>
             <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input id="to" placeholder="Destination address" value={to} onChange={e => setTo(e.target.value)} className="pl-10" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="transport-prefs">Preferences (optional)</Label>
          <Textarea id="transport-prefs" placeholder="e.g., air conditioning, pet friendly..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <Car className="mr-2 h-4 w-4" />
            Request Ride
          </Button>
          <Button type="button" variant="secondary" onClick={handleGetRecommendations} className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Get Recommendations
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
