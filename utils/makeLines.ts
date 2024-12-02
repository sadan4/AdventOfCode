export default function makeLines(lines: string): string[] {
    const toRet = lines.split('\n');
    if(toRet.at(-1)?.replaceAll(" ", "") === "") toRet.pop();
    return toRet;
}