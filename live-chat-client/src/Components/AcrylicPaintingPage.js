import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import acrylicImage from '../Images/acrylicpaintings.png';

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

const AcrylicPaintingPage = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Acrylic Painting
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://youtube.com/playlist?list=PLS0YZ0hpio5Mai0JKKffaBXBEg4S_6xQk&si=MRKoPC2OA31iwF61" target="_blank">
                Watch Acrylic Painting tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <img src={acrylicImage} alt="Acrylic Painting" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Free Certificate Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.udemy.com/share/101GZu/" target="_blank">
                Enroll in a free certificate course on Acrylic Painting.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Paid Certificate Course
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.udemy.com/course/the-acrylic-painting-academy/?audience=Keyword&campaigntype=Search&gad_source=1&gclid=CjwKCAjwkJm0BhBxEiwAwT1AXIKEAigQzLQzYeHjfeIMN5ATLjlwe77zKRC24ixfmQMh7x2QD1u2HxoCnwwQAvD_BwE&language=EN&matchtype=b&portfolio=India&priority=&product=Course&test=&topic=&utm_campaign=LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=._ag_84769220328.ad_670113543765.kw_acrylic+painting+course.de_m.dm._pl._ti_aud-1738475842996%3Akwd-563253904269.li_9181929.pd.&couponCode=IND21PM" target="_blank">
                Enroll in a comprehensive paid course on Acrylic Painting.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default AcrylicPaintingPage;