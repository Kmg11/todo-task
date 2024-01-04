import { CreateOrUpdateTaskForm } from "./CreateOrUpdateTaskForm/CreateOrUpdateTaskForm";
import { TasksFilter } from "./TasksFilter/TasksFilter";
import { TasksList } from "./TasksList/TasksList";
import { useToDo } from "./useTodo";
import { Box } from "@mui/material";

export const ToDo = () => {
	const { tasks, createTask, updateTask, deleteTask, filterTasks } = useToDo();

	return (
		<Box
			component="section"
			width="100%"
			display="flex"
			flexDirection="column"
			gap={2}
		>
			<CreateOrUpdateTaskForm createTask={createTask} type="create" />

			{tasks.originalTasks.length > 0 && (
				<TasksFilter filterTasks={filterTasks} filterType={tasks.filterType} />
			)}

			<TasksList
				tasks={tasks.showedTasks}
				deleteTask={deleteTask}
				updateTask={updateTask}
			/>
		</Box>
	);
};
