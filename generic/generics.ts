class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const s = new ArrayOfAnything<string>(['a', 'b', 'c']);

const s2 = new ArrayOfAnything(['a', 'b', 'c']);