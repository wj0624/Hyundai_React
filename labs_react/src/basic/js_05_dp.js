function cnt1() {
    var count = 0;
    return ++count;
}

console.log(cnt1());
console.log(cnt1());

console.log('--------------------');
let count = 0;
function cnt2() {
    return ++count;
}

count = 200; //side effect

console.log(cnt2());
console.log(cnt2());
console.log('--------------------');

// 클로저(Closure) 디자인 패턴
// 함수 선언식
function cnt3() {
    let count = 0;
    return function () {
        return ++count;
    };
}

// 함수 표현식
let cnt4 = cnt3();
console.log(cnt4());
console.log(cnt4());
console.log('--------------------');

// 피보나치 행렬
let cnt = 0;
function fib(n) {
    cnt++;
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}
let r = fib(5);
console.log(cnt, r);

// 메모이제이션
cnt = 0;
let result = [];
function fib2(n) {
    cnt++;
    if (n < 2) result[n] = n;
    if (result[n] == undefined) result[n] = fib2(n - 1) + fib2(n - 2);
    return result[n];
}
r = fib2(5);
console.log(cnt, r, result);
console.log('--------------------');

let calc = {
    a: 1,
    b: 2,
    add: function () {
        return this.a + this.b;
    },
};
console.log(calc.add());

let cal2 = {};
cal2.a = 1;
cal2.b = 2;
cal2.add = function () {
    return this.a + this.b;
};
console.log(cal2.add());

// 생성자
function calc3(a, b) {
    this.a = a;
    this.b = b;
}
calc3.prototype.add = function () {
    return this.a + this.b;
};

let cal3 = new calc3(1, 2);
console.log(cal3.add());
console.log('--------------------');

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // set area(param)
    get area() {
        return this.height * this.width;
    }

    print() {
        console.log('면적:' + this.area);
    }
}

let poly = new Polygon(10, 20);
console.log(poly.area);
poly.print();

class Square extends Polygon {
    constructor(length) {
        super(length, length);
    }
}

let squ = new Square(10);
console.log(squ.area);
squ.print();
console.log('--------------------');
