import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: Bun.env.GEMINI_API_KEY });
const chat = ai.chats.create({
  model: 'gemini-2.0-flash',
});

const resp1 = await chat.sendMessage({ message: '내가 키우는 고양이의 이름은 볼트입니다.' });
console.log(resp1.text);

const resp2 = await chat.sendMessage({ message: '내 고양이의 이름을 말해보세요.' });
console.log(resp2.text);

console.log('채팅 이력:');
for (const history of chat.getHistory()) {
  console.log(history.role, ':', history.parts?.[0]?.text);
}
