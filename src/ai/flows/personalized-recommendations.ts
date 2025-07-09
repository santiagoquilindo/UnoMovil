// src/ai/flows/personalized-recommendations.ts
'use server';

/**
 * @fileOverview A personalized recommendation AI agent for transportation, deliveries, and shopping.
 *
 * - getPersonalizedRecommendations - A function that handles the recommendation process.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userId: z.string().describe('The ID of the user requesting recommendations.'),
  requestType: z
    .enum(['transportation', 'deliveries', 'shopping'])
    .describe('The type of recommendation requested.'),
  location: z
    .string()
    .optional()
    .describe('The user location. Optional if the request type is shopping'),
  preferences: z
    .string()
    .optional()
    .describe('The user saved preferences.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const RecommendationItemSchema = z.object({
  providerName: z.string().describe('The name of the service provider.'),
  description: z.string().describe('A short description of the provider.'),
  rating: z.number().describe('The average rating of the service provider.'),
  estimatedTime: z
    .string()
    .describe('The estimated time for the service (e.g., delivery time).'),
});

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(RecommendationItemSchema).describe(
    'A list of personalized recommendations based on user preferences, ratings, and estimated time.'
  ),
});

export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert recommendation system specializing in Popayán, Colombia.

You will provide personalized recommendations for transportation, deliveries, or shopping based on the user's request type, location, past behavior and preferences.

Consider the number of positive ratings, the expected delivery time, and any saved preferences from earlier requests.

User ID: {{{userId}}}
Request Type: {{{requestType}}}
User Location: {{{location}}}
User Preferences: {{{preferences}}}

Provide recommendations tailored to the user's specific needs and context.

Format your output as a JSON object with a "recommendations" field containing an array of recommendations. Each recommendation should include:
- providerName: The name of the service provider.
- description: A short description of the provider.
- rating: The average rating of the service provider.
- estimatedTime: The estimated time for the service (e.g., delivery time).
`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
