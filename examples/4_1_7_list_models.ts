import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API_KEY });

// 책에 나온 것과 동일한 기능의 API는 보이지 않는 듯. 반환하는 값이 Pager 객체이다.
const modelPager = await ai.models.list();

do {
  const models = modelPager.page;
  for (const model of models) {
    // 이 부분도 책과 다른 부분 supported_generation_methods 대신 supportedActions 배열을 확인해야 한다.
    if (model.supportedActions?.includes('generateContent')) {
      console.log(model.name);
    }
  }

  if (!modelPager.hasNextPage()) {
    break;
  }
} while (await modelPager.nextPage());
