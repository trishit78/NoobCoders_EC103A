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
            Health Fitness
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Health is a state of complete physical, mental and social well-being
            and not merely absence of disease Fitness is an ability to execute
            daily functional activities with optimal performance, endurance, and
            strength to manage minimalist of disease, fatigue, stress and
            reduced sedentary behavior. In the modern era with advancement in
            technology, erosion of physical activity has drastically led to
            retardation in health and fitness. Hoods of luxurious and
            competition among students for scores/grades and professionals for
            promotions/incentives/benefits have deviated people from
            concentrating towards their health and putting it secondary. In
            2016, across the globe, prevalence of physical inactivity was
            estimated at 27.5%, among adult population. To support further, in
            June 2018, WHO reported, 1 in five adults, and 4 of five adolescents
            to pose reduced physical activity.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Modal2;
