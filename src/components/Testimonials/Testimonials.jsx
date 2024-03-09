import React, { useState, useRef, useEffect } from "react";
import "./testimonials.css"; // Import CSS file for styling
import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";

import Preloader from '../Preloader/Preloader';


const HorizontalInfiniteScroll = ({ data }) => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <>

{ loading && <Preloader/>}
      <Header2></Header2>
      <div>
        <h1 className="text-5xl text-center text-bold font-bold italic  pt-2 pb-2 text-orange-500">
          OUR HAPPY CUSTOMERS
        </h1>
      </div>
      <div
        ref={containerRef}
        className="horizontal-scroll-container   " // Apply class for styling
      >
        {data.map((item, index) => (
          <div key={index} className="scroll-item">
            <img
              src={item.photo}
              alt={`Photo of ${item.heading}`}
              className="testimonial-photo"
            />
            <p className="text-white">{item.paragraph}</p>
            <h3 className="text-orange-500">{item.heading}</h3>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

// Sample data for 10 different objects
const sampleData = [
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "Trishit Bhowmik",
    photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "Soumodeep Das",
    photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  },
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "Alexa Goerge",
    photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  },
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "John Libart",
    photo:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "Sydney Finn",
    photo:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "Tom Holland",
    photo:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    paragraph:
      "Exceptional gym! Achieved goals swiftly with top-notch equipment and motivating atmosphere. Outstanding reviews justified. Expert trainers, diverse classes, and a supportive community make this gym unbeatable. Five-star fitness haven! Clean, well-equipped",
    heading: "Samuel Jackson",
    photo:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const App = () => {
  return <HorizontalInfiniteScroll data={sampleData} />;
};

export default App;
