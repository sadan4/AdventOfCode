import unzip from '@util/unzip';
import input from './input.txt';
import recursiveArrToInt from '@util/recursiveArrToInt';
import zip from '@util/zip';
import sumArr from '@util/sumArr';

const lines = input.split('\n');
let pairs = lines.map((line) => {
    return line.replace(/ +/, " ").split(" ")
})
pairs.pop();
pairs = recursiveArrToInt(pairs);
let [a, b] = unzip<[number[], number[]]>(pairs);

a = a.sort(), b = b.sort();
const sortedPairs = zip(a, b);

const allA  = new Set(a);
const counts = [...allA.entries().map(([n]) => {
    return b.filter(e => e === n).length * n;
})];
const part2ans = sumArr(counts);
let diffs = sortedPairs.map(([a, b]) => {
    return Math.abs(a - b);
})

const ans = sumArr(diffs);

console.log(ans)
console.log(part2ans)