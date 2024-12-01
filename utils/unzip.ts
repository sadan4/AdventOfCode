export default function unzip<T = any>(arr): T;
export default function unzip<A, B = A>(arr: [A, B][]): [A[], B[]] {
    const toRet: [A[], B[]] = [[], []];
    for (let i = 0; i < arr.length; i++) {
        const [a, b] = arr[i];
        if (!(a && b)) {
            console.warn(`unzip: nullish value found at ${i}`, a, b);
        }
        toRet[0].push(a);
        toRet[1].push(b);
    }
    return toRet;
}