import { useState } from "react";
import { ITask } from "../../../../interfaces";
import { TextField, Button, Box } from "@mui/material";

interface CreateTaskFormProps {
	type: "create";
	createTask: (text: ITask["text"]) => void;
	task?: never;
	updateTask?: never;
}

interface UpdateTaskFormProps {
	type: "update";
	task: ITask;
	updateTask: (task: ITask) => void;
	createTask?: never;
}

type CreateOrUpdateTaskFormProps = CreateTaskFormProps | UpdateTaskFormProps;

export const CreateOrUpdateTaskForm = ({
	type,
	...props
}: CreateOrUpdateTaskFormProps) => {
	const [task, setTask] = useState(props.task?.text ?? "");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (task === "") return;

		if (type === "create") props.createTask?.(task);

		if (type === "update" && props.task) {
			props.updateTask?.({ ...props.task, text: task });
		}

		setTask("");
	};

	return (
		<Box
			component="form"
			display="flex"
			alignItems="center"
			gap={1}
			flexDirection="column"
			onSubmit={handleSubmit}
		>
			<TextField
				id="task"
				label="Task"
				variant="outlined"
				size="small"
				fullWidth
				value={task}
				onChange={(e) => setTask(e.target.value)}
				autoFocus
			/>

			<Button type="submit" variant="contained" color="primary" fullWidth>
				{type === "create" ? "Create" : "Update"} Task
			</Button>
		</Box>
	);
};
