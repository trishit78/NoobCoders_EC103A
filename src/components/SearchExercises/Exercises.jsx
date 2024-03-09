import React from 'react' 
//import { useState } from 'react';
import Header2 from '../Header/Header2';
import SearchExercises from './SearchExercises'
import Exercise from './Exercise';

import { useState ,useEffect} from "react";


import Preloader from '../Preloader/Preloader';

function Exercises() {
    
    const [bodyPart,setBodyPart] = useState('all');
    const [exercises,setExercises] = useState([]);
  console.log(exercises)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
    return (
<>
        {loading && <Preloader/>}
    <div className='searching' >
        <Header2/>
        <SearchExercises
        />
        
        <Exercise exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </div>
        </>


)
}

export default Exercises
