import "./App.css"
import Login from "./features/auth/Login"
import  Signup  from "./features/auth/Signup"

import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
