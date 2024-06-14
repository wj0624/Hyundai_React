// default
const a1 = require('#labs/cjs/cjs01.js');
console.log(a1);

const a2 = require('#labs/cjs/cjs02.js');
a2();

const a3 = require('#labs/cjs/cjs03.js');
console.log(a3.a);
a3.fnA();

console.log('-----------------------------');

// named
const na1 = require('#labs/cjs/cjs04.js');
console.log(na1.a);
na1.fnA();

const { a, fnA } = require('#labs/cjs/cjs04.js'); // 구조분해할당
console.log(a);
fnA();

console.log('-----------------------------');
const { m_a, m_fnA } = require('#labs/cjs/cjs05.js');
const { m_a2 } = require('./modules/cjs/cjs05'); // 확장자 없이 쓰려면 Alias 사용 못함
console.log(m_a);
fnA(m_fnA);

console.log('-----------------------------');
if (a1 > 0) {
    const a2 = require('#labs/cjs/cjs01.js');
    console.log(a2);
}
