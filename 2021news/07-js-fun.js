document.getElementById('content1').addEventListener('click', function() {
  // 第一个内容区块的代码
});
function classifyText(text) {
  // 获取文本的长度
  const textLength = text.length;

  // 根据文本长度判断类型
  if (textLength < 100) {
    return "短新闻";
  } else {
    return "长新闻";
  }
}

document.getElementById('content1').addEventListener('click', function(event) {
  event.preventDefault(); // 阻止链接的默认跳转行为
  
  let content = prompt("请输入文案:");
  if(content) {
  // 使用classifyText函数进行分类
  const result = classifyText(content);
  // 显示结果
  alert(`这是一篇${result}，字数为：\n${content.length}`);
  }
  
});

// // 示例用法
// const text1 = "这是一条短新闻，长度小于100个字符。";
// const text2 =
//   "这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。";
// console.log(classifyText(text1)); // 输出: 短新闻
// console.log(classifyText(text2)); // 输出: 长新闻
