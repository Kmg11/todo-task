import { Box, Button } from "@mui/material";
import { FilterType } from "../useTodo";

interface TasksFilterProps {
	filterTasks: (type: "all" | "completed" | "uncompleted") => void;
	filterType: FilterType;
}

export const TasksFilter = ({ filterTasks, filterType }: TasksFilterProps) => {
	const options: FilterType[] = ["all", "completed", "uncompleted"];

	return (
		<Box
			display="flex"
			alignItems="center"
			gap={2}
			justifyContent="center"
			flexWrap="wrap"
		>
			{options.map((option) => (
				<Button
					key={option}
					variant="text"
					color={option === filterType ? "primary" : "inherit"}
					onClick={() => filterTasks(option)}
				>
					{option}
				</Button>
			))}
		</Box>
	);
};
