export default function multArr(arr: number[]): number {
    return arr.reduce((acc, val) => acc * val, 1);
}