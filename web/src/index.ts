import { User } from './models/User';

const user = new User({ id: 1});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
user.events.on('change', () => console.log('changeobject'))
user.events.trigger('change')
//user.set({ name: 'Jack', age: 25});
//user.save();
