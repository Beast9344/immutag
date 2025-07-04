"use server";

import { explainPlatform, type ExplainPlatformInput, type ExplainPlatformOutput } from "@/ai/flows/explain-platform";

export async function explainPlatformAction(input: ExplainPlatformInput): Promise<ExplainPlatformOutput> {
  try {
    const output = await explainPlatform(input);
    return output;
  } catch (error) {
    console.error("Error in explainPlatformAction:", error);
    // In a real app, you might want to return a more structured error object
    return { explanation: "" };
  }
}
