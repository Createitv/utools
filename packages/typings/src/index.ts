/**
 * Primitive
 * @desc Type representing [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types in TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`
 * @example
 *   type Various = number | string | object;
 *
 *    // Expect: object
 *   type Cleaned = Exclude<Various, Primitive>
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined
