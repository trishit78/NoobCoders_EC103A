import React, { useState } from "react";
import axios from "axios";
import { ArrowRight } from 'lucide-react'
import Header2 from "../Header/Header2";

function Form1() {
  const [amt, setAmt] = useState(null);

  const checkoutHandler = async (id) => {
    const res = await axios.get("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline! Failed to load...");
    }

    var options = {
      key: "rzp_test_1sh4xAWBK0C6e5", // Enter the Key ID generated from the Dashboard
      amount: amt * 100,
      currency: "INR",
      name: "FitClub",
      description: "Thank you so much for helping",
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      prefill: {
        email: "trishit456@gmail.com",
        contact: +919477704221,
      },

      handler: function (response) {
        
        console.log(response);
        setAmt(null);
       
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>

    <Header2></Header2>
    <section>
    <div className="flex items-center mb-64 justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
       
        <h1 className="text-center text-3xl font-bold leading-tight text-orange-500">
        Sweat It Out at the Gym, Not with Your Finances
        </h1>
        
        <form action="#" method="POST" className="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-base font-medium text-white">
                {' '}
                Full Name{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-base font-medium text-white">
                {' '}
                Address{' '}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Address"
                  
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-base font-medium text-white">
                  {' '}
                  Phone Number{' '}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Phone Number"
                  
                ></input>
              </div>
            </div>


            <div>

            <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-base font-medium text-white">
                  {' '}
                  Amount{' '}
                </label>
              </div>
            <div className="mt-2">
          <input
            className="flex h-10 w-full rounded-md border text-white border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Amount"
            required
            onChange={(e) => {
              setAmt(e.target.value);
            }} // Closing parenthesis added here
            value={amt}
          />
        </div>
        </div>
            <div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 hover:bg-sky-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                onClick={checkoutHandler}
              >
                Pay Now <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  </section>
  </div>



















    // <div className="flex items-center justify-center h-screen">
    //   <div>
    //     <label htmlFor="" className="text-base font-medium text-white">
    //       {" "}
    //       Email address{" "}
    //     </label>
    //     <div className="mt-2">
    //       <input
    //         className="flex h-10 w-full rounded-md border text-white border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    //         type="text"
    //         placeholder="Email"
    //         required
    //         onChange={(e) => {
    //           setAmt(e.target.value);
    //         }} // Closing parenthesis added here
    //         value={amt}
    //       />
    //     </div>
    //   </div>

    //   <button onClick={checkoutHandler}>Pay now</button>
    // </div>
  );
}

export default Form1;
