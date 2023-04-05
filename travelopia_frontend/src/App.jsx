import React from 'react'
import {Routes,Route} from "react-router-dom"
import TravelFormPage from "./pages/TavelFormPage"
import SubmissionPage from './pages/SubmissionPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TravelFormPage />} />
      <Route path="/form-submission" element={<SubmissionPage />} />
    </Routes>
  )
}

export default App