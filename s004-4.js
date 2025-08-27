// 화살표 함수의 this 결정 과정
// 화살표 함수는 호출 시점에 this를 새로 바인딩하지 않고, 정의 시점의 상위 렉시컬 환경에서 this 값을 그냥 복사해 옵니다.

const obj = {
  arrow : () => console.log(this)
}

obj.arrow();

const obj2={
  a: 10,
  general:function() {
    console.log(this.a);
    const inner=()=>{
      console.log(this.a);
    };
    const inner2=function() {
      console.log(this.a);
    }
    inner();
    inner2();
  }
}

obj2.general();