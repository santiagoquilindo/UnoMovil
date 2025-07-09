'use client';

import { useEffect, useState } from 'react';
import {
  type PersonalizedRecommendationsOutput,
} from '@/ai/flows/personalized-recommendations';
import { fetchRecommendations } from '@/app/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Clock } from 'lucide-react';

interface RecommendationsProps {
  requestType: 'transportation' | 'deliveries' | 'shopping';
  location?: string;
  preferences?: string;
  triggerFetch: number;
}

export function Recommendations({ requestType, location, preferences, triggerFetch }: RecommendationsProps) {
  const [data, setData] = useState<PersonalizedRecommendationsOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (triggerFetch === 0) return; // Don't fetch on initial render
    
    async function getRecs() {
      setLoading(true);
      setError(null);
      setData(null);
      const result = await fetchRecommendations({ requestType, location, preferences });
      if ('error' in result) {
        setError(result.error);
      } else {
        setData(result);
      }
      setLoading(false);
    }
    getRecs();
  }, [triggerFetch, requestType, location, preferences]);

  if (loading) {
    return (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 text-primary">Nuestras Mejores Opciones para Ti</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-1/4 mt-1" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3 mt-2" />
                <Skeleton className="h-4 w-1/3 mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive mt-6 text-center">{error}</p>;
  }

  if (!data || data.recommendations.length === 0) {
    return <div className="mt-8 text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">¡Haz clic en "Obtener Recomendaciones" para ver nuestras mejores sugerencias con IA!</div>;
  }

  return (
    <div className="mt-6 animate-in fade-in-50 duration-500">
      <h3 className="text-lg font-semibold mb-4 text-primary">Nuestras Mejores Opciones para Ti</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.recommendations.map((rec, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span className="font-headline">{rec.providerName}</span>
                <div className="flex items-center gap-1 text-sm font-medium text-accent">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <span>{rec.rating.toFixed(1)}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <CardDescription className="flex-grow">{rec.description}</CardDescription>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{rec.estimatedTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
