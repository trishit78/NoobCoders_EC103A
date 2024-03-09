import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { isMotionComponent, motion } from "framer-motion";
import NumberCounter from "number-counter";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {signOutUser} from '../../firebase/firebase'

import { useContext } from "react";
import { UserContext } from "../context/userContext";
const Hero = () => {
  const transition = { type: "string", duration: "3" };
  const mobile = window.innerWidth <= 768 ? true : false;

  const {currentUser,setCurrentUser} = useContext(UserContext);

  console.log(currentUser)

  
  const signOutHandler = async ()=>{
    await signOutUser();
    
    setCurrentUser(null);
  }

  return (
    <div >
      <div className="hero" id="home">
        <div className="blur hero-blur"></div>

        <div className="left-h">
          <Header />

          {/* the best ad */}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={transition}
            />
            <span>the best fitness club in the town</span>
          </div>

          {/* Hero heading */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up to your life to fullest
              </span>
            </div>
          </div>

          {/* figures*/}
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={140} start={100} delay="4" preFix="+" />
              </span>
              <span>expert Coachs</span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={800} delay="4" preFix="+" />
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} start={0} delay="4" preFix="+" />
              </span>
              <span>fitness programs</span>
            </div>
          </div>

          {/* hero buttons */}
          <div className="hero-buttons">
            <>
            {/* {
              currentUser ? (
                <NavLink to="/signup" className="btn hover:bg-slate-400 ">
                  Sign out
                </NavLink>):
                <NavLink to="/signup" className="btn hover:bg-slate-400 ">
                  Get Started
                </NavLink>
                
            } */}
              <NavLink to="/form" className="btn hover:bg-slate-400 ">
                Get Started
              </NavLink>
            </>
            <>
              <NavLink to="/whyus" className="btn hover:bg-slate-500">
                Learn More
              </NavLink>
            </>
          </div>
        </div>

        <div className="right-h ">
          
            {
              currentUser ? (
                <Link
            to="/signup"
            className="btn  rounded hover:bg-gray-600 text-white "
            onClick={signOutHandler}
          >
            Sign Out
          </Link>
              ):(
                <Link
            to="/signup"
            className="btn  rounded hover:bg-gray-600 text-white "
          >
            Sign Up
          </Link>
              )
            }

          {/* <Link
            to="/signup"
            className="btn  rounded hover:bg-gray-600 text-white "
          >
            Join Now
          </Link> */}

          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "2rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero images */}

          <>
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img
              initial={{ right: "11rem" }}
              whileInView={{ right: "18rem" }}
              transition={transition}
              src={hero_image_back}
              alt=""
              className="hero-image-back"
            />
          </>

          {/* calories */}

          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "24rem" }}
            transition={transition}
            className="calories"
          >
            <img src={Calories} alt="" />
            <div className="mr-4">
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>

              {/* <div >
    <img 
        src='https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-1938811039.jpg' 
        alt="" 
        className="sticky2" 
        style={{ width: "60px", height: "60px" }} 
    />
</div> */}



      {mobile === true ? (
        <div className="mt-32 ">
          <Footer></Footer>
        </div>
      ) : (
        <div className="mt-2  ">
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Hero;
