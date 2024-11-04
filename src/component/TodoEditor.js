import { useRef, useState } from 'react';
import './TodoEditor.css';

const ToDoEditor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const onSumit = () => {
    if (!content) {
      alert('할일 내용을 입력하세요.');
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSumit();
    }
  };

  return (
    <div className="ToDoEditor">
      <h4>새로운 Todo 작성하기 🧨</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          type="text"
          placeholder="새로운 할일..."
          onChange={onChangeContent}
          value={content}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSumit}>추가 버튼</button>
      </div>
    </div>
  );
};

export default ToDoEditor;
