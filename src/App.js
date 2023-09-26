import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
const App = () => {
  return (
    <Box width ="400px" sx={{ width: { x1: '1488px'}, background: 'linear-gradient(to bottom, #000000, #8F00FF)'}} m="auto" >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App