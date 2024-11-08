import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type="checkBox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
