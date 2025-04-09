


// Carousel.js
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Typography, Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const carouselItems = [
    {
      image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQr7AXDGFIVwxYSrHQAbjHJLodxKvDaW97QuVyE35bE-HBOvzIYx_ruZzDyxYyOeDvvJcAa7cBJSqG8LQQ7ct4',
      title: 'Explore Our Classrooms',
      description: 'Engaging and inspiring environments for every student.',
    },
    {
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/three-indian-schools-win-2024-worlds-best-school-prizes-260526243-16x9_0.jpg?VersionId=.sY9X0v3Id534bN40LBl_sqX623_609m&size=690:388',
      title: 'Empowering Students',
      description: 'We believe in fostering the potential of each child.',
    },
    {
      image: 'https://imgproxy.divecdn.com/XaU6v4EbDPRqCOtP6nbMjknVb0E_vQ9NCXnrD-aoI64/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xMzE3MDA3OTQ1LmpwZw==.webp',
      title: 'Learning Tools',
      description: 'Providing the right tools for effective learning.',
    },
  ];
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <SwipeableViews index={activeIndex} onChangeIndex={(index) => setActiveIndex(index)}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: '70vh',minHeight:"400px", objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: 'rgba(0, 0, 0, 0.6)',
                padding: '10px 20px',
                borderRadius: 1,
              }}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </SwipeableViews>

      {/* Navigation Buttons */}
      <Box sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
        <Button variant="contained" onClick={handleBack}>
         <ArrowBackIosIcon/>
        </Button>
      </Box>
      <Box sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
        <Button variant="contained" onClick={handleNext}>
         <ArrowForwardIosIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
