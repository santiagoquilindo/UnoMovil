// src/app/actions.ts
'use server';

import {
  getPersonalizedRecommendations,
  type PersonalizedRecommendationsInput,
  type PersonalizedRecommendationsOutput,
} from '@/ai/flows/personalized-recommendations';
import { z } from 'zod';

const actionSchema = z.object({
  requestType: z.enum(['transportation', 'deliveries', 'shopping']),
  location: z.string().optional(),
  preferences: z.string().optional(),
});

export async function fetchRecommendations(
  input: Omit<PersonalizedRecommendationsInput, 'userId'>
): Promise<PersonalizedRecommendationsOutput | { error: string }> {
  try {
    const validatedInput = actionSchema.parse(input);
    const result = await getPersonalizedRecommendations({
      ...validatedInput,
      // In a real application, you would get the user ID from the session.
      userId: 'user-123',
    });
    return result;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    if (error instanceof z.ZodError) {
      return { error: 'Invalid input provided for recommendations.' };
    }
    return { error: 'An unexpected error occurred while fetching recommendations.' };
  }
}
