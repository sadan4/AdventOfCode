import { mkdir, writeFile } from "fs/promises";
import config from "../.env.json" with {type: "json"};

const d = new Date();

const year = d.getFullYear().toString().substring(2);

const day = (d.getDay() + 1).toString();

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