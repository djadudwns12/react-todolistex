import { useState } from 'react';
import './TodoEditor.css';

const ToDoEditor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const onSumit = () => {
    onCreate(content);
  };

  return (
    <div className="ToDoEditor">
      <h4>새로운 Todo 작성하기 🧨</h4>
      <div className="editor_wrapper">
        <input
          type="text"
          placeholder="새로운 할일..."
          onChange={onChangeContent}
          value={content}
        />
        <button onClick={onSumit}>추가 버튼</button>
      </div>
    </div>
  );
};

export default ToDoEditor;
