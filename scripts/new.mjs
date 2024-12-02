import { copyFile, mkdir, writeFile } from "fs/promises";
import config from "../.env.json" with {type: "json"};
import { parseArgs } from "util";

const d = new Date();
/**
 * @type {import("util").ParseArgsConfig["options"]}
 */
const options = {
    "year": {
        type: "string",
        default: d.getFullYear().toString().substring(2),
        short: "y"
    },
    "day": {
        type: "string",
        default: (d.getDay() + 1).toString(),
        short: "d"
    }
}
const { year, day } = parseArgs({ args: process.argv.slice(2), options }).values;

const url = `https://adventofcode.com/20${year}/day/${day}/input`;
console.log(url);
const input = await fetch(new Request(
    url,
    {
        headers: {
            Cookie: `session=${config.cookie}`,
            "User-Agent": config.userAgent
        }
    }
));

await mkdir(`./${year}/day${day}`, { recursive: true });
await writeFile(`./${year}/day${day}/input.txt`, await input.text());
await copyFile("./scripts/template.ts", `./${year}/day${day}/code.ts`);
await copyFile("./scripts/input.txt.d.ts", `./${year}/day${day}/input.txt.d.ts`);