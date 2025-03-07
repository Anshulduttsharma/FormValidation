import React, { useState } from "react";
import {ToastContainer, toast} from 'react-toastify';
import User from './components/user';

const App = () => {
  const [user, setUser] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if(password.length<8){
      setError('Password must be 8 characters long');
      return
    } 
    if(password !== confirmPassword){
      setError('Password and confirm password must be same');
      return
    }
    if(!/[!@#$%^&*()<>.,]/.test(password)){
      setError("Password must contains any special characters.");
      return
    }
    if(!/[A-Z]/.test(password)){
      setError("Password must contain any Capital letter")
      return
    }

    setUser([...user, {fullName, email, password}]);

    setError("");
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    toast.success('🦄 Login Successful!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    console.log("Form Submitted");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Sign up to get started with our amazing services.
        </p>

        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4 mt-6"
        >
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="text"
            placeholder="Enter Name"
            required
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />

          {error && (
            <p className="text-red-500 text-center mt-2">{error}</p>
          )}
          <button className="text-lg text-white px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 font-semibold mt-4 w-full transition duration-300">
            Submit
          </button>
        </form>

        <p className="text-gray-500 text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-emerald-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
        <ToastContainer></ToastContainer>
      </div>
      {user.map(function(val,id){
        return <User val={val} id={id}/>
      })}
    </div>
  );
};

export default App;
