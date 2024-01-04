import { useState } from "react";
import { ITask } from "../../../interfaces";

const LS_TASKS_KEY = "tasks";
const LS_TASKS_INDEX_KEY = "taskIndex";

export const useToDo = () => {
	const [tasks, setTasks] = useState<ITask[]>(
		JSON.parse(localStorage.getItem(LS_TASKS_KEY) || "[]")
	);
	const [taskIndex, setTaskIndex] = useState<number>(
		JSON.parse(localStorage.getItem(LS_TASKS_INDEX_KEY) || "1")
	);

	const setTasksInLocalStorage = (tasks: ITask[]) => {
		localStorage.setItem(LS_TASKS_KEY, JSON.stringify(tasks));
	};

	const setTaskIndexInLocalStorage = (index: number) => {
		localStorage.setItem(LS_TASKS_INDEX_KEY, JSON.stringify(index));
	};

	const createTask = (text: ITask["text"]) => {
		setTasks((prev) => {
			const newTasks = [...prev, { id: taskIndex, text, isDone: false }];
			setTasksInLocalStorage(newTasks);

			return newTasks;
		});

		setTaskIndex((prev) => prev + 1);
		setTaskIndexInLocalStorage(taskIndex + 1);
	};

	const deleteTask = (id: ITask["id"]) => {
		setTasks((prev) => {
			const newTasks = prev.filter((task) => task.id !== id);
			setTasksInLocalStorage(newTasks);

			return newTasks;
		});
	};

	const updateTask = (task: ITask) => {
		setTasks((p) => {
			const newTasks = p.map((pTask) => (pTask.id === task.id ? task : pTask));
			setTasksInLocalStorage(newTasks);

			return newTasks;
		});
	};

	return { tasks, createTask, deleteTask, updateTask };
};
