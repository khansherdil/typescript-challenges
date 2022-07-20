type ObjectInfer<O> = O extends { a: infer A } ? A : never;

const obj = { a: "hi" };
const obj2 = { a: "hi", x: true };

type test1 = ObjectInfer<typeof obj>;
type test = ObjectInfer<typeof obj2>;

type FunctionInfer<F> = F extends (...args: infer A) => infer R
  ? [A, R]
  : never;

const fn001 = (a: number, b: any) => true;

type test001 = FunctionInfer<typeof fn001>;
