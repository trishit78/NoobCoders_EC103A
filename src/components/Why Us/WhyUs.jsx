import React from "react";
import Header2 from "../Header/Header2";
import "./WhyUs.css";

import gym1 from "../../assets/gym1.jpg";
import gym2 from "../../assets/gym2.jpg";
import gym3 from "../../assets/gym3.jpg";
import gym4 from "../../assets/gym4.jpg";
import gym5 from "../../assets/gym5.jpg";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import Footer from "../Footer/Footer";

import { useState ,useEffect} from "react";


import Preloader from '../Preloader/Preloader';

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function WhyUs() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (

    <>
{loading && <Preloader/>}

    
    <div>
      <Header2></Header2>
      <div className="reasons mt-8 mb-12 ">
        <div className="left-r">
          <img src={gym1} alt="" className="h-64" />
          <img src={gym2} alt="" className="h-64" />
          <img src={gym3} alt="" className="h-64" />
          <img src={gym4} alt="" className="h-64" />
          <img src={gym5} alt="" className="h-64" />
        </div>
        <div className="right-r ">
          <h1 className="mb-4">SOME REASONS</h1>
          {/* <div className='flex flex-row space-x-4 '> */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <span className="text-6xl font-bold text-white">WHY </span>
            <span className="stroke-text text-6xl font-bold">CHOOSE</span>
            <span className="text-6xl font-bold stroke-text  text-white">
              US
            </span>
          </div>

          <div className="details-r mt-8">
            <div className="space-x-2">
              <CheckCircleOutlineIcon
                fontSize="large"
                style={{ color: "orange" }}
              />
              <span className="text-2xl text-white">
                OVER 140+ EXPERT COACHS
              </span>
            </div>
            <div className="space-x-2">
              <CheckCircleOutlineIcon
                fontSize="large"
                style={{ color: "orange" }}
              />
              <span className="text-2xl text-white">
                TRAIN SMARTER AND FASTER THAN BEFORE
              </span>
            </div>
            <div className="space-x-2">
              <CheckCircleOutlineIcon
                fontSize="large"
                style={{ color: "orange" }}
              />
              <span className="text-2xl text-white">
                FREE PROGRAM FOR NEW MEMBER
              </span>
            </div>
            <div className="space-x-2">
              <CheckCircleOutlineIcon
                fontSize="large"
                style={{ color: "orange" }}
              />
              <span className="text-2xl text-white">RELAIBLE PARTNERS</span>
            </div>
          </div>
          <div className="mt-8">
            <span className="text-3xl text-orange-300 italic   ">
              Our Partners :{" "}
            </span>
            <div className="flex flex-row align-center mt-4 space-x-3">
              <img src={nike} alt="" />
              <img src={adidas} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </>

    
  );
}

export default WhyUs;
