import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <Box
      className="boxx"
      sx={{ background: '#000000', border: '1px solid #8e00ff', borderRadius:'20px', width: '360px', height: '502px', gap: '47px' }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} style={{border: '1px solid #8e00ff', borderRadius:'20px'}} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#8e00ff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#8e00ff', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#FFF" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
    </Box>
  </Link>
);

export default ExerciseCard;
