import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
const TodoList = ({ todo, onUpdate, onDelete }) => {
  // 구조분해할당
  const [search, setSearch] = useState('');
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어가 입력되면 todo배열에서 각요소를 대상으로 할일의 내용에 seach문자열이 포함되어 있는 요소만 filter에서 추출하고 ,포함되어 있는 새로운 배열을 반환한다.
  const getSearchResult = () => {
    return search === ''
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase()),
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        className="searchBar"
        placeholder="검색어를 입력하세요..."
        type="text"
        onChange={onChangeSearch}
        value={search}
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
