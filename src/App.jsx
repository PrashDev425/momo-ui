import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Service from "./pages/Service"
import AllergyAdvice from "./pages/AllergyAdvice"
import Footer from "./components/Footer"
import ProductDescription from "./pages/ProductDescription"
import Cart from "./pages/Cart"
import Payment from "./payment/Payment"
import Success from "./payment/Success"
import Failure from "./payment/Failure"
import Login from "./pages/Login"
import Demo from "./pages/Demo"
import Profile from "./pages/Profile"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/allergy-advice" element={<AllergyAdvice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-description/:id" element={<ProductDescription />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
