import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
//  mockup데이터를 널어주기
const mokTodo = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부하기',
    createdDate: new Date().getDate(),
  },
  {
    id: 1,
    isDone: true,
    content: '빨래하기',
    createdDate: new Date().getDate(),
  },
  {
    id: 2,
    isDone: false,
    content: '청소하기',
    createdDate: new Date().getDate(),
  },
];

function App() {
  // 할일 아이템의 상태를 관리할 state 생성
  const [todo, setTodo] = useState(mokTodo);

  return (
    <div className="App">
      <h2>ToDoList</h2>
      <div>
        <Header />
      </div>
      <div>
        <TodoEditor />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
