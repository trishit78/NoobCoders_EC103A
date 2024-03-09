import React from "react";
import { Copy, ArrowRight } from "lucide-react";
import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";


import { useState ,useEffect} from "react";


import Preloader from '../Preloader/Preloader';

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

function Programs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
    {loading && <Preloader/>}
        
        <div>
        <Header2></Header2>

        <div className="flex flex-col md:flex-row md:space-x-4 md:justify-center">
          <h1 className="text-5xl mt-16 text-center text-white font-bold text-bold stroke-text ">
            EXPLORE{" "}
          </h1>
          <h1 className="text-5xl mt-16 text-center text-white font-bold text-bold  ">
            {" "}
            OUR PROGRAMS{" "}
          </h1>
          <h1 className="text-5xl mt-16 text-center text-white font-bold text-bold stroke-text ">
            {" "}
            TO SHAPE YOU
          </h1>
        </div>
  
        <div className="mx-auto max-w-7xl px-2 lg:px-8 mt-24 mb-48 ">
          <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <FitnessCenterIcon fontSize="large" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-orange-500 ">
                Strength Training
              </h3>
              <p className="mt-4 text-lg text-white">
                In this program you are trained to improve your strength through
                many exercises
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
              >
                <div>
                  <Button
                    className="mx-1 text-orange-500 mt-2"
                    onClick={handleOpen}
                  >
                    READ MORE ...
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Strength Training
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Muscular hypertrophy. Also known as muscle building, this
                        type of strength training uses moderate-to-heavy weights
                        to stimulate muscle growth. Muscular endurance. This
                        refers to your muscles’ ability to sustain exercise for a
                        period of time. Training to increase muscular endurance
                        usually involves high reps using light weights or body
                        weight. Circuit training. During this form of full-body
                        conditioning, you cycle through various exercises with
                        little to no rest between them. Maximum muscular strength.
                        This type of exercise involves low reps (usually 2–6) and
                        heavy weights to improve your overall strength. It’s best
                        reserved for experienced exercisers who have mastered
                        their form. Explosive power. This training combines power
                        and speed to improve your power output. It’s usually
                        employed among trained athletes to improve their ability
                        to perform explosive movements in their sport.
                      </Typography>
                    </Box>
                  </Modal>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <DirectionsRunIcon fontSize="large" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-orange-500">
                Cardio Training
              </h3>
              <p className="mt-4 text-lg text-white">
                In this program you are trained to do sequential moves in range of
                20-30 minutes
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
              >
                <div>
                  <Modal2></Modal2>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <LocalFireDepartmentIcon fontSize="large" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-orange-500">
                Fat Burning
              </h3>
              <p className="mt-4 text-lg text-white">
                This program is suitable for those who want to burn their fat and
                loose weight
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
              >
                <div>
                  <Modal3></Modal3>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <MonitorHeartIcon fontSize="large" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-orange-500">
                Health Fitness
              </h3>
              <p className="mt-4 text-lg text-white">
                This program is designed for those who want to do exercise for
                overall fitness of body
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
              >
                <div>
                  <Modal4></Modal4>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
        </>
      )
    



    
  
}
export default Programs;
