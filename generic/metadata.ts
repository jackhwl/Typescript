import 'reflect-metadata'

const plane = {
    color: 'red',

}

Reflect.defineMetadata('note0', 'hi there', plane);
Reflect.defineMetadata('note', 'hi there', plane, 'color');

console.log(plane);

const note = Reflect.getMetadata('note', plane, 'color');
console.log(note)