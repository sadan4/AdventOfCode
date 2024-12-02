export default function arrToAdjPairs(arr) {
    const toRet: any[][] = []
    for (let i = 0; i < arr.length; i++) {
        toRet.push([arr[i], arr[i + 1] ?? undefined])
    }
    return toRet.filter(([a, b]) => a !== undefined && b !== undefined)
}