import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '10px solid #8e00ff', borderBottom: '1px solid #8e00ff', borderLeft: '1px solid #8e00ff', borderRight: '1px solid #8e00ff', background: '#000000', borderRadius:'20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#000000', border: '1px solid #8e00ff', borderRadius:'20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 0, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
    <Typography color= "#FFFFFF" fontFamily= "Helvetica" fontSize= "20px" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
