import input from "./input.txt";
import sumArr from "@util/sumArr";


const lines = input.split('\n');

lines.pop();

function getNumForLine(line: string) {
    const count = [...line.matchAll(/\d/g)];
    if (count.length === 0) {
        console.log("zero")
    };
    if (count.length === 1) {
        const i = parseInt(count[0][0]);
        if (Number.isNaN(i)) {
            throw new Error("i is NaN");
        }

        return parseInt(`${i}${i}`);
    }
    const [, first, second] = line.match(/.*?(\d).*(\d)/) ?? [];
    if (!first || !second) throw new Error("first or second  number not found");
    const n1 = parseInt(first), n2 = parseInt(second);
    if (Number.isNaN(n1 + n2)) throw new Error("first or second number is NaN");
    console.log("TWO", n1, n2, line)
    return parseInt(`${n1}${n2}`);
}
function part1() {
    return sumArr(lines.map(getNumForLine));
}
const numWordsToNum = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}
const numRegex = Object.keys(numWordsToNum).join("|");
function getNumForLine2(line: string): number {
    const match = [...line.matchAll(new RegExp(numRegex, "g"))];

    if(match.length === 0) return 0
    if(match.length === 1) {
        const num = match[0][0];
        if(Number.isNaN(+num)) throw new Error(`num is NaN, num: ${num}`);
        return +`${num}${num}`;
    }
    let [, first, last] = line.match(new RegExp(`.*?(${numRegex}).*(${numRegex})`)) ?? [];
    first = numWordsToNum[first];
    last = numWordsToNum[last];

    if(Number.isNaN(+`${first}${last}`)) throw new Error(`first or last is NaN, first: ${first}, last: ${last}`);

    return +`${first}${last}`;
}
function part2() {
    return sumArr(lines.map(getNumForLine2));
}
// const tests = [
//     "two1nine",
//     "eightwothree",
//     "abcone2threexyz",
//     "xtwone3four",
//     "4nineeightseven2",
//     "zoneight234",
//     "7pqrstsixteen",
// ]
// console.log(tests.map(replaceWords))
// console.log(tests.map(replaceWords).map(getNumForLine))
console.log(part1());
console.log(part2());