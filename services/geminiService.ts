import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing. Gemini features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getMovieRecommendations = async (userQuery: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Por favor, configure sua chave de API para usar o assistente de IA.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful movie recommendation assistant for a streaming service called Netfly. 
      The user asks: "${userQuery}".
      
      Recommend 3 fictional movies (invent creative titles and brief descriptions) that fit the user's mood or request. 
      Format the output as a simple list. Keep it short and engaging. 
      Answer in Portuguese.`,
    });

    return response.text || "Desculpe, não consegui gerar recomendações no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao conectar com o assistente inteligente.";
  }
};