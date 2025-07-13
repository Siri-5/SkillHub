import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import roadmapImage from '../Images/ds.jpg'; // Ensure you have this image in your Images folder

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

const DataScience = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Data Science
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Basics
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.geeksforgeeks.org/data-science-fundamentals/" target="_blank">
                Learn the basics of Data Science.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <img src={roadmapImage} alt="Data Science Roadmap" style={{ maxWidth: '30%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://youtu.be/-ETQ97mXXF0?si=tnMreJ27Aiq7rI-H" target="_blank">
                Watch Data Science tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Free Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.mygreatlearning.com/data-science/free-courses" target="_blank">
                Enroll in a free Data Science course.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.mygreatlearning.com/great-lakes-data-science-engineering-course?&utm_source=Search&utm_medium=Great-Lakes-Great-Learning&utm_campaign=DSEFT_Brand_metros_GL&adgroup_id=105243994518&campaign_id=10541441685&keyword=great%20learning%20data%20science&ad_id=689649807752&gad_source=1&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP7zhozasjf0LMkUIhvYnlb6Hz7O3Hb-Yy9MRq66Xu0cr-r8fw-rnjEaApzcEALw_wcB" target="_blank">
                Enroll in a comprehensive paid course on Data Science.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default DataScience;