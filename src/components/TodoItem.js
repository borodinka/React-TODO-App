import { useState } from "react";

export default function TodoItem({ task, dispatch }) {
  const toggleTodoCompleted = () =>
    dispatch({
      type: "UPDATE_TODO",
      task: { ...task, done: !task.done },
    });

  const handleDeleteTodo = () =>
    dispatch({
      type: "DELETE_TODO",
      taskId: task.id,
    });

  return (
    <>
      <input
        onChange={toggleTodoCompleted}
        type="checkbox"
        checked={task.done}
      />
      <TaskContent task={task} dispatch={dispatch} />
      <button onClick={handleDeleteTodo}>Delete</button>
    </>
  );
}

function TaskContent({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TODO",
              task: { ...task, text: e.target.value },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)} style={{ margin: 5 }}>
          Save
        </button>
      </>
    );
  }
  return (
    <>
      {task.text}
      <button onClick={() => setIsEditing(true)} style={{ margin: 5 }}>
        Edit
      </button>
    </>
  );
}
