import { User } from './models/User';

const user = new User({ id: 1});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
user.on('change', () => console.log(user))
//user.trigger('change')
//user.set({ name: 'Jack', age: 25});
//user.save();
user.fetch();
//console.log(user.get('name'));