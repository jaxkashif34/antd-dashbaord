import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "pages/signUp";
import SignIn from "pages/signIn";
import { Main } from "components/Layout";
import Home from "pages/Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
