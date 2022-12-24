import React, { useState } from "react";
import "../src/App.css";
import ToDoForm from "./ToDoForm";
import TodoItem from "./TodoItem";

const App = () => {
  const [todo, setTodo] = useState([]);

  function addTodo(text) {
    let id = 1;

    if (todo.length > 0) {
      id = todo[0].id + 1;
    }

    const newTodo = {
      text: text,
      id: id,
      key: id,
    };
    setTodo([newTodo, ...todo]);
  }
  console.log(todo);

  const handleDelete = (id) => {
    const newTodos = todo.filter((el) => el.id !== id);

    setTodo(newTodos, ...todo);
  };

  const handleComplete = (id) => {
    const updatedTodos = todo.map((el) => {
      if (el.id == id) {
        el.complete = !el.complete;
      }
      return el;
    });
    setTodo(updatedTodos);
  };

  const elements = todo.map((el) => (
    <TodoItem
      text={el.text}
      id={el.id}
      key={el.key}
      todo={el}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      complete={el.complete}
    />
  ));

  return (
    <div className="App">
      <div className="form">
        <h1 className="title">Todo List</h1>
        <ToDoForm addTodo={addTodo} />
        {elements}
      </div>
    </div>
  );
};

export default App;
