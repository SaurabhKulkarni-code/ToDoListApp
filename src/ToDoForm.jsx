import { useState } from "react";

const ToDoForm = (props) => {
  const [textTodo, setTextTodo] = useState("");

  function text(e) {
    setTextTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(textTodo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={text} />
      <button>Add ToDo</button>
    </form>
  );
};

export default ToDoForm;
