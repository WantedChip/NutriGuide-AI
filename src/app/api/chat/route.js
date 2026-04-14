import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { query } = await req.json();

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Exact requested system instruction
    const systemInstruction = `You are NutriGuide AI, a clinical nutrition assistant. Your job is to analyze the user's available ingredients, dietary restrictions, and health goals, and output a highly optimized recipe. You MUST respond strictly in valid JSON format. Do not include markdown formatting like \`\`\`json in your response, just the raw JSON object. Structure: { "recipeName": "String", "whyItFits": "2-3 sentence clinical explanation for the hero box", "prepTime": "String", "macros": { "calories": "Number", "protein": "Number+g", "carbs": "Number+g", "fat": "Number+g" }, "ingredients": ["Array of strings"], "preparation": ["Array of strings"] }`;

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: query,
      config: {
        systemInstruction,
        responseMimeType: "application/json"
      }
    });

    // Parse the returned AI response string into JSON
    const data = JSON.parse(response.text);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
