import makeLines from "@util/makeLines";
import input from "./input.txt";
import recursiveArrToInt from "@util/recursiveArrToInt";
import sumArr from "@util/sumArr";

let lines = makeLines(input);
const pointsFromWinningNumbers = (n: number) => n === 0 ? 0 : 1 << (n-1)
type Card = {
    id: number;
    winningNumbers: number[];
    numbers: number[];
}
function part1() {
    const cards: number[] = lines.map(x => {
        const winners: number[] = [];
        const toRet: Partial<Card> = {};
        const [head, rest] = x.split(": ");
        {
            const [, id] = head.match(/(\d+)/) ?? [];
            if(Number.isNaN(+id)) throw new Error(`Invalid id: ${id}`);
            toRet.id = +id;
        }
        {
            const [winning, all] = recursiveArrToInt(rest.split(" | ").map(x => x.trim()).map(x => x.split(" ")));
            for(const num of winning) {
                winners.push(all.filter(x => x === num).length)                
            }
            return pointsFromWinningNumbers(sumArr(winners))
        }
    })
    return sumArr(cards);
}
function part2() {
    const mult: Record<number, number> = Object.fromEntries(lines.map((_, i) => [i + 1, 1]));
    const cards: number[] = lines.map(x => {
        const toRet: Partial<Card> = {};
        let computedWinners: number;
        const [head, rest] = x.split(": ");
        {
            const [, id] = head.match(/(\d+)/) ?? []
            if(Number.isNaN(+id)) throw new Error(`Invalid id: ${id}`);
            toRet.id = +id;            
        }
        {
            const winners: number[] = []
            const [winning, all] = recursiveArrToInt(rest.split(" | ").map(x => x.trim()).map(x => x.split(" ")));
            for(const num of winning) {
                winners.push(all.filter(x => x === num).length);
            }
            computedWinners = sumArr(winners) * mult[toRet.id]            
            bumpN(sumArr(winners), mult[toRet.id]);
        }
        return computedWinners
        function bumpN(n: number, m: number) {
            let curIndex = toRet.id! + 1;
            while(n > 0) {
                mult[curIndex++] += m;                
                n--;
            }
        }
    })
    return sumArr(cards) + lines.length;
}
// lines = makeLines(`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11      
// `)
console.log(part1());
console.log(part2());