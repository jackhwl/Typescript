class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const s = new ArrayOfAnything<string>(['a', 'b', 'c']);

const s2 = new ArrayOfAnything(['a', 'b', 'c']);

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c'])
printAnything(['a', 'b', 'c'])

class Cat {
  print() {
    console.log('I am a cat')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}