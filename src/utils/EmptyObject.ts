export function containEmptyAttribute(obj: any) {
    return Object.values(obj).some(x => x === null || x === '');

}