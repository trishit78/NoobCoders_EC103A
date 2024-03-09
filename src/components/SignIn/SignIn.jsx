
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header2 from "../Header/Header2";
import {signInWithGooglePopUp,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword,signOutUser} from '../../firebase/firebase'

import {UserContext} from '../context/userContext'
const defaultFormFields={
  email:'',
  password:'',
};


export function SignIn() {
  const navigate = useNavigate();


  const logGoogleUser = async()=>{
    console.log('text redirect')
    const {user}= await signInWithGooglePopUp();
    const userDocRef =  await createUserDocumentFromAuth(user);
    navigate("/")
  }

 

  const [formFields, setFormFields] = useState(defaultFormFields);
    
    const {email, password} = formFields;
    
    console.log(formFields);
    
    const { setCurrentUser} = useContext(UserContext);

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async() =>{
        const {user} = await signInWithGooglePopUp()
        console.log(user)
        setCurrentUser(user)
         await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        

        try{
          const {user} = await signInAuthUserWithEmailAndPassword(email,password);
          console.log({user});  
          setCurrentUser(user);
          resetFormFields();
        }catch(error){
            console.log(error)
            
        }
    }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <div>
      <Header2></Header2>
      <section className="mb-16">
        <div className="flex items-center justify-center mb-64 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-orange-500">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-white ">
              Don&apos;t have an account?{" "}
              <Link
                to={"/signup"}
                className="font-semibold text-orange-500 transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8"
            onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-white"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border text-white border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                      name="email"
                      value={email}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold  text-orange-500 hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                      name="password"
                      value={password}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
                  >
                    Login <ArrowRight className="ml-2" size={16} />
                  </button>
                  <button
                type="button"
                className="relative mt-4 hover:bg-sky-500 inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={logGoogleUser}
                
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useContext } from "react";
// import Header2 from "../Header/Header2";

// import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../firebase/firebase'


// const defaultFormFields = {
//   displayName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };


// export function SignIn() {
//   const [formFields, setFormFields] = useState(defaultFormFields);

//   const { displayName, email, password, confirmPassword } = formFields;

//   console.log(formFields);
//   const resetFormFields = () => {
//     setFormFields(defaultFormFields);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("passwords do not match");
//       return;
//     }

//     try {
//       const { user } = await createAuthUserWithEmailAndPassword(
//         email,
//         password
//       );
//       //console.log(response)
//       setCurrentUser(user);

//       await createUserDocumentFromAuth(user, { displayName });
//       resetFormFields();
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         alert("Cannot create user, email already in use");
//       }
//       console.log("error in user creation ", error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormFields({ ...formFields, [name]: value });
//   };

//   return (
//     <div>
//       <Header2></Header2>

//       <section>
//         <div className="flex items-center justify-center mb-64 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//           <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//             <h2 className="text-center text-2xl font-bold leading-tight text-orange-500">
//               Sign up to create account
//             </h2>
//             <p className="mt-2 text-center text-base text-white">
//               Already have an account?{" "}
//               <Link
//                 to={"/signin"}
//                 className="font-medium text-orange-500 transition-all duration-200 hover:underline"
//               >
//                 Sign In
//               </Link>
//             </p>
//             <form action="#" method="POST" className="mt-8" 
//               onSubmit={()=>{handleSubmit}}
//             >
//               <div className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="text-base font-medium text-white"
//                   >
//                     {" "}
//                     Full Name{" "}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 focus:text-white"
//                       type="text"
//                       placeholder="Full Name"
//                       id="name"
//                       required
//                       onChange={handleChange}
//                       name="displayName"
//                       value={displayName}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="text-base font-medium text-white"
//                   >
//                     {" "}
//                     Email address{" "}
//                   </label>
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
//                       type="email"
//                       placeholder="Email"
//                       id="email"
//                       required
//                       onChange={handleChange}
//                       name="email"
//                       value={email}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-base font-medium text-white"
//                     >
//                       {" "}
//                       Password{" "}
//                     </label>
//                   </div>
                  
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="password"
//                       placeholder="Password"
//                       id="password"
//                       required
//                       onChange={handleChange}
//                       name="password"
//                       value={password}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <label
//                       htmlFor="password"
//                       className="text-base font-medium text-white"
//                     >
//                       {" "}
//                      Confirm Password{" "}
//                     </label>
//                   </div>
                  
//                   <div className="mt-2">
//                     <input
//                       className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                       type="password"
//                       placeholder="Password"
//                       id="password"
//                       required
//                       onChange={handleChange}
//                       name="confirmPassword"
//                       value={confirmPassword}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <button
//                     type="submit"
//                     className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
//                   >
//                     Create Account <ArrowRight className="ml-2" size={16} />
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
