import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { UserShow } from './views/UserShow';

const user = User.buildUser({ name: 'Jack', age: 25, id: 1});

//user.fetch();

//setTimeout(() => console.log(user), 4000);
//user.on('change', () => console.log(user))
//user.trigger('change')
//user.set({ name: 'Jack', age: 25});
//user.save();
//user.fetch();
//console.log(user.get('name'));

const collection = new Collection<User, UserProps>('http://localhost:3000/users', User.buildUser);

const root = document.getElementById('root');
//const collection = User.buildUserCollection();

collection.on('change', () => {
  //console.log('onchange', collection)
  if (root) {
    new UserList(root, collection).render();
    // const userList = new  UserList(root, user);
  
    // userList.render();
    //console.log(userEdit)
  } else {
    throw new Error('Root element not found');
  }
});

collection.fetch();
//console.log('index collection=', collection);

