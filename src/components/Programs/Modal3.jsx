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
            Fat Burning
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The fat burning zone theory seeks to help adherents lose weight by
            tapping on the body's fat storage rather than glycogen. They argue
            that the body burns a greater percentage of fat with lower-intensity
            exercises than at higher intensities because the body does not
            require 'fast energy' from glycogen. As such, this theory promotes
            longer and lower-intensity cardio workouts that maintain your heart
            rate within the 'fat burning zone'. However, that is a bit of a
            misconception. While it is true that the body burns fat during
            low-intensity workouts, the fat burning rate remains low and you
            have to exercise longer to burn the same amount of calories you
            would at higher intensities
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Modal2;
