import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { styled } from "@mui/system";

interface ConfirmationModelProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

const CustomButton = styled(Button)({
  backgroundColor: 'orange',
  color: 'white',
  padding: '4px 12px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: 'darkorange',
  },
});

const ConfirmationModel: React.FC<ConfirmationModelProps> = ({ open, onClose, onConfirm, title, description }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className="text-red-500">
        <p>{description}</p>
      </DialogContent>
      <DialogActions>
        <CustomButton onClick={onClose}>
          Cancel
        </CustomButton>
        <CustomButton onClick={onConfirm}>
          Confirm
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModel;
