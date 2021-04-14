import { User } from './models/User';

const user = new User({ name: 'Jack', age: 25});

user.set({name: 'Peter'})
console.log(user.get('name'))
console.log(user.get('age'))

user.on('change', () => {
  console.log('change #1')
});
user.on('change', () => {
  console.log('change #2')
});
user.on('save', () => {
  console.log('save was triggered!')
});

user.trigger('change')
user.trigger('save')
user.trigger('saveasd')