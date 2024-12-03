type index = number;
export default function forIV<T>(arr: Array<T>): [T, index][] {
    return arr.map((x, i) => [x, i]);
}