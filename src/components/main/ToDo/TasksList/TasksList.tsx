import { useState } from "react";
import { ITask } from "../../../../interfaces";
import { Box, Typography } from "@mui/material";
import { Task } from "./Task/Task";
import { UpdateTaskModel } from "./UpdateTaskModel/UpdateTaskModel";

interface TasksListProps {
	tasks: ITask[];
	deleteTask: (id: ITask["id"]) => void;
	updateTask: (task: ITask) => void;
}

export const TasksList = ({
	tasks,
	deleteTask,
	updateTask,
}: TasksListProps) => {
	const [updateTaskModel, setUpdateTaskModel] = useState<ITask | null>(null);

	const openUpdateTaskModel = (task: ITask) => setUpdateTaskModel(task);
	const closeUpdateTaskModel = () => setUpdateTaskModel(null);

	return (
		<Box
			component="section"
			width="100%"
			display="flex"
			flexDirection="column"
			gap={2}
		>
			{tasks.length === 0 && (
				<Typography
					variant="body2"
					component="span"
					p={2}
					sx={(t) => ({ backgroundColor: t.palette.grey[900] })}
					textAlign="center"
				>
					No tasks
				</Typography>
			)}

			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					openUpdateTaskModel={openUpdateTaskModel}
				/>
			))}

			<UpdateTaskModel
				updateTaskModel={updateTaskModel}
				closeUpdateTaskModel={closeUpdateTaskModel}
				updateTask={updateTask}
			/>
		</Box>
	);
};
