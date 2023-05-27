import TodoItem from "./TodoItem";

export default function TodoList({ tasks, dispatch }) {
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <TodoItem task={task} dispatch={dispatch} />
        </li>
      ))}
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_ALL",
          })
        }
        style={{ marginLeft: 15 }}
      >
        Remove all todos
      </button>
    </>
  );
}
