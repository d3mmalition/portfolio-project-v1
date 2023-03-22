/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link, ListItem, MenuItem, MenuList} from '@mui/material';
import {Box} from '@mui/system';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './Header.css';

export default function Header(props) {
  const { sx } = props.configs;
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <Box component="header" sx={sx}>
      <Link
        variant="h1"
        component={RouterLink}
        to="/"
        underline="none"
        color="primary"
        sx={{ fontSize: '1.5rem !important' }}
      >
        emmabuilds.co
      </Link>
      <MenuList id="header-links" sx={{ paddingY: '0 !important', gap: 2 }}>
        <ListItem>
          <Link href="mailto:emma@emmabuilds.co" underline="hover">
            Contact
          </Link>
        </ListItem>
        <MenuItem>
          <Link href="https://drive.google.com/file/d/121NLP9gVw63LWE_gwNgM5jfqnCw2-XxG/view?usp=sharing" underline="hover">
            Resume
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="https://www.linkedin.com/in/carrgardnere/" target="_blank" underline="hover">
            LinkedIn
          </Link>
        </MenuItem>
        <MenuItem key="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <LightModeIcon color="primary" />
          ) : (
            <DarkModeOutlinedIcon color="secondary" />
          )}
        </MenuItem>
      </MenuList>
    </Box>
  );
}