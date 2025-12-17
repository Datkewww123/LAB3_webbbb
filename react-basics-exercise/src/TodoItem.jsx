function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ flex: 1, marginLeft: '8px' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
