import keyBy from 'lodash.keyby';


export const createMapWith = <T extends any>(arr: T[], key: keyof T) => keyBy(arr, key) as Record<string, T> ;
