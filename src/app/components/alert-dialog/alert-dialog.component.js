import React from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const AlertDialogSlide = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>,
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({ title, text, isDialogOpen }) => {
	return (
		<Dialog
			open={isDialogOpen}
			TransitionComponent={AlertDialogSlide}
			keepMounted
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle
				align="center"
				sx={{ fontSize: 18, fontWeight: '600', color: '#0c4c94' }}
			>
				{title}
			</DialogTitle>
			<DialogContent>
				{text && (
					<DialogContentText sx={{ fontSize: 14 }} align="center">
						{text}
					</DialogContentText>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default AlertDialog;
