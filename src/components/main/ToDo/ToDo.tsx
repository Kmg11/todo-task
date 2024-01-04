import { CreateOrUpdateTaskForm } from "./CreateOrUpdateTaskForm/CreateOrUpdateTaskForm";
import { TasksList } from "./TasksList/TasksList";
import { useToDo } from "./useTodo";
import { Box } from "@mui/material";

export const ToDo = () => {
	const { tasks, createTask, updateTask, deleteTask } = useToDo();

	return (
		<Box
			component="section"
			width="100%"
			display="flex"
			flexDirection="column"
			gap={2}
		>
			<CreateOrUpdateTaskForm createTask={createTask} type="create" />

			<TasksList
				tasks={tasks}
				deleteTask={deleteTask}
				updateTask={updateTask}
			/>
		</Box>
	);
};
