import { User } from './models/User';

const user = new User({ id: 1, name:'jack'});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
user.on('change', () => console.log('changeobject'))
user.trigger('change')
//user.set({ name: 'Jack', age: 25});
//user.save();

console.log(user.get('name'));