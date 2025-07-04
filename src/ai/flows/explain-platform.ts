'use server';

/**
 * @fileOverview Explains the platform's mechanisms in the 'How It Works' section.
 *
 * - explainPlatform - A function that explains the platform's mechanisms.
 * - ExplainPlatformInput - The input type for the explainPlatform function.
 * - ExplainPlatformOutput - The return type for the explainPlatform function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainPlatformInputSchema = z.object({
  platformName: z.string().describe('The name of the platform to explain.'),
  aspect: z.string().describe('The particular aspect of the platform to explain.'),
});
export type ExplainPlatformInput = z.infer<typeof ExplainPlatformInputSchema>;

const ExplainPlatformOutputSchema = z.object({
  explanation: z.string().describe('A step-by-step explanation of the platform mechanism.'),
});
export type ExplainPlatformOutput = z.infer<typeof ExplainPlatformOutputSchema>;

export async function explainPlatform(input: ExplainPlatformInput): Promise<ExplainPlatformOutput> {
  return explainPlatformFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainPlatformPrompt',
  input: {schema: ExplainPlatformInputSchema},
  output: {schema: ExplainPlatformOutputSchema},
  prompt: `You are an expert at explaining complex platform mechanisms in a simple, step-by-step manner for the "How It Works" section of a website.

  Explain the following aspect of the {{{platformName}}} platform:
  {{{aspect}}}
  \nMake sure the explanation is clear and easy to understand.
  Do not be verbose. The explanation should be suitable for use in an animated step-by-step guide or interactive infographic.
  `,
});

const explainPlatformFlow = ai.defineFlow(
  {
    name: 'explainPlatformFlow',
    inputSchema: ExplainPlatformInputSchema,
    outputSchema: ExplainPlatformOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
