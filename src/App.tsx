import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState<any>(['dd']);
  const [todo1, setTodo1] = useState<any>('');
  useEffect(()=>{
    fetch("/api/todos")
    .then(res=>res.json())
    .then((data:any) => {
      setTodos(data);
      console.log(data)
    });
}, [])
const handleSubmit = (event:any) => {
  event.preventDefault();
  fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo1)
  }).then((res) => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data:any) => {
        setTodos(data)
      });
  });
};
  return (
    <div className="App">
         <h2>할일 목록</h2>

        <ul>
          {todos.map((todo:any, idx:any) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          name="todo"
          placeholder="새로운 할일"
          // disabled={loading}
          value={todo1}
          onChange={({ target: { value } }) => setTodo1(value)}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSubmit}
        >
          add
        </a>
    </div>
  );
}

export default App;
