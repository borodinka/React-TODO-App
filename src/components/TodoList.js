import { useState } from "react";

export default function TodoList({ tasks, dispatch }) {
	const [editingTaskId, setEditingTaskId] = useState(null);
	const [editedText, setEditedText] = useState("");
  
	const handleEdit = (taskId) => {
	  setEditingTaskId(taskId);
	  const task = tasks.find((t) => t.id === taskId);
	  setEditedText(task.text);
	};
  
	const handleSave = () => {
	  dispatch({
		type: "UPDATE_TODO",
		task: { id: editingTaskId, text: editedText },
	  });
	  setEditingTaskId(null);
	};

	return (
	  <>
		{tasks.map((task) => (
		  <li key={task.id}>
			{editingTaskId === task.id ? (
			  <>
				<input
				  type="text"
				  value={editedText}
				  onChange={(e) => setEditedText(e.target.value)}
				/>
				<button onClick={handleSave} style={{ margin: 5 }}>Save</button>
			  </>
			) : (
			  <>
				<input
				  onChange={() =>
					dispatch({
					  type: "UPDATE_TODO",
					  task: { ...task, done: !task.done },
					})
				  }
				  type="checkbox"
				  checked={task.done}
				/>
				{task.text}
				<button
				  onClick={() =>
					dispatch({
					  type: "DELETE_TODO",
					  taskId: task.id,
					})
				  }
				  style={{ margin: 5 }}
				>
				  Delete
				</button>
				<button onClick={() => handleEdit(task.id)}>
				  Edit
				</button>
			  </>
			)}
		  </li>
		))}
		<button
		  onClick={() =>
			tasks.map((task) =>
			  dispatch({
				type: "DELETE_TODO",
				taskId: task.id,
			  })
			)
		  }
		  style={{ marginLeft: 15 }}
		>
		  Remove all todos
		</button>
	  </>
	);
}
