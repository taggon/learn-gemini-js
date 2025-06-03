import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API_KEY });

// 책에서는 옵션으로 처리했지만 JS에서는 메서드를 다르게 사용한다.
const response = await ai.models.generateContentStream({
  model: 'gemini-2.0-flash-lite',
  contents: 'Google DeepMind에 대해 알려주세요.'
});

for await (const chunk of response) {
  console.log(chunk.text);
  console.log('---'); // chunk 단위 구분을 시각적으로 보기 위한 것인 듯
}
