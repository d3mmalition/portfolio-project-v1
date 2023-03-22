/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';

import {
  CardActions,
  CardContent,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import {Box} from '@mui/system';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';

import RepositoryTitle from './RepositoryTitle';

export default function Repository(props) {
  const {
    name,
    description,
    html_url,
    homepage,
    updated_at,
    languages_url,
    topics,
  } = props.data;

  const githubUrl = html_url;
  const live_site_url = homepage;

  // const [languages, setLanguages] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch(languages_url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLanguages(data);
  //       setIsLoading(false);
  //     });
  // }, [languages_url]);

  return (
    <CardContent className='repository-container' sx={{p: 0, m: 0}}>
      <RepositoryTitle
        title={name}
        url={githubUrl}
        updatedDate={updated_at}
        topics={topics}
      />
      <Typography sx={{mb: 4}}>
        {description === null ? `This app is in production! 🛠` : description}
      </Typography>
      <Box
        className='repository-language-container'
        sx={{mb: 8, gap: 2, flexWrap: 'wrap'}}
      >
        
      </Box>
      <Divider sx={{mt: -4, mb: 4}} />
      <CardActions
        className='button-container'
        sx={{
          paddingX: 0,
          placeSelf: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'space-evenly',
        }}
      >
        <Button
          href={live_site_url}
          target='_blank'
          variant='contained'
          startIcon={<HomeIcon />}
        >
          Live Site
        </Button>
        <Button
          href={githubUrl}
          target='_blank'
          variant='contained'
          startIcon={<GitHubIcon />}
        >
          Source
        </Button>
      </CardActions>
    </CardContent>
  );
}
