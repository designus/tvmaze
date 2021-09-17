import keyBy from 'lodash.keyby';

export const createMapWith = <T extends unknown>(arr: T[], key: keyof T): Record<string, T> => keyBy(arr, key);
