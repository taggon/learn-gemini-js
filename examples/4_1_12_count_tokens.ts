import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API_KEY });
const tokenCount = await ai.models.countTokens({
  model: 'gemini-2.0-flash',
  contents: '동해물과 백두산이 마르고 닳으면 토근 수가 어떻게 될까요?',
});

console.log(tokenCount);
