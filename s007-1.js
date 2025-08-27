const promise = new Promise((resolve, reject) => {
    // 1. 비동기 작업 시작
    setTimeout(() => {
        resolve("성공 결과");
        // reject("실패 이유");
    }, 1000);
});

promise.then(result => console.log(result)) 