let arr = [100, 200, 300, 400, 500];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (item) {
    console.log(item);
});

// 람다표기법
console.log('--------------------');
arr.forEach((item) => {
    console.log(item);
});

[100, 200, 300, 400, 500].forEach((item) => {
    console.log(item);
});

let arr1 = [1, 2, 3, 4, 5];
arr1.filter((x) => x % 2 == 0).forEach((item) => console.log(item));
arr1.map((x) => x * 2).forEach((item) => console.log(item));
let sum = arr1.reduce((tot, x) => tot + x);
console.log(sum);

// 짝수의 합을 구하세요
let total = arr1.filter((x) => x % 2 == 0).reduce((tot, x) => tot + x);
console.log(total);

let result = arr1.some((x) => x < 3);
console.log(result);

result = arr1.every((x) => x < 3);
console.log(result);

console.log('--------------------');
// 유사 배열
let obj = {
    0: 'a',
    1: 'b',
    2: 'c',
};

for (var idx in obj) {
    console.log(obj[idx]);
}

obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
Array.from(obj).forEach((value, idx) => console.log(value));
