import { BrowserRouter, Routes, Route } from "react-router-dom"
import Listings from "./pages/Listings"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import CreateListing from "./pages/CreateListing"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateListing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
