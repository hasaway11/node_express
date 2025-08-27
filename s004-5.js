

let group = {
  title: "1모둠",
  students: ["보라", "호진", "지민"],

  showList1() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  },

  showList2() {
    this.students.forEach(function(student) {
      // 호출 주체가 없으니 this는 기본값(undefined in strict mode)으로 설정됨
      console.log(this.title + ': ' + student);
    })
  }
};

group.showList1();
group.showList2();

// forEach의 화살표 함수 본문에 있는 this.title은 화살표 함수 바깥에 있는 메서드인 showList가 가리키는 대상과 동일해집니다. 즉 this.title은 group.title과 같습니다.