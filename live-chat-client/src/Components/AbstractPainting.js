import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import abstractPaintingImage from '../Images/abs.jpg'; // Ensure you have this image in the correct path

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

const AbstractPainting = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Abstract Painting
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Basics
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.thecraftaholicwitch.com/abstract-painting-for-beginners/" target="_blank">
                Learn the basics of Abstract Painting.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <img src={abstractPaintingImage} alt="Abstract Painting" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://youtu.be/hPLXSX85XoQ?si=KDp3Kfq8AdKIMgxF" target="_blank">
                Watch Abstract Painting tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.udemy.com/topic/abstract-painting/?p=4&utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.INDIA&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=._ag_82569850245.ad_533220805577.kw._de_c.dm._pl._ti_aud-669140681723:dsa-48415828271.li_9062135.pd.&matchtype=&gad_source=1&gclid=Cj0KCQjw-ai0BhDPARIsAB6hmP5z-M4Jz-q4l3ylugC0VDPfD-ZyOCiBlddli44HW075TaaKTUd-58saAr2OEALw_wcB" target="_blank">
                Enroll in a comprehensive paid course on Abstract Painting.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Free Courses
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.classcentral.com/subject/abstract-painting" target="_blank">
                Explore free courses on Abstract Painting.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default AbstractPainting;