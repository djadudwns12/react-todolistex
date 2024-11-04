import './TodoEditor.css';

const ToDoEditor = () => {
  return (
    <div className="ToDoEditor">
      <h4>새로운 Todo 작성하기 🧨</h4>
      <div className="editor_wrapper">
        <input type="text" placeholder="새로운 할일" />
        <button>추가 버튼</button>
      </div>
    </div>
  );
};

export default ToDoEditor;
