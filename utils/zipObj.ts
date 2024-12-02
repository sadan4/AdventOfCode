type Arrayify<T extends Record<PropertyKey, any>> = {
    [K in keyof T]: T[K][]
}
export default function zipObj<T extends Record<PropertyKey, any>>(...objs: T[]): Arrayify<T> {
    const toRet: Arrayify<T> = {} as any;
    const one = objs[0];
    for(const key in one) {
        toRet[key] = objs.map(obj => obj[key]);
    }
    return toRet;
}