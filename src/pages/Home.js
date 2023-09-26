import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import Exercises from '../components/Exercises';
import Navbar from '../components/Navbar';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return (
    <Box>
       <Navbar setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

       <HeroBanner />       
       <Box sx={{ position: 'relative', width: '98%', p: '20px' }}>
       <Typography color= "#FFFFFF" fontFamily= "Helvetica" fontSize= "36px" align='center' mb="46px"> 
  Categories</Typography>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
       </Box>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home