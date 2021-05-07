import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'newname', age: 32 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'bill' });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ age: 45 });
console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('hi');
});
user.on('change', () => {
  console.log('here');
});
user.on('tree', () => {
  console.log('tree');
});
console.log(user);

user.trigger('change');
user.trigger('tree');
user.trigger('upd');
