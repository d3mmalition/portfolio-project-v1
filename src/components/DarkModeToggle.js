import React from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <ToggleContainer>
            <span>Dark Mode</span>
            <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                uncheckedIcon={false}
                checkedIcon={false}
                height={24}
                width={48}
                handleDiameter={24}
            />
        </ToggleContainer>
    );
};

export default DarkModeToggle;
