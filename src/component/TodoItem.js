import './TodoItem.css';
const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox-col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      </div>
      <div className="title-col">{content}</div>
      <div className="date-col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn-col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
