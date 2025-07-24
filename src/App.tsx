import Cart from "./components/Cart"
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import SignupPage from "./components/Signup";
import Terms from "./components/Terms"
import Shipping from "./components/Shipping"
import Refund from "./components/Refund"
import Privacy from "./components/Privacy"
const App = () => {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={< Privacy/>} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </Router>
  )
}

export default App

