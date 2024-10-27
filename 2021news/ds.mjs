// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-7737ca4e64cc4cd09f95fb742f2af5c1",
});

async function main(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: message }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}
document.getElementById('content1').addEventListener('click', function(event) {
main(
  "个人成长中最关键的是什么？请依据相关纵向研究成果进行反馈，不要用心灵鸡汤文等类似资料回答"
);
});