import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(
    "Please fill all options mentioned above!!"
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="border border-gray-300 px-4 py-2 text-lg rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
            type="password"
            placeholder="Confirm Password"
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
      </div>
    </div>
  );
};

export default App;
