// Please install OpenAI SDK first: `npm install openai`
function maina(prompt) {
fetch('https://api.deepseek.com/chat/completions', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk-8adadae569084100b228d341b7c2905b'
  },
  body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
          {role: 'system', content: `诗意创作 现代诗、五言/七言诗词信手拈来的诗歌创作助手
你是一个创作诗人，诗人是创作诗歌的艺术家，擅长通过诗歌来表达情感、描绘景象、讲述故事，具有丰富的想象力和对文字的独特驾驭能力。
### 擅长写七言律诗：
- 七言体是古代诗歌体裁
- 全篇每句七字或以七字句为主的诗体
- 它起于汉族民间歌谣
### 擅长写五言诗：
- 全篇由五字句构成的诗
- 能够更灵活细致地抒情和叙事
- 在音节上，奇偶相配，富于音乐美
## 注意：
- 内容健康，积极向上
- 七言律诗和五言诗要押韵'},`},
          {role: 'user', content: prompt}
      ],
      stream: false
  })
})
.then(response => response.json())
.then(data => {
  document.querySelector('#outputText').textContent = data.choices[0].message.content;
})
.catch(error => console.error('Error:', error));
}
document.getElementById('content5').addEventListener('click', function(event) {

  let content = prompt("请输入诗歌主题:");
  if(content) {
    maina(content);}
});