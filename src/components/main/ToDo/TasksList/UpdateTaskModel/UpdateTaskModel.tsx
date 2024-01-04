import { IconButton, Box, Modal, Typography } from "@mui/material";
import { ITask } from "../../../../../interfaces";
import { CreateOrUpdateTaskForm } from "../../CreateOrUpdateTaskForm/CreateOrUpdateTaskForm";
import CloseIcon from "@mui/icons-material/Close";

interface UpdateTaskModelProps {
	updateTaskModel: ITask | null;
	closeUpdateTaskModel: () => void;
	updateTask: (task: ITask) => void;
}

export const UpdateTaskModel = ({
	updateTaskModel,
	closeUpdateTaskModel,
	updateTask,
}: UpdateTaskModelProps) => {
	return (
		<Modal
			open={updateTaskModel !== null}
			onClose={closeUpdateTaskModel}
			aria-labelledby="modal-modal-title"
			sx={{
				p: 2,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={(t) => ({
					maxWidth: 600,
					minWidth: 300,
					bgcolor: t.palette.grey[900],
					boxShadow: 24,
					p: 3,
					display: "flex",
					flexDirection: "column",
					gap: 2,
				})}
			>
				<Box
					component="header"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					gap={1}
				>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Update task
					</Typography>

					<IconButton size="small" onClick={closeUpdateTaskModel}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</Box>

				{updateTaskModel && (
					<CreateOrUpdateTaskForm
						type="update"
						task={updateTaskModel}
						updateTask={(task) => {
							updateTask(task);
							closeUpdateTaskModel();
						}}
					/>
				)}
			</Box>
		</Modal>
	);
};
