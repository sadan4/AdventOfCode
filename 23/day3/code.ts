import makeLines from "@util/makeLines";
import input from "./input.txt";
import window2D from "@util/window2D";
import clamp from "@util/clamp";
import forIV from "@util/forIV";
import sumArr from "@util/sumArr";
import multArr from "@util/multArr";

const lines = makeLines(input);

const clampXAxis = clamp(0, lines[0].length);
const clampYAxis = clamp(0, lines.length);
function isAdjacent1(lineNumber: number, match: RegExpExecArray) {
    const { 1: num, index } = match;
    let x1, y1, x2, y2;
    x1 = clampXAxis(index - 1);
    x2 = clampXAxis(index + num.length);
    y1 = clampYAxis(lineNumber - 1);
    y2 = clampYAxis(lineNumber + 1);
    const area = window2D(lines.map(x => [...x]), [x1, y1], [x2, y2]);
    return !!area.find(x => !!x.join("").match(/[^\d\w\.]/));
}

function part1() {
    let toRet = 0;
    for (const [v, i] of forIV(lines)) {
        const matches = v.matchAll(/(\d+)/g);
        for (const match of matches) {
            if (isAdjacent1(i, match)) {
                toRet += parseInt(match[1]);
            }
        }
    }
    return toRet;
}
/**
 * 
 * @param startingIndex ex: if lines[lineNumber] = "qwertyuiop" and line = "rty", this would be 3
 * @returns 
 */
function findFullNumber(lineNumber: number, segment: string, startingIndex: number): number[] {
    const matches = [...segment.matchAll(/(\d+)/g)];
    if (matches.length === 0) return [];
    const toRet: number[] = [];
    for (const match of matches) {
        const num = [...match[1]];
        if (match.index === 0) {
            for (let i = startingIndex - 1; !!lines[lineNumber][i].match(/\d/); i--) {
                num.unshift(lines[lineNumber][i]);
            }
        }
        // if it goes to the end
        if (match.index + match[1].length === segment.length) {
            // console.log(`test: ${lines[lineNumber][startingIndex + segment.length]}`)
            for (let i = startingIndex + segment.length; !!lines[lineNumber]?.[i]?.match(/\d/); i++) {
                num.push(lines[lineNumber][i]);
            }
        }
        const parsedNum = parseInt(num.join(""));
        if (Number.isNaN(parsedNum))
            throw new Error(`Number is NaN, lineNumber: ${lineNumber}, line: ${segment}, startingIndex: ${startingIndex}, num: ${num.join("")}`);
        toRet.push(parsedNum);

    }
    return toRet;
}
/**
 * also makes the ratio
 */
function isAdjacent2(lineNumber: number, match: RegExpExecArray) {
    const { 1: num, index } = match;
    let x1, y1, x2, y2;
    x1 = clampXAxis(index - 1);
    x2 = clampXAxis(index + num.length);
    y1 = clampYAxis(lineNumber - 1);
    y2 = clampYAxis(lineNumber + 1);
    const area = window2D(lines.map(x => [...x]), [x1, y1], [x2, y2]);
    const numAdj = sumArr(area.map(x => [...x.join("").matchAll(/\d+/g)].length));
    if (numAdj !== 2) return 0;
    const ans = area.map(x => x.join("")).flatMap((x, i) => findFullNumber(lineNumber - 1 + i, x, x1));
    return multArr(ans);
}
function part2() {
    let toRet = 0;
    for (const [v, i] of forIV(lines)) {
        const matches = v.matchAll(/(\*)/g);
        for (const match of matches) {
            toRet += isAdjacent2(i, match);
        }
    }
    return toRet;
}

console.log(part1());
console.log(part2());