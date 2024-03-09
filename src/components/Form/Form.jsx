import React from "react";

function Form() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:5000/api/getkey");

    // const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
    //     amount
    // })

    const amt = 5000;
    const options = {
      key,
      amount: amt,
      currency: "INR",
      name: "6 Pack Programmer",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="" className="text-base font-medium text-gray-900">
            {" "}
            Password{" "}
          </label>
          
        </div>
        <div className="mt-2">
          <input
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="text"
          ></input>
        </div>
      </div>
      <input type="text" />
      <button onClick={checkoutHandler}>Pay now</button>
    </div>
  );
}

export default Form;
