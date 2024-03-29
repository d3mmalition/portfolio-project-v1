/* eslint-disable no-unused-vars */
import React from "react";
import MyTools from "./MyTools";

// MUI Components
import { Box } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

// Media & CSS

import profilePicture from "../../src/images/heropicture1.jpg";
import "./Intro.css";

export default function Intro(props) {
  const { configs, id, isIpadScreenLess } = props;
  const { component, sx } = configs;

  return (
    <Container id={id} component={component} sx={sx}>
      <Card
        id="profile-card"
        sx={{
          flexWrap: isIpadScreenLess ? "wrap" : "none",
          padding: 6,
          gap: 4,
        }}
      >
        <CardMedia
          component="img"
          image={profilePicture}
          sx={{ width: "auto", height: 250 }}
        />
        <CardContent id="profile-card-detail" sx={{ gap: 4 }}>
          <Typography>Hello, I'm Emma! I'm a US based developer.</Typography>
          <Box className="intro-paragraph" paragraph="true">
            <Typography>
              As an enthusiastic
              <Typography variant="jobTitle" color="primary" sx={{ mx: 0.5 }}>
                Full-stack Developer
              </Typography>
              , I am driven to learn, build, and innovate. My passion for web
              development has led me to learn in both front-end and
              back-end technologies. As a dedicated professional, I constantly
              update my skills and knowledge to stay abreast of the latest
              trends and technologies. I strive to deliver superior quality work
              that surpasses client expectations. 
              <p>
                {" "}
                Take a look at my portfolio to see some of my recent projects
                and get in touch if you'd like to work together!
              </p>
            </Typography>
          </Box>
          <Box>
            <Typography>Skills</Typography>
            <MyTools isIpadScreenLess={isIpadScreenLess} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
