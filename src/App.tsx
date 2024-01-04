import { ToDo } from "./components";
import { Box, Container, Typography } from "@mui/material";

export function App() {
	return (
		<Container maxWidth="sm">
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				gap={2}
				py={5}
				px={4}
			>
				<Typography
					variant="h4"
					component="h2"
					color={(t) => t.palette.primary.main}
					textTransform="uppercase"
				>
					ToDo
				</Typography>

				<ToDo />
			</Box>
		</Container>
	);
}
