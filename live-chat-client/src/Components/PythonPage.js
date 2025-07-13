import React from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';
import { styled } from '@mui/system';
import roadmapImage from '../Images/python rm.png'; // Make sure to add the roadmap image in the Images folder

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

const SmallImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '300px', // Limit height to prevent oversized images
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#1976d2', // Primary color from Material-UI
  fontWeight: '500',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const PythonPage = () => {
  return (
    <CustomContainer>
      <Box>
        <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
          Python Programming
        </Typography>
        <Grid container spacing={3}>
          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Introduction
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.w3schools.com/python/python_intro.asp" target="_blank">
                Learn the basics of Python programming language.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Python Roadmap
            </Typography>
            <SmallImage src={roadmapImage} alt="Python Roadmap"style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px' }} />
            {/* <img src={roadmapImage} alt="App Development Roadmap" style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px' }} /> */}
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              Python Tutorial
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.geeksforgeeks.org/python-programming-language-tutorial/" target="_blank">
                Comprehensive Python tutorial from GeeksforGeeks.
              </StyledLink>
            </Typography>
          </CustomGridItem>

          <CustomGridItem item xs={12}>
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#455' }}>
              YouTube Playlist
            </Typography>
            <Typography variant="body1" paragraph>
              <StyledLink href="https://www.youtube.com/watch?v=6i3EGqOBRiU&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT" target="_blank">
                Watch Python tutorials on YouTube.
              </StyledLink>
            </Typography>
          </CustomGridItem>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default PythonPage;


// import React from 'react';
// import { Container, Typography, Grid, Link } from '@mui/material';
// import { styled } from '@mui/system';
// import roadmapImage from '../Images/python rm.png'; // Make sure to add the roadmap image in the Images folder

// const CustomContainer = styled(Container)({
//   marginTop: '20px',
// });

// const CustomGridItem = styled(Grid)({
//   marginBottom: '20px',
// });

// const SmallImage = styled('img')({
//   width: '20%',
//   height: 'auto',
// });

// const StyledLink = styled(Link)({
//   textDecoration: 'none',
//   color: '#3f51b5',
//   '&:hover': {
//     textDecoration: 'underline',
//   },
// });

// const PythonPage = () => {
//   return (
//     <CustomContainer>
//       <Typography variant="h3" gutterBottom>
//         Python
//       </Typography>
//       <Grid container spacing={3}>
//         <CustomGridItem item xs={12}>
//           <Typography variant="h5" gutterBottom>
//             Introduction
//           </Typography>
//           <Typography variant="body1" paragraph>
//             <StyledLink
//               href="https://www.w3schools.com/python/python_intro.asp"
//               target="_blank"
//             >
//               Learn the basics of Python programming language.
//             </StyledLink>
//           </Typography>
//         </CustomGridItem>

//         <CustomGridItem item xs={12}>
//           <Typography variant="h5" gutterBottom>
//             Python Roadmap
//           </Typography>
//           <SmallImage src={roadmapImage} alt="Python Roadmap" />
//         </CustomGridItem>

//         <CustomGridItem item xs={12}>
//           <Typography variant="h5" gutterBottom>
//             Python Tutorial
//           </Typography>
//           <Typography variant="body1" paragraph>
//             <StyledLink
//               href="https://www.geeksforgeeks.org/python-programming-language-tutorial/"
//               target="_blank"
//             >
//               Comprehensive Python tutorial from GeeksforGeeks.
//             </StyledLink>
//           </Typography>
//         </CustomGridItem>

//         <CustomGridItem item xs={12}>
//           <Typography variant="h5" gutterBottom>
//             YouTube Playlist
//           </Typography>
//           <Typography variant="body1" paragraph>
//             <StyledLink
//               href="https://www.youtube.com/watch?v=6i3EGqOBRiU&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT"
//               target="_blank"
//             >
//               Watch Python tutorials on YouTube.
//             </StyledLink>
//           </Typography>
//         </CustomGridItem>
//       </Grid>
//     </CustomContainer>
//   );
// };

// export default PythonPage;
// // import React from 'react';

// // function PythonPage() {
// //   return (
// //     <div>
// //       <h1>Python</h1>
// //     </div>
// //   );
// // }

// // export default PythonPage;

// import React from 'react';
// import { Container, Typography, Card, CardContent, CardMedia, Link, Grid, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import roadmapImage from '../Images/python rm.png'; // Make sure to add the roadmap image in the Images folder
// const CustomCard = styled(Card)({
//   marginBottom: '20px',
//   textAlign: 'center',
// });

// const CustomContainer = styled(Container)({
//   marginTop: '20px',
// });

// const PythonPage = () => {
//   return (
//     <CustomContainer>
//       <Typography variant="h3" gutterBottom>
//         Python
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <CustomCard>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 Introduction
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Learn the basics of Python programming language.
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 component={Link}
//                 href="https://www.w3schools.com/python/python_intro.asp"
//                 target="_blank"
//                 sx={{ mt: 2 }}
//               >
//                 Learn More
//               </Button>
//             </CardContent>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <CustomCard>
//             <CardMedia
//               component="img"
//               height="140"
//               image={roadmapImage}
//               alt="Python Roadmap"
//             />
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 Python Roadmap
//               </Typography>
//             </CardContent>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <CustomCard>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 Python Tutorial
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Comprehensive Python tutorial from GeeksforGeeks.
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 component={Link}
//                 href="https://www.geeksforgeeks.org/python-programming-language-tutorial/"
//                 target="_blank"
//                 sx={{ mt: 2 }}
//               >
//                 Learn More
//               </Button>
//             </CardContent>
//           </CustomCard>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <CustomCard>
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 YouTube Playlist
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Watch Python tutorials on YouTube.
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 component={Link}
//                 href="https://www.youtube.com/watch?v=6i3EGqOBRiU&list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT"
//                 target="_blank"
//                 sx={{ mt: 2 }}
//               >
//                 Watch Now
//               </Button>
//             </CardContent>
//           </CustomCard>
//         </Grid>
//       </Grid>
//     </CustomContainer>
//   );
// };

// export default PythonPage;
