import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import roadmapImage from '../Images/app.png'; // Make sure to download and save the image in the appropriate folder

// Styled components
const CustomContainer = styled(Container)({
  marginTop: '0px',
  padding: '20px',
  height: 'auto',
  overflowY: 'auto',
  backgroundColor: '#ffffff', // Light background color for better contrast
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

const CustomGridItem = styled(Grid)({
  marginBottom: '20px',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#1976d2', // Primary color from Material-UI
  fontWeight: '500',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const AppDevelopment= () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          App Development
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Basics
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://kissflow.com/application-development/app-development-basics-explained/" target="_blank">
                Learn the basics of App Development.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <img src={roadmapImage} alt="App Development Roadmap" style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://youtu.be/NLvaOL6Cm48?si=IZbUh-S_2oM1orrV" target="_blank">
                Watch App Development tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.coursera.org/professional-certificates/meta-android-developer" target="_blank">
                Enroll in a comprehensive paid course on App Development.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Free Courses
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.mygreatlearning.com/mobile-app-development/free-courses" target="_blank">
                Explore free courses on App Development.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default AppDevelopment;