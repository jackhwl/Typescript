import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';


//const user = User.buildUser({ id: 1});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
//user.on('change', () => console.log(user))
//user.trigger('change')
//user.set({ name: 'Jack', age: 25});
//user.save();
//user.fetch();
//console.log(user.get('name'));

const collection = new Collection<User, UserProps>('http://localhost:3000/users', User.buildUser);

collection.on('change', () => console.log(collection));

collection.fetch();