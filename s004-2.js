let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

user.sayHi = sayHi;
admin.sayHi = sayHi;

user.sayHi();
admin.sayHi();

admin['sayHi']();

// 다른 언어를 사용하다 자바스크립트로 넘어온 개발자는 this를 혼동하기 쉽습니다. 
// this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각하죠. 
// 이런 개념을 'bound this’라고 합니다.

// 자바스크립트에서 this는 런타임에 결정됩니다. 
// 메서드가 어디서 정의되었는지에 상관없이 this는 ‘점 앞의’ 객체가 무엇인가에 따라 ‘자유롭게’ 결정됩니다.