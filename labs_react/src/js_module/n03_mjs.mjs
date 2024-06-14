// default
import a1 from '#labs/esm/esm01.mjs';
console.log(a1);

import fnA1 from '#labs/esm/esm02.mjs';
fnA1();

import objA1 from '#labs/esm/esm03.mjs';
console.log(objA1.a);
objA1.fnA();
console.log('----------------------------');

// named
import * as mA from '#labs/esm/esm04.mjs';
console.log(mA.a);
mA.fnA();

import { a, fnA } from '#labs/esm/esm04.mjs';
console.log(a);
fnA();

import { a as a2, fnA as fnA2 } from '#labs/esm/esm04.mjs';
console.log(a2);
fnA2();
console.log('----------------------------');

import { m_a, m_fnA, m_a2 } from '#labs/esm/esm05.mjs';
console.log(m_a);
m_fnA();

import * as mB from '#labs/esm/esm05.mjs';
console.log(mB.m_a);
mB.m_fnA();
