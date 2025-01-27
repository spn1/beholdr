/** Camelize the given type literal */
export type Camelize<T extends string> = T extends `${infer A}_${infer B}`
  ? `${A}${Camelize<Capitalize<B>>}`
  : T;

/** Camelize all the keys in the given object type */
export type CamelizeKeys<T extends object> = {
  [key in keyof T as key extends string ? Camelize<key> : key]: T[key];
};
