import input from "./input.txt";

function part1() {
    const matches = [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)];
    let toRet = 0;
    for (const [, a, b] of matches) {
        const a1 = parseInt(a), b1 = parseInt(b);
        if (Number.isNaN(a1 + b1)) throw new Error("123");
        toRet += a1 * b1;
    }
    return toRet;
}
function part2(a) {
    const matches = [...a.replaceAll(/don't\(\).*?(do\(\)|$)/sg, "").matchAll(/mul\((\d{1,3}),(\d{1,3})\)/sg)]
    let toRet = 0;
    for (const [, a, b] of matches) {
        const a1 = parseInt(a), b1 = parseInt(b);
        if (Number.isNaN(a1 + b1)) throw new Error("123");
        toRet += a1 * b1;
    }
    return toRet;
}
console.log(part1());
console.log(part2(input));
