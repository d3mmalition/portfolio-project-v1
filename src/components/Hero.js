/* eslint-disable no-unused-vars */
import React from 'react';
import MyTools from './MyTools';

// MUI Components
import {Box} from '@mui/system';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// Media & CSS
// import profilePicture from '../../src/images/profile-picture-300.png';
import './Hero.css';

export default function Hero(props) {
  const {configs, id, isIpadScreenLess} = props;
  const {component, sx} = configs;

  return (
    <Container id={id} component={component} sx={sx}>
      <Card
        id='profile-card'
        sx={{
          flexWrap: isIpadScreenLess ? 'wrap' : 'none',
          padding: 6,
          gap: 4,
        }}
      >
        <CardMedia
          component='img'
          // image={profilePicture}
          sx={{width: 'auto', height: 250}}
        />
        <CardContent id='profile-card-detail' sx={{gap: 4}}>
          <Typography>
            Hello, I'm Emma! I'm a US based developer.
          </Typography>
          <Box className='intro-paragraph' paragraph='true'>
            <Typography>
              As a
              <Typography variant='jobTitle' color='primary' sx={{mx: 1}}>
                Full-stack Developer
              </Typography>
              I'm eager to learn, build, and create. I have a strong passion for web development and have gained experience in both front-end and back-end technologies. 
              As a developer, I'm constantly expanding my skills and knowledge to keep up with the latest trends and technologies. 
              I take pride in delivering high-quality work and am committed to exceeding client expectations.
               Take a look at my portfolio to see some of my recent projects and get in touch if you'd like to work together!"
            </Typography>
          </Box>
          <Box>
            <Typography>
              Tech I
              <FavoriteOutlinedIcon
                id='favourite-icon'
                color='primary'
                sx={{ml: 0.25}}
              />
              <Typography component='span' sx={{ml: 3.25}}>
                :
              </Typography>
            </Typography>
            <MyTools isIpadScreenLess={isIpadScreenLess} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
