import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Service from "./pages/Service"
import AllergyAdvice from "./pages/AllergyAdvice"
import Footer from "./components/Footer"

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
        <Route path="/cart" element={<AllergyAdvice />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
