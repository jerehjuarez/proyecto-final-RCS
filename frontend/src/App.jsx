import './App.css'
import Footer from './components/Footer'
import NavbarComponent from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"

function App() {
return (
  <div className='app-container'>
    <BrowserRouter>
      <NavbarComponent></NavbarComponent>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about" element={<AboutUs></AboutUs>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
    
  )
}

export default App
