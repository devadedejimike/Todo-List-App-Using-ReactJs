import { useState, useEffect } from "react";
import serviceHandler from './assets/Service/handler';
import FilterButtons from "./FilterButtons";
import TodoForm from "./assets/TodoForm";
import TodoList from "./assets/TodoList";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState('New');

  useEffect(() => {
    serviceHandler
      .getTodo()
      .then(response => {
        console.log(response.data);
        setTodo(response.data);
      })
      .catch(error => {
        console.error("Error fetching todos", error);
      });
  }, []);

  const addToList = (title) => {
    const newTodo = { id: uuidv4(), title, done: false, deleted: false };
    serviceHandler
      .createTodo(newTodo)
      .then(response => {
        setTodo([...todos, response]);
      })
      .catch(error => {
        console.log('Error Creating Todo', error);
      });
  };

  const markAsDeleted = (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id);

    if (todoToUpdate) {
      const updatedTodo = { ...todoToUpdate, deleted: true };

      serviceHandler
        .updateTodo(id, updatedTodo)
        .then(() => {
          setTodo(todos => todos.map(todo =>
            todo.id === id ? updatedTodo : todo
          ));
        })
        .catch(error => {
          console.log('Error updating Todo', error);
        });
    }
  };

  const markAsCompleted = (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id);

    if (todoToUpdate) {
      const updatedTodo = { ...todoToUpdate, done: true };

      serviceHandler
        .updateTodo(id, updatedTodo)
        .then(() => {
          setTodo(todos => todos.map(todo =>
            todo.id === id ? updatedTodo : todo
          ));
        
        })
        .catch(error => {
          console.log('Error Updating Todo', error);
        });
    }
  };

  const filteredList = () => {
    switch (filter) {
      case 'New':
        return todos.filter(todo => !todo.done && !todo.deleted );
      case 'Completed':
        return todos.filter(todo => todo.done);
      case 'Deleted':
        return todos.filter(todo => todo.deleted);
      case 'All':
      default:
        return todos;
    }
  };

  const onFilterBtnSelected = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <div className="container bg-gray-100 mt-5 mx-auto p-4 w-1/2 shadow-2xl rounded">
      <h1 className="text-3xl font-bold text-center text-sky-800 mb-2">Todo List App</h1>
      <TodoForm addTodo={addToList} />
      <FilterButtons filterBtnSelected={onFilterBtnSelected} filter={filter}/>
      <TodoList
        todos={filteredList()}
        handleDelete={markAsDeleted} 
        markAsCompleted={markAsCompleted}
      />
    </div>
  );
};

export default App;
