export default function isArrEqual(a: any[], b: any[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}