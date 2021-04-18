import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 0});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
user.on('save', () => console.log(user))
//user.trigger('change')
//user.set({ name: 'Jack', age: 25});
user.save();
//user.fetch();
//console.log(user.get('name'));