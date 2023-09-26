import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '20px' } }} p= "50px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#fff" mb="60px">
        Watch <span style={{ color: '#8e00ff', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <Box
          className="boxx"
          sx={{ background: '#000000', border: '1px solid #8e00ff', borderRadius:'20px', width: '381px', height: '350px', gap: '47px' }}
        >
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderRadius: '20px', border: '1px solid #8e00ff', width: '381px'}} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography m="20px" sx={{ fontSize: { lg: '20px', xs: '18px' } }} fontWeight={600} color="#fff">
                {item.video.title}
              </Typography>
              <Typography m="20px" fontSize="14px" color="#fff">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
          </Box>
        ))}
      </Stack>
      </Box>
  );
};

export default ExerciseVideos;
