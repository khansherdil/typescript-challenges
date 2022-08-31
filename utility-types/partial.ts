// ? loop over keys, assign ?opt to make the key optional
type Partl<T> = {
  [Key in keyof T]?: T[Key];
};

interface obj {
  name: string;
  age: number;
}

type M = Partl<obj>;

const m: M = {
  age: 1,
};
