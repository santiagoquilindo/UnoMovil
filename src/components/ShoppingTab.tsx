'use client';
import { useState } from 'react';
import { ShoppingCart, Store, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Recommendations } from './Recommendations';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ShoppingTab() {
  const [store, setStore] = useState('');
  const [shoppingList, setShoppingList] = useState('');
  const [preferences, setPreferences] = useState('');
  const [triggerFetch, setTriggerFetch] = useState(0);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!store || !shoppingList) {
      toast({
        title: "Incomplete Form",
        description: "Please specify a store and your shopping list.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Shopping Request Sent!",
      description: `We're finding someone to shop at ${store} for you.`,
    });
  }

  const handleGetRecommendations = () => {
    setTriggerFetch(prev => prev + 1);
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-sm">
        <div className="space-y-2">
          <Label htmlFor="store">Store</Label>
          <div className="relative">
            <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="store" placeholder="e.g., Supermercado Éxito" value={store} onChange={e => setStore(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="shopping-list">Shopping List</Label>
          <Textarea id="shopping-list" rows={5} placeholder="List the items you need, one per line." value={shoppingList} onChange={e => setShoppingList(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="shopping-prefs">Preferences (optional)</Label>
          <Textarea id="shopping-prefs" placeholder="e.g., specific brands, substitute if unavailable..." value={preferences} onChange={e => setPreferences(e.target.value)} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button type="submit" className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Request Purchase
          </Button>
          <Button type="button" variant="secondary" onClick={handleGetRecommendations} className="flex-1">
            <Search className="mr-2 h-4 w-4" />
            Get Recommendations
          </Button>
        </div>
      </form>
      <Recommendations
        requestType="shopping"
        preferences={preferences}
        triggerFetch={triggerFetch}
      />
    </div>
  );
}
