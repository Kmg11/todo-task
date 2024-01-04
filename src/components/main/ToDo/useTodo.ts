import { useState } from "react";
import { ITask } from "../../../interfaces";

const LS_TASKS_KEY = "tasks";
const LS_TASKS_INDEX_KEY = "taskIndex";

export type FilterType = "all" | "completed" | "uncompleted";

interface ITasksState {
	originalTasks: ITask[];
	showedTasks: ITask[];
	index: number;
	filterType: FilterType;
}

export const useToDo = () => {
	const [tasks, setTasks] = useState<ITasksState>({
		originalTasks: JSON.parse(localStorage.getItem(LS_TASKS_KEY) || "[]"),
		showedTasks: JSON.parse(localStorage.getItem(LS_TASKS_KEY) || "[]"),
		index: JSON.parse(localStorage.getItem(LS_TASKS_INDEX_KEY) || "1"),
		filterType: "all",
	});

	const setTasksInLocalStorage = (tasks: ITask[]) => {
		localStorage.setItem(LS_TASKS_KEY, JSON.stringify(tasks));
	};

	const setTaskIndexInLocalStorage = (index: number) => {
		localStorage.setItem(LS_TASKS_INDEX_KEY, JSON.stringify(index));
	};

	const filterTasksArray = (tasks: ITask[], type: FilterType) => {
		return tasks.filter((task) =>
			type === "all" ? true : type === "completed" ? task.isDone : !task.isDone
		);
	};

	const createTask = (text: ITask["text"]) => {
		setTasks((prev) => {
			const newTasks = [
				...prev.originalTasks,
				{ id: prev.index, text, isDone: false },
			];

			setTasksInLocalStorage(newTasks);
			setTaskIndexInLocalStorage(prev.index + 1);

			return {
				...prev,
				originalTasks: newTasks,
				index: prev.index + 1,
				showedTasks: filterTasksArray(newTasks, prev.filterType),
			};
		});
	};

	const deleteTask = (id: ITask["id"]) => {
		setTasks((prev) => {
			const newTasks = prev.originalTasks.filter((task) => task.id !== id);
			setTasksInLocalStorage(newTasks);

			return {
				...prev,
				originalTasks: newTasks,
				showedTasks: filterTasksArray(newTasks, prev.filterType),
			};
		});
	};

	const updateTask = (task: ITask) => {
		setTasks((prev) => {
			const newTasks = prev.originalTasks.map((prevTask) =>
				prevTask.id === task.id ? task : prevTask
			);

			setTasksInLocalStorage(newTasks);

			return {
				...prev,
				originalTasks: newTasks,
				showedTasks: filterTasksArray(newTasks, prev.filterType),
			};
		});
	};

	const filterTasks = (type: FilterType) => {
		setTasks((prev) => {
			const showedTasks = filterTasksArray(prev.originalTasks, type);
			return { ...prev, showedTasks, filterType: type };
		});
	};

	return { tasks, createTask, deleteTask, updateTask, filterTasks };
};
