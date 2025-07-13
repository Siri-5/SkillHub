import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import roadmapImage from '../Images/ml.jpg';

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

const MachineLearning = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Machine Learning
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Basics
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.javatpoint.com/basic-concepts-in-machine-learning" target="_blank">
                Learn the basics of Machine Learning.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <img src={roadmapImage} alt="Machine Learning Roadmap" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.youtube.com/watch?v=mNB8NlwhAgg&list=PLmAmHQ-_5ySyQeEryrlomrEvOGNYN3TAL" target="_blank">
                Watch Machine Learning tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjWl6ycgJWHAxWKqmYCHRbcBGAYABADGgJzbQ&ase=2&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP7Z3i3n_Xewpu1JRTPz-bWY2zrc5CPxBi2M9lzWS0WRkRAFJNSmsUIaAkQnEALw_wcB&ohost=www.google.com&cid=CAESVeD2UuhWHXKIS-Ih-ggeXmtNgs_qpWukyB_sG6ttG9Bo-8BhLeSB2PP4aSon3Ths-2mFqEsL5d5IpvOypLxuZKbBlMexgokuXVFUPUih8-KpFE6TguE&sig=AOD64_3h8nBTjsoVwuFpzCvSSsX1OKuOAw&q&nis=4&adurl&ved=2ahUKEwi_4KecgJWHAxVZRWcHHTUQB_YQ0Qx6BAgIEAE" target="_blank">
                Enroll in a comprehensive paid course on Machine Learning.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Free Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjey6-5gJWHAxXoqWYCHTqqCiIYABAAGgJzbQ&ase=2&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP4ToeDXsLlSe_XSPTZGZsj7NEKLZgkSvXV0nScComW8v0nqejk0KUcaAm4UEALw_wcB&ohost=www.google.com&cid=CAESVeD2xACEFgmPyTOTxKaWWp7skdyjHQLyQfm8JH_18Vsfy7LbKIaPDQfpoHKgrehGYtHtMqoonMDsus4gVbRsOeloyEZZOQ-kXla31DBLa-rcynKmpns&sig=AOD64_1AM_oF89HQEBccuk08IXsjn4p0NA&q&nis=4&adurl&ved=2ahUKEwicnqq5gJWHAxXAXWwGHd3QDA0Q0Qx6BAgGEAE" target="_blank">
                Enroll in a free course on Machine Learning.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default MachineLearning;