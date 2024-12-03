import recursiveArrToInt from '@util/recursiveArrToInt';
import input from './input.txt';


const lines = recursiveArrToInt(input.split(/^.*:/gm).filter(x => !!x).map(x => x.trim().split('\n').map(x => x.replaceAll(/ +/g, ' ').split(' '))));

function part1() {
    return lines;
}
function part2() { }

console.log(part1());
console.log(part2());
