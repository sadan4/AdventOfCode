export default function clamp(min: number, max: number): (num: number) => number;
export default function clamp(min: number, max: number, num: number): number;
export default function clamp(min: number, max: number, num?: number) {
    if(num == null) return (num: number) => clamp(min, max, num);
    return Math.max(min, Math.min(max, num));
}