import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  //userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;


  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logoTodo(id, title, completed)
});

const logoTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}

class Vehicle {
  color: string = 'red';

  protected honk(): void {
    console.log('beep');
  }
}