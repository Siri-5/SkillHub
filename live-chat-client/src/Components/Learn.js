import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText, TextField, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

// Styled components
const CustomContainer = styled(Container)({
  padding: '20px',
  maxHeight: 'calc(100vh - 64px)', // Adjust if you have a different header height
  overflowY: 'auto',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%', // Ensure it takes up the full height of its parent
});

const CustomListItem = styled(ListItem)({
  backgroundColor: '#fff',
  borderRadius: '8px',
  marginBottom: '10px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
});

const resources = [
  { name: 'Python', path: '/app/python' },
  { name: 'Aptitude', path: '/app/aptitude' },
  { name: 'Web Development', path: '/app/web-development' },
  { name: 'Acrylic Painting', path: '/app/acrylic-painting' },
  { name: 'Carnatic Music', path: '/app/carnatic-music' },
  { name: 'Java', path: '/app/java' },
  { name: 'App Development', path: '/app/app-development' },
  { name: 'Machine Learning', path: '/app/machine-learning' },
  { name: 'Data Science', path: '/app/data-science' },
  { name: 'Pencil Sketching', path: '/app/pencil-sketching' },
  { name: 'Abstract Painting', path: '/app/abstract-painting' },
];

function Learn() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResources, setFilteredResources] = useState(resources);

  // Filter resources based on search term
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = resources.filter((resource) =>
      resource.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  return (
    <CustomContainer>
      {/* Add the "Learning Resources" text */}
      <Typography
        variant="h4"
        gutterBottom
        style={{
          marginBottom: '24px', // Increased space between the text and search bar
          fontWeight: 'bold',
          color: '#Henrietta Mitchell',
        }}
      >
        Learning Resources
      </Typography>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          fullWidth
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
            style: {
              paddingRight: '8px', // Adjust padding for the icon
            },
          }}
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            borderRadius: '25px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none', // Remove border
            },
            '& .MuiInputBase-input': {
              padding: '10px', // Add padding inside the search bar
            },
          }}
        />
      </div>
      <List>
        {filteredResources.map((resource, index) => (
          <CustomListItem button component={Link} to={resource.path} key={index}>
            <ListItemText primary={resource.name} />
          </CustomListItem>
        ))}
      </List>
    </CustomContainer>
  );
}

export default Learn;


// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText } from '@mui/material';
// import { styled } from '@mui/system';
// import { Link } from 'react-router-dom';

// const CustomAppBar = styled(AppBar)({
//   backgroundColor: 'transparent',
//   boxShadow: 'none',
// });

// const resources = [
//   { name: 'Python', path: '/python' },
//   { name: 'Aptitude Questions', path: '/aptitude' },
//   { name: 'Web Development', path: '/web-development' },
//   { name: 'Acrylic Painting', path: '/acrylic-painting' },
//   { name: 'Carnatic Music', path: '/carnatic-music' },
//   { name: 'Java', path: '/java' },
// ];

// function Learn() {
//   return (
//     <div>
//       <CustomAppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Learn</Typography>
//         </Toolbar>
//       </CustomAppBar>
//       <Container style={{ padding: '20px', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
//         <Typography variant="h4" gutterBottom>
//           Learning Resources
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Click on a topic to learn more about it.
//         </Typography>
//         <List>
//           {resources.map((resource, index) => (
//             <ListItem button component={Link} to={resource.path} key={index}>
//               <ListItemText primary={resource.name} />
//             </ListItem>
//           ))}
//         </List>
//       </Container>
//     </div>
//   );
// }

// export default Learn;
// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
// import { styled } from '@mui/system';
// import pythonIcon from '../Images/python.png'; // Replace with your actual file name and path
// import webDevIcon from '../Images/webdev.png'; // Replace with your actual file name and path
// import cmIcon from '../Images/carnaticmusic.png';
// import pIcon from '../Images/acrylicpaintings.png'

// const CustomAppBar = styled(AppBar)({
//   backgroundColor: 'transparent',
//   boxShadow: 'none',
// });

// const resources = [
//   { 
//     name: 'Python', 
//     link: 'https://www.geeksforgeeks.org/python-programming-language-tutorial/', 
//     image: pythonIcon
//   },
//   { 
//     name: 'Aptitude qns', 
//     link: 'https://www.geeksforgeeks.org/aptitude-questions-and-answers/', 
//     image: pIcon
//   },
//   { 
//     name: 'Web Development', 
//     link: 'https://youtu.be/G3e-cpL7ofc?si=b8-Inhl2CICAAOQ4', 
//     image: webDevIcon
//   },
//   { 
//     name: 'Acrylic Painting', 
//     link: 'https://www.youtube.com/@acrylicpaintingtechniques3816', 
//     image: pIcon// Use an external link or add to your icons folder
//   },
//   { 
//     name: 'Carnatic Music', 
//     link: 'https://www.youtube.com/watch?v=OPhnN6bFFgw&list=PLE_xBHMCfPspShvpV7E2QYKNUFZqP-dCR', 
//     image: cmIcon // Use an external link or add to your icons folder
//   },
//   { 
//     name: 'Java', 
//     link: 'https://www.w3schools.com/java/', 
//     image: pIcon
//   },
//   { 
//     name: 'Java', 
//     link: 'https://www.w3schools.com/java/', 
//     image: pIcon
//   },
//   { 
//     name: 'Java', 
//     link: 'https://www.w3schools.com/java/', 
//     image: pIcon
//   },
// ];

// function Learn() {
//   return (
//     <div>
//       <CustomAppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Learn</Typography>
//         </Toolbar>
//       </CustomAppBar>
//       <Container>
//         <Typography variant="h4" gutterBottom style={{ marginTop: 20 }}>
//           Welcome to the Learning Page
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Here you can find various resources to help you get started with Python, web development, painting, and music.
//         </Typography>
//         <Grid container spacing={4}>
//           {resources.map((resource, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 <CardActionArea component="a" href={resource.link} target="_blank">
//                   <CardMedia
//                     component="img"
//                     alt={resource.name}
//                     height="120"
//                     image={resource.image}
//                     title={resource.name}
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {resource.name}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Learn;
// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
// import { styled } from '@mui/system';

// const CustomAppBar = styled(AppBar)({
//   backgroundColor: 'transparent',
//   boxShadow: 'none',
// });

// const resources = [
//   { name: 'Learn Python', link: 'https://www.geeksforgeeks.org/python-programming-language-tutorial/' },
//   { name: 'Learn Web Development', link: 'https://youtu.be/G3e-cpL7ofc?si=b8-Inhl2CICAAOQ4' },
//   { name: 'Acrylic Painting', link: 'https://www.youtube.com/@acrylicpaintingtechniques3816' },
//   { name: 'Carnatic Music', link: 'https://www.youtube.com/watch?v=OPhnN6bFFgw&list=PLE_xBHMCfPspShvpV7E2QYKNUFZqP-dCR' },
// ];

// function Learn() {
//   return (
//     <div>
//       <CustomAppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Learn</Typography>
//         </Toolbar>
//       </CustomAppBar>
//       <Container>
//         <Paper elevation={3} style={{ marginTop: 20, padding: 20 }}>
//           <Typography variant="h4" gutterBottom>
//             Welcome to the Learning Page
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Here you can find various resources to help you get started with Python, web development, painting, and music.
//           </Typography>
//           <List>
//             {resources.map((resource, index) => (
//               <ListItem button component="a" href={resource.link} target="_blank" key={index}>
//                 <ListItemText primary={resource.name} />
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

// export default Learn;

// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, Paper } from '@mui/material';
// import { styled } from '@mui/system';

// // Custom styled AppBar to remove blue color
// const CustomAppBar = styled(AppBar)({
//   backgroundColor: 'transparent', // Change this to the desired color if needed
//   boxShadow: 'none', // Remove shadow if you want a flat look
// });

// const resources = [
//   { name: 'Learn Python', link: 'https://www.geeksforgeeks.org/python-programming-language-tutorial/' },
//   { name: 'Learn Web Development', link: 'https://youtu.be/G3e-cpL7ofc?si=b8-Inhl2CICAAOQ4' },
//   { name: 'Acrylic Painting', link: 'https://www.youtube.com/@acrylicpaintingtechniques3816' },
//   { name: 'Carnatic Music', link: 'https://www.youtube.com/watch?v=OPhnN6bFFgw&list=PLE_xBHMCfPspShvpV7E2QYKNUFZqP-dCR' },
// ];

// function Learn() {
//   return (
//     <div>
//       <CustomAppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Learn</Typography>
//         </Toolbar>
//       </CustomAppBar>
//       <Container>
//         <Paper elevation={3} style={{ marginTop: 20, padding: 20 }}>
//           <Typography variant="h4" gutterBottom>
//             Welcome to the Learning Page
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Here you can find various resources to help you get started with Python, web development, painting, and music.
//           </Typography>
//           <List>
//             {resources.map((resource, index) => (
//               <ListItem button component="a" href={resource.link} target="_blank" key={index}>
//                 <ListItemText primary={resource.name} />
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

// export default Learn;
// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, Paper } from '@mui/material';

// const resources = [
//   { name: 'Material-UI Documentation', link: 'https://mui.com/' },
//   { name: 'React Documentation', link: 'https://reactjs.org/' },
//   { name: 'JavaScript Info', link: 'https://javascript.info/' },
//   { name: 'MDN Web Docs', link: 'https://developer.mozilla.org/en-US/' },
// ];

// function Learn() {
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Learn</Typography>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Paper elevation={3} style={{ marginTop: 20, padding: 20 }}>
//           <Typography variant="h4" gutterBottom>
//             Welcome to the Learning Page
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Here you can find various resources to help you get started with React, Material-UI, and other web development topics.
//           </Typography>
//           <List>
//             {resources.map((resource, index) => (
//               <ListItem button component="a" href={resource.link} target="_blank" key={index}>
//                 <ListItemText primary={resource.name} />
//               </ListItem>
//             ))}
//           </List>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

// export default Learn;
