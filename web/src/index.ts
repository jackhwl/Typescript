import { User } from './models/User';

const user = new User({ name: 'Jack', age: 25});

user.set({name: 'Peter'})
console.log(user.get('name'))
console.log(user.get('age'))