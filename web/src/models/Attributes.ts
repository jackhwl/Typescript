export class Attributes<T> {
  constructor(private data: T) {}

  // // get get() {
  // //   return this.attributes.get.bind(this.attributes);
  // // }

  // get<K extends keyof T>(propName: K): T[K] { 
  //   return this.data[propName];
  // }

  get = <K extends keyof T>(propName: K): T[K] => { 
    return this.data[propName];
  }

  set = (update: T): void => {
    Object.assign(this.data, update);
  }
}