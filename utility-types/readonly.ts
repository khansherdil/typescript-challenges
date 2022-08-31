type Readonl<T> = {
  readonly [Key in keyof T]: T[Key];
};

interface TestObj {
  name: string;
  age: number;
}

type Z = Readonl<TestObj>;

const TestVar: TestObj = {
  age: 1,
  name: "",
};
