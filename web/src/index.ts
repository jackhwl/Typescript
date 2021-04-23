import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Jack', age: 25, id: 1});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
//user.on('change', () => console.log(user))
//user.trigger('change')
//user.set({ name: 'Jack', age: 25});
//user.save();
//user.fetch();
//console.log(user.get('name'));

//const collection = new Collection<User, UserProps>('http://localhost:3000/users', User.buildUser);

// const collection = User.buildUserCollection();

// collection.on('change', () => console.log(collection));

// collection.fetch();
const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error('Root element not found');
}
