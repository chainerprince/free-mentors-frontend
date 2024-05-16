import "./App.css"
import Login from "./features/auth/Login"
import  Signup  from "./features/auth/Signup"

import { Routes, Route } from "react-router-dom"
import MentorPage from "./features/mentors/MentorsList"
import Layout from "./app/Layout"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/mentors" element={<Layout><MentorPage /></Layout>} />
      </Routes>
    </>
  )
}

export default App
