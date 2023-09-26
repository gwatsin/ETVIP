import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="100px" sx={{ flexDirection: { lg: 'row' }, m:'0 200px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" style={{ height: '480px', border: '1px solid #8e00ff', borderRadius:'20px'}}/>
      <Stack sx={{ gap: { lg: '20px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '50px', xs: '130px' } }} color="#FFFFFF" fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} color="#FFFFFF">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFFFFF', borderRadius: '50%', width: '80px', height: '80px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '40px' }} />
            </Button>
            <Typography textTransform="capitalize" color="#FFFFFF" sx={{ fontSize: { lg: '20px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
