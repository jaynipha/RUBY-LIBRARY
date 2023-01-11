import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard/dashboard";
import AboutBooks from "./pages/Dashboard/aboutBooks";
import Checkout from "./pages/Checkout/checkout";
import About from "./pages/Home/about";
import Contact from "./pages/Home/contact";
import Confirmation from "./pages/Auth/confirmation";
import NotFound from "./pages/Auth/notfound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path='*' element={<NotFound />}/>      
          <Route element={<ProtectedRoute />}>
            {/* <Route path="/profile" element={<UserProfile />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<Dashboard />} />
            <Route path="/aboutbook/:id" element={<AboutBooks />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
