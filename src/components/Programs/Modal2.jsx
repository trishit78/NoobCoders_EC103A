import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Modal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button className="mx-1 text-orange-500 mt-2" onClick={handleOpen}>
        READ MORE ...
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cardio Training
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            With an established cardio plan that fits into your lifestyle, you
            might experience health benefits, such as: 1. Heart health: This
            includes reduced blood pressure, a lower risk of heart disease, and
            overall improved heart health. 2. Longevity: Some scientists assert
            that regular cardiovascular exercise can prolong your life. By
            making your heart and lungs stronger, you improve your overall
            fitness levels and cardiovascular health—this means your heart has a
            lower measure of beats per minute (BPM) than it would if you
            otherwise led a sedentary lifestyle), which suggests your body has
            an improved ability to handle different stressors. 3. Mental health:
            There are emotional and mental benefits to doing regular cardio.
            Working out improves blood flow throughout your body, including in
            your brain, which can improve your cognitive functions. Working out
            also releases endorphins—naturally occurring chemicals in your body
            that can make you feel good.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Modal2;
