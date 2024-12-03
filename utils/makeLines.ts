export default function makeLines(input: string): string[] {
    const toRet = input.split('\n');
    if(toRet.at(-1)?.replaceAll(" ", "") === "") toRet.pop();
    return toRet;
}