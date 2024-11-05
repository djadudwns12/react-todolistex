import { useRef, useState } from 'react';
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
    createdDate: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isDone: true,
    content: '빨래하기',
    createdDate: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: '청소하기',
    createdDate: new Date().toLocaleDateString(),
  },
];

function App() {
  // 할일 아이템의 상태를 관리할 state 생성
  const [todo, setTodo] = useState(mokTodo);

  const idRef = useRef(3); // ReactDOM객체에 접근하기 위해 사용하는 hooks

  // 할일 아이템 추가
  const onCreate = (content) => {
    // props로 보내줌
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().toLocaleDateString(),
    }; // 추가될 할일 객체
    setTodo([newItem, ...todo]); // 새로운 배열에 들어가서 값이 변경되었다고 판단 // setter를 이용하여 새로운 배열을 생성해주었다.(주소값 변함)
    idRef.current++; // idRef의 값을 +1하여준다.
  };
  // 할일 아이템 수정하는 함수
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) => {
        if (targetId === item.id) {
          // 수정되는 할일 객체라면 isDone을 반전하여 새로운 배열에 추가되도록
          return { ...item, isDone: !item.isDone };
        } else {
          return item; // 수정되는 할일이 아니라면 그대로 새로운 배열에 추가
        }
      }),
    );
  };

  return (
    <div className="App">
      <h2>ToDoList</h2>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
