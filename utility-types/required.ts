//same as partial but -? makes it required
type Reqd<T> = {
  [Key in keyof T]-?: T[Key];
};

interface obj {
  name: string;
  age: number;
}

type R = Reqd<obj>;

const r: R = {
  age: 1,
  name: "",
};
