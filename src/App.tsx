import React, {useState} from 'react';

import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm} from './AddTodoForm'

const initialtodos: Todo[] = [
  {
    text: "Walk the cat",
    complete: true, 
  }, 

  {
    text: "Workout", 
    complete: false,
  }


]; 

const App = () => {


  const [todos, setTodos] = useState(initialtodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo){
        return{
          ...todo, 
          complete: !todo.complete
        };
      }
      return todo; 
    });
    setTodos(newTodos); 
  };

  const addTodo: AddTodo = (text: string)=> {
    const newTodo = {text, complete: false}; 
    setTodos([...todos, newTodo]); 

  }

  return(

    // <h1>hello, friend</h1>

    // <TodoListItem/>

    <>

    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm addTodo={addTodo} />

    </>



  );

};

export default App;

















