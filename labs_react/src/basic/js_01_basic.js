// 변수 선언
var a = 10;
console.log(a);

a = 'abc';
console.log(a);
console.log(10 + 20);
console.log(console);

// var console = '가나다라';
// console.log(console);

// 데이터 타입
console.log('--------------------');
console.log(typeof 10);
console.log(typeof 10.1);
console.log(typeof '12345');
console.log(typeof true);
console.log(typeof function () {});
console.log(typeof {});
console.log(typeof []);
console.log(typeof aaaa);

// 연산자
console.log('--------------------');
console.log(1 + '2');
console.log('1' + 2);
console.log('1' / 2);
console.log('1' * 2);
console.log('1' * 1 + 2);

// 템플릿 문자열
console.log('--------------------');
console.log(`1+2=${1 + 2}`);
var today = new Date().getFullYear();
console.log(`올해는 ${today}년 입니다.`);

// 논리 비교연산자
console.log('--------------------');
console.log('273' == 273);
console.log('273' === 273);

// 단축평가
console.log('--------------------');
true || console.log('실행1');
false || console.log('실행2');
true && console.log('실행1');
false && console.log('실행2');

// 형변환
console.log('--------------------');
console.log(Number('1') + 2);
console.log(Number(true) + 2);
console.log(Number('abcd') + 2);
console.log(Number('123abcd') + 2);
console.log(isNaN(Number('123abcd')));

// 구조분해할당(Destructing)
console.log('--------------------');
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

var [a = 0, b = 0, c = 0] = [1, 2];
console.log(a, b, c);

var { pro1, pro2, pro3 } = {
    pro1: 1,
    pro2: 'str',
    pro3: true,
};
console.log(pro1, pro2, pro3);

var { pro1 = 0, pro2 = 'str', pro3 = true } = {};
console.log(pro1, pro2, pro3);

var b = [1, 2, 3];
var [a, b, c] = b;
console.log(a, b, c);
