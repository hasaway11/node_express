let user = {
  name: "John",
  age: 30
};

// 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수
user.sayHi = function() {
  console.log(user.name);
};

user.sayHi(); 

// John을 가리키는 참조변수는 이제 admin 뿐
let admin = user;
user = null;

// TypeError: Cannot read properties of null (reading 'name')
admin.sayHi();