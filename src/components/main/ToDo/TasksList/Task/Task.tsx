import { ITask } from "../../../../../interfaces";
import { IconButton, Box, Typography, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TaskProps {
	task: ITask;
	deleteTask: (id: ITask["id"]) => void;
	openUpdateTaskModel: (task: ITask) => void;
	updateTask: (task: ITask) => void;
}

export const Task = ({
	task,
	deleteTask,
	openUpdateTaskModel,
	updateTask,
}: TaskProps) => {
	const handleChangeComplete = () => {
		updateTask({ ...task, isDone: !task.isDone });
	};

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			gap={1}
			p={2}
			sx={(t) => ({ backgroundColor: t.palette.grey[900] })}
		>
			<Box display="flex" alignItems="center" gap={0.5}>
				<Checkbox checked={task.isDone} onChange={handleChangeComplete} />

				<Typography
					variant="body1"
					noWrap={false}
					sx={{ textDecoration: task.isDone ? "line-through" : "none" }}
				>
					{task.text}
				</Typography>
			</Box>

			<Box display="flex" alignItems="center" gap={1}>
				<IconButton
					aria-label="edit"
					size="small"
					onClick={() => openUpdateTaskModel(task)}
				>
					<EditIcon fontSize="small" color="action" />
				</IconButton>

				<IconButton
					aria-label="delete"
					size="small"
					onClick={() => deleteTask(task.id)}
				>
					<DeleteIcon fontSize="small" color="error" />
				</IconButton>
			</Box>
		</Box>
	);
};
