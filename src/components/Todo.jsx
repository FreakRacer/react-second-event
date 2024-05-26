function Todo({ todo, toggleText, removeText }) {
  return (
    <div key={todo.id} className="item-todo">
      <div
        className={todo.completed ? "item-text strike" : "item-text"}
        onClick={() => toggleText(todo.id)}
      >
        {todo.text}
      </div>
      <div className="item-delete" onClick={() => removeText(todo.id)}>
        x
      </div>
    </div>
  );
}

export default Todo;
