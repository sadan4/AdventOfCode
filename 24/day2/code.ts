import recursiveArrToInt from "@util/recursiveArrToInt";
import input from "./input.txt";
import isArrEqual from "@util/isArrEqual";
import arrToAdjPairs from "@util/arrToAdjPairs";

let lines: string[] = input.split("\n");
lines.pop();

const lines2 = lines.map(l => l.split(" "));

const linesasnums = recursiveArrToInt(lines2);

function isSafe(n: number[], guh = false) {
    const first = n[0];
    const last = n[n.length - 1];
    let shouldIncrease = first < last;
    for(let i = 1; i < n.length; i++) {
        let [a, b] = n.slice(i - 1, i + 1);
        let diff = b - a;
        if(!shouldIncrease) diff = -diff;
        if(diff === 1 || diff === 2 || diff === 3) continue;

        return false
    }
    return true
}
function isSavep2(n) {
    for(let i = 0; i < n.length; i++) {
        const a = [...n.slice(0, i), ...n.slice(i + 1)];
        if(isSafe(a)) return true
    }
    return false
}
const tests = [
    [7, 6, 4, 2, 1],
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5],
    [8, 6, 4, 4, 1],
    [1, 3, 6, 7, 9]
]

console.log(tests)
const testResults = tests.map(x => isSavep2(x));
console.log(testResults);
const safe = linesasnums.filter(x =>isSavep2(x));
const count = console.log(safe.length);
