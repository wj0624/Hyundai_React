function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(1));

function add(a, b = 0) {
    return a + b;
}
console.log(add(1));

function add2() {
    let c = 0;
    for (i = 0, cnt = arguments.length; i < cnt; i++) {
        c += Number(arguments[i]);
    }
    return c;
}
console.log(add2(1, 2));
console.log(add2(1, 2, 3, 4, 5));

console.log('--------------------');
function add3(...a) {
    // for문
    let c = 0;
    for (i = 0, cnt = a.length; i < cnt; i++) {
        c += Number(a[i]);
    }

    // in
    c = 0;
    for (let i in a) {
        c += a[i];
    }

    // of
    c = 0;
    for (let v of a) {
        c += v;
    }

    // arrow function
    c = 0;
    a.forEach((v) => (c += v));

    return c;
}
console.log(add3(1, 2));
console.log(add3(1, 2, 3, 4, 5));

console.log('--------------------');
function add4(a, b, ...f) {
    let c = 0;
    f.forEach((fn) => (c += fn(a, b)));
    return c;
}

console.log(
    add4(
        1,
        2,
        (a, b) => a + b,
        (a, b) => a - b,
    ),
);
console.log('--------------------');

//seperated operator(전개 구문)
let arr = [1, 2, 3, 4, 5];
console.log(...arr);

let str = 'hello';
console.log(...str);

console.log('--------------------');
let obj = { name: '홍길동', addr: '서울' };
console.log(obj);

let obj2 = { ...obj, age: 20 };
console.log(obj2);

function circle(a, r) {
    console.log(a.x, a.y, r);
}
circle({ x: 10, y: 20 }, 100);

// 비구조화 할당(Destructiong Assignment)
function circle1({ a = { x: 0, y: 0 }, r = 0 } = {}) {
    console.log(a.x, a.y, r);
}
circle1();
