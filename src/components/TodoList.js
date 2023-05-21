import TodoItem from "./TodoItem";

export default function TodoList({ tasks, dispatch }) {
	return (
		<>
			{tasks.map(task => (
				<li key={task.id}>
					<TodoItem 
						task={task}
						dispatch={dispatch}
					/>
				</li>
			))}
			<button onClick={() =>
				tasks.map((task) =>
			  		dispatch({
						type: "DELETE_TODO",
						taskId: task.id,
			  		})
				)
			}
		  	style={{ marginLeft: 18 }}>
		  		Remove all todos
			</button>
	  </>
	);
}
