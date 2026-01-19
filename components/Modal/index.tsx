"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

type ModalProps = {
  openDialog: boolean;
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
  title?: string;
  message?: string;
  cancelButtonText?: string;
  confirmButtonText?: string;
  isLoading?: boolean;
};

const Modal = ({
  openDialog,
  handleConfirmDelete,
  handleCancelDelete,
  title = "Delete Product",
  message = "Are you sure you want to delete this product? This action cannot be undone.",
  cancelButtonText = "Cancel",
  confirmButtonText = "Delete",
  isLoading = false,
}: ModalProps) => {
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleCancelDelete}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
        disableEscapeKeyDown={isLoading}
        slotProps={{
          paper: {
            sx: { borderRadius: "20px" },
          },
        }}
      >
        <DialogTitle id="delete-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleCancelDelete} disabled={isLoading}>
            {cancelButtonText}
          </Button>
          <Button
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
            disabled={isLoading}
          >
            {confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
