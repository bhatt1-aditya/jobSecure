import React from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import PolicyUs from "./components/policyUs/PolicyUs";
import ReferralUs from "./components/referral/ReferralUs";
import SignIn from "./components/referral/SignIn";
import SignUp from "./components/referral/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/policy" element={<PolicyUs />} />
          <Route path="/referal" element={<ReferralUs />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
