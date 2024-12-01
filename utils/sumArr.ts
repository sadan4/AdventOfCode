export default function sumArr(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
}