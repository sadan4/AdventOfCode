export default function recursiveArrToInt(arr: any[]): any[] {
    return arr.map((el) => Array.isArray(el) ? recursiveArrToInt(el) : parseFloat(el));
}