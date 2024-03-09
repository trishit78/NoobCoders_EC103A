import React from 'react' 


import Lottie from 'react-lottie';
import loader from '../../assets/loader.json'

function Preloader() {


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loader,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


  return (
    <div>
      <Lottie options={defaultOptions} height={'100vh'} width={'50vw'} />

    </div>
  )
}

export default Preloader
