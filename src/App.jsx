import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleForm = (newTodo) => {
    setTodos([
      ...todos,
      {
        value: newTodo,
        checked: false,
        date: new Date(),
      },
    ]);
  };

  const handleChecked = (index) => {
    let tempArr = [...todos];
    tempArr[index].checked = !tempArr[index].checked;
    setTodos(tempArr);
  };

  const handleDelete = (index) => {
    let tempArr = [...todos];
    tempArr.splice(index, 1)
    setTodos(tempArr);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form handleForm={handleForm} />
      <List
        todos={todos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;