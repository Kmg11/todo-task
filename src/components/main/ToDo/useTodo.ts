import { useState } from "react";
import { ITask } from "../../../interfaces";

export const useToDo = () => {
	const [tasks, setTasks] = useState<ITask[]>([
		{ id: 1, text: "Learn React", isDone: false },
		{ id: 2, text: "Learn TypeScript", isDone: false },
		{ id: 3, text: "Learn Redux", isDone: true },
	]);
	const [taskIndex, setTaskIndex] = useState(1);

	const addTask = (text: ITask["text"]) => {
		setTasks((prev) => [...prev, { id: taskIndex, text, isDone: false }]);
		setTaskIndex((prev) => prev + 1);
	};

	const deleteTask = (id: ITask["id"]) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	const updateTask = (task: ITask) => {
		setTasks((p) => p.map((pTask) => (pTask.id === task.id ? task : pTask)));
	};

	return { tasks, addTask, deleteTask, updateTask };
};
