import makeLines from "@util/makeLines";
import input from "./input.txt";
import sumArr from "@util/sumArr";
import zipObj from "@util/zipObj";

const lines = makeLines(input);
type Round = {
    red: number;
    blue: number;
    green: number;
}

type Game = {
    id: number;
    rounds: Round[];
}

function parseLines(l = lines): Game[] {
    const games: Game[] = l.map(line => {
        const toRet: Partial<Game> = {};
        {
            const [game, data] = line.split(": ")

            {
                const [, gameId] = game.match(/(\d+)$/) ?? [];
                toRet.id = parseInt(gameId);
                if (Number.isNaN(toRet.id))
                    throw new Error(`Invalid game id: ${gameId}`);
            }

            {
                const rounds: Round[] = data.split("; ").map(x => x.trim()).map(round => {
                    const toRet: Partial<Round> = {};
                    {
                        const [, blue] = round.match(/(\d+) blue/) ?? [, "0"]
                        toRet.blue = +blue;
                    }
                    {
                        const [, red] = round.match(/(\d+) red/) ?? [, "0"]
                        toRet.red = +red;
                    }
                    {
                        const [, green] = round.match(/(\d+) green/) ?? [, "0"]
                        toRet.green = +green;
                    }
                    if (Number.isNaN(sumArr(Object.values(toRet)))) {
                        throw new Error(`Invalid round: ${round}`);
                    }
                    return toRet as Round;
                });
                toRet.rounds = rounds;
            }
        }
        return toRet as Game;
    });
    return games;
}
function anyGreater(orig: Record<PropertyKey, number>, than: Record<PropertyKey, number>): boolean {
    for (const key in orig) {
        if (orig[key] > than[key]) return true;
    }
    return false;
}
function isPossibleGame(g: Game, contents: Round): boolean {
    return g.rounds.every(round => !anyGreater(round, contents))
}
const asking: Round = {
    red: 12,
    green: 13,
    blue: 14,
}
function powerCubes(c: Round): number {
    return c.blue * c.green * c.red;
}
function part1(games: Game[] = parseLines()) {
    const possibleGames = games.map(game => {
        if (isPossibleGame(game, asking)) return game.id;
        return 0;
    })
    const ans = sumArr(possibleGames);
    return ans;
}
function part2(games: Game[] = parseLines()) {
    const sets = games.map(game => {
        const rounds = zipObj(...game.rounds);
        const maxes: Round = {
            red: Math.max(...rounds.red),
            green: Math.max(...rounds.green),
            blue: Math.max(...rounds.blue),
        }
        return powerCubes(maxes);
    });
    return sumArr(sets);
}
// function test() {
//     let input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
//     console.log(part1(parseLines(makeLines(input))));
// }
// test();

console.log(part1());
console.log(part2());