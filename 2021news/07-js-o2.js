function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("你好，我是" + this.name);
  };
}

// const person1 = new Person("张三", 30);
// const person2 = new Person("李四", 20);
// console.log(person2.name);
document.getElementById('content3').addEventListener('click', function(event) {
  event.preventDefault();
  
  // 创建一个Person实例
  const person = new Person("李四", 25);
  
  // 更新显示内容
  this.innerHTML = `
    <div class="person-card">
      <h1>个人信息</h1>
      <p>姓名: ${person.name}</p>
      <p>年龄: ${person.age}</p>
      <button onclick="greetPerson()">打招呼</button>
    </div>
  `;
  
  window.greetPerson = function() {
    const textContent = `你好，我是${person.name}`;
    alert(textContent);
  };
});