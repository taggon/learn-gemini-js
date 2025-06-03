import { GoogleGenAI, createPartFromUri } from '@google/genai';
import { dirname, resolve } from 'node:path';

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API_KEY });

const photoPath = resolve(dirname(Bun.fileURLToPath(import.meta.url)), '../assets/volt.jpeg');
const file = await ai.files.upload({
  file: photoPath,
});
const response = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents: [
    createPartFromUri(file.uri!, file.mimeType!),
    '이미지에 대해서 한국어로 설명해주세요'
  ],
})

console.log(response.text);
