import { useEffect, useRef } from "react";

export default function AddTodo({ dispatch }) {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		dispatch({
			type: 'ADD_TODO',
			text: (formData.get('text'))
		});
	}

	return (
		<form style={{ margin: 10 }} onSubmit={handleSubmit}>
			<input name="text" type="text" ref={inputRef}/>
		</form>
	);
}
