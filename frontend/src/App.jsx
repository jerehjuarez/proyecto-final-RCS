import './App.css'
import Footer from './components/Footer'
import NavbarComponent from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import Signup from './pages/Signup'
import Login from './pages/Login'
import ToDoLists from './pages/ToDoLists'

function App() {
return (
  <div className='app-container'>
    <BrowserRouter>
      <NavbarComponent></NavbarComponent>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="register" element={<Signup></Signup>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="toDoList" element={<ToDoLists/>}></Route>
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
