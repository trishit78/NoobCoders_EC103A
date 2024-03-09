import "./App.css";
// import Footer from './components/Footer/Footer';
import Hero from "./components/Herosection/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programs from "./components/Programs/Programs";
import { useState ,useEffect} from "react";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyUs from "./components/Why Us/WhyUs";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";

import SearchExercises from "./components/SearchExercises/SearchExercises";
import Exercises from "./components/SearchExercises/Exercises";
import Form1 from "./components/Form/Form1";


import Preloader from "./components/Preloader/Preloader";
function App() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div className="App">

{ 
  loading ? <Preloader/>  : (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Hero} />
      <Route path="/program" Component={Programs} />
      <Route path="/plans" Component={Plans} />
      <Route path="/testimonials" Component={Testimonials} />
      <Route path="/whyus" Component={WhyUs} />
      <Route path="/signin" Component={SignIn} />
      <Route path="/signup" Component={SignUp} />
      <Route path="/form" Component={Form1} />

      <Route path="/exercise" Component={Exercises} />
    </Routes>
  </BrowserRouter>
  )
}

      
    </div>
  );
}

export default App;
