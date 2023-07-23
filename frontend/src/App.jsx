
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

const DefaultLayout = ({ children }) => {
  return (
    <div className='app-container'>
      <NavbarComponent />
        {children}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="register"
            element={<Signup />}
          />
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="toDoList"
            element={<ToDoLists />}
          />
          <Route
            path="about"
            element={
              <DefaultLayout>
                <AboutUs />
              </DefaultLayout>
            }
          />
          <Route
            path="contact"
            element={
              <DefaultLayout>
                <Contact />
              </DefaultLayout>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
