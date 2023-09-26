import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box width="1400px" sx={{ marginTop: { lg: '0px', xs: '0px' } }} paddingLeft= "50px">
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#fff" mb="0px">
      Similar <span style={{ color: '#8e00ff', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 0, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <Box sx={{ position: 'relative', width: '100%', p: '20px' }}><HorizontalScrollbar data={targetMuscleExercises} /></Box> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} marginTop= "50px" fontWeight={700} color="#fff" mb="60px">
      Similar <span style={{ color: '#8e00ff', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <Box sx={{ position: 'relative', width: '100%', p: '20px' }}><HorizontalScrollbar data={equipmentExercises} /></Box> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
