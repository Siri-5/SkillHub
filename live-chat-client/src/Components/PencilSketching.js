import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import pencilSketchingImage from '../Images/pen.jpg';

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

const PencilSketching = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Pencil Sketching
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Basics
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://juliabausenhardt.com/how-to-draw-anything-learn-sketching-for-beginners/" target="_blank">
                Learn the basics of Pencil Sketching.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <img src={pencilSketchingImage} alt="Pencil Sketching" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.youtube.com/live/6QOboH_wKL4?si=1h2zudxphqvrxZHR" target="_blank">
                Watch Pencil Sketching tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.simsumarts.com/product/diploma-in-pencil-sketching-1-year-3/" target="_blank">
                Enroll in a comprehensive paid course on Pencil Sketching.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Free Courses
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.udemy.com/topic/pencil-drawing/free/" target="_blank">
                Explore free courses on Pencil Sketching.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default PencilSketching;