import { useState } from "react";

export default function TodoItem({ task, dispatch }) {
	const [isEditing, setIsEditing] = useState(false);
	let taskContent;

	if (isEditing) {
		taskContent = (
			  <>
				<input
					value={task.text}
					onChange={e => {
						dispatch({
							type: 'UPDATE_TODO',
							task: { ...task, text: e.target.value },
						});
					}}
				/>
				<button onClick={() => 
					setIsEditing(false)}
					style={{ margin: 5 }}
				>
					Save
				</button>
			</>
		);
	} else {
		taskContent = (
			  <>
				{task.text}
				<button onClick={() => 
					setIsEditing(true)}
					style={{ margin: 5 }}
				>
					Edit
				</button>
			</>
		);
	}	

	return (
		<>
			<input onChange={() =>
				dispatch({
					type: 'UPDATE_TODO',
					task: { ...task, done: !task.done },
				})
			}
				type="checkbox"
				checked={task.done}
			/>
			{taskContent}
			<button onClick={() =>
				dispatch({
					type: 'DELETE_TODO',
					taskId: task.id,
				})
			}>
				Delete
			</button>	
		</>		
	);
}
