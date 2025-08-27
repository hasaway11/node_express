// this는 호출시점에 결정된다(호출한 객체가 this)
// strict mode면 undefined

const obj = {
  name: "John",
  say: function() {
    console.log(this.name);
  }
};

// obj가 this
obj.say();       

// 전역으로 호출하면 undefined
const f = obj.say;
f();  

const obj2 = {
  name:'홍길동'
};
obj2.hello = obj.say;

obj2.hello();