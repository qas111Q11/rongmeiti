// Please install OpenAI SDK first: `npm install openai`
function mainb(prompt) {
fetch('https://api.deepseek.com/chat/completions', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sk-8adadae569084100b228d341b7c2905b'
  },
  body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
          {role: 'system', content: '你是小红书爆款写作专家，请你用以下步骤来进行创作，首先产出5个标题（含适当的emoji表情），其次产出1个正文（每一个段落含有适当的emoji表情，文末有合适的tag标签），回答内容不超过200字'},
          {role: 'user', content: prompt}
      ],
      stream: false
  })
})
.then(response => response.json())
// .then(data => console.log(data))
.then(data => {
  document.querySelector('#outputText').textContent = data.choices[0].message.content;
})
.catch(error => console.error('Error:', error));
}
document.getElementById('content7').addEventListener('click', function(event) {

  let content = prompt("请输入文案:");
  if(content) {
    mainb(content);}
});