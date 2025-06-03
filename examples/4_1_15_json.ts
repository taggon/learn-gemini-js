import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API_KEY });
const response = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents: `다음 JSON 스키마를 사용해서 유명한 쿠키 레시피 다섯 개의 목록을 한국어로 표현해주세요.

    Recipe = {"recipe_name": str}
    Return: list[Recipe]
  `,
  config: {
    responseMimeType: 'application/json',
  },
});

console.log(response.text);
