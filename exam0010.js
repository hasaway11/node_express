//옵셔널 체이닝 '?.'
let user1 = {
  firstName: "Violet"
};

let user2 = null;

console.log(user1?.firstName);
// 체이닝이 멈추면 undefined
console.log(user2?.firstName);


let key = "firstName";
console.log(user1?.[key]);
console.log(user2?.[key]);
