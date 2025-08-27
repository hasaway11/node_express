// 참조타입 : object, array, function 등
// 자바스크립트는 두 객체를 비교할 때 **메모리에 저장된 주소(address)**를 비교

const user = { name: 'John' };
const b = { name: 'John' };

console.log(user==b);

const admin = user;

console.log(user==admin);
console.log(user===admin);


admin.name = 'Spring';
console.log(user==admin);
console.log(user===admin);

console.log(user);
