const person = {
  name: "张三",
  age: 30,
  greet: function () {
    console.log("你好，我是" + this.name);
  },
};

document.getElementById('content4').addEventListener('click', function(event) {
  event.preventDefault();
  
  // 更新显示内容
  this.innerHTML = `
    <div class="person-card">
      <h1>个人信息</h1>
      <p>姓名: ${person.name}</p>
      <p>年龄: ${person.age}</p>
      <button onclick="greetPerson2()">打招呼</button>
    </div>
  `;
  
  window.greetPerson2 = function() {
    const textContent = `你好，我是${person.name}`;
    alert(textContent);
  };
});
