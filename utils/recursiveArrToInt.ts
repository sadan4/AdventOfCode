import IsAny from "./IsAny";

type test<T extends any[]> = IsAny<T> extends true ? T : T[number] extends any[] ? test<T[number]>[] : number[]

export default function recursiveArrToInt<T extends any[]>(arr: T): test<T> {
    return arr.map((el) => Array.isArray(el) ? recursiveArrToInt(el) : parseFloat(el)) as any; 
}