type x = number;
type y = number;
export type Coord = [x, y];
/**
 * returns a new array that is a 2d segment of the input array
 *
 * the coords are both inclusive
 */
export default function window2D<T>(arr: Array<Array<T>>, [x1, y1]: Coord, [x2, y2]: Coord): Array<Array<T>> {
    const withY = arr.slice(y1, y2 + 1);
    const withX = withY.map(row => row.slice(x1, x2 + 1));
    return withX;
}