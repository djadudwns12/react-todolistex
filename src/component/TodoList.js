import TodoItem from './TodoItem';
import './TodoList.css';
const TodoList = ({ todo }) => {
  // 구조분해할당
  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        className="searchBar"
        placeholder="검색어를 입력하세요..."
        type="text"
      />
      <div className="list_wrapper">
        {todo.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
