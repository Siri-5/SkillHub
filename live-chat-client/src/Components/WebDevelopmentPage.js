import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import roadmapImage from '../Images/web-dev.jpg'; // Add the web development roadmap image to your Images folder

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

const WebDevelopmentPage = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Web Development
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Basics
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.mygreatlearning.com/web-development/free-courses?p=2" target="_blank">
                Explore free courses on the basics of Web Development.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Web Development Roadmap
            </Typography>
            <img src={roadmapImage} alt="Web Development Roadmap" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://youtube.com/playlist?list=PL9ooVrP1hQOEloRCBI97ZXkWUg6MJn0Yf&si=fTyBG0yQs7WYdTuk" target="_blank">
                Watch Web Development tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=IND21PM" target="_blank">
                Enroll in a comprehensive paid Web Development course.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default WebDevelopmentPage;
