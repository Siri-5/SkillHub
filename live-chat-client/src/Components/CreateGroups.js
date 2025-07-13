import React, { useState } from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:8080/chat/createGroup",
      {
        name: groupName,
        description: groupDescription,
        users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
      },
      config
    );
    nav("/app/groups");
  };

  const isFormValid = groupName !== "" && groupDescription !== "";

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to create a Group Named " + groupName + "?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Description: {groupDescription}
              <br />
              This will create a group in which you will be the admin and
              others will be able to join this group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                createGroup();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div
        className={"createGroups-container" + (lightTheme ? "" : " dark")}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: lightTheme ? "#fff" : "#333",
          borderRadius: "8px",
          boxShadow: lightTheme ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(0,0,0,0.5)"
        }}
      >
        <TextField
          label="Enter Group Name"
          variant="outlined"
          className={"search-box" + (lightTheme ? "" : " dark")}
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          fullWidth
          InputProps={{
            style: { border: 'none' }
          }}
          sx={{
            '& fieldset': { border: 'none' }
          }}
        />
        <TextField
          label="Enter Group Description"
          variant="outlined"
          className={"search-box" + (lightTheme ? "" : " dark")}
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          InputProps={{
            style: { border: 'none' }
          }}
          sx={{
            '& fieldset': { border: 'none' }
          }}
        />
        <IconButton
          className={"icon" + (lightTheme ? "" : " dark")}
          onClick={handleClickOpen}
          disabled={!isFormValid}
          style={{ alignSelf: "flex-end" }}
        >
          <DoneOutlineRoundedIcon />
        </IconButton>
      </div>
    </>
  );
}

export default CreateGroups;
// import React, { useState } from "react";
// import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   IconButton,
//   TextField,
// } from "@mui/material";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function CreateGroups() {
//   const lightTheme = useSelector((state) => state.themeKey);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const nav = useNavigate();

//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }

//   const user = userData.data;
//   const [groupName, setGroupName] = useState("");
//   const [groupDescription, setGroupDescription] = useState("");
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const createGroup = () => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.post(
//       "http://localhost:8080/chat/createGroup",
//       {
//         name: groupName,
//         description: groupDescription,
//         users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
//       },
//       config
//     );
//     nav("/app/groups");
//   };

//   const isFormValid = groupName !== "" && groupDescription !== "";

//   return (
//     <>
//       <div>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Do you want to create a Group Named " + groupName + "?"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               Description: {groupDescription}
//               <br />
//               This will create a group in which you will be the admin and
//               others will be able to join this group.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Disagree</Button>
//             <Button
//               onClick={() => {
//                 createGroup();
//                 handleClose();
//               }}
//               autoFocus
//             >
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//       <div
//         className={"createGroups-container" + (lightTheme ? "" : " dark")}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "16px",
//           padding: "16px",
//           width: "100%",
//           maxWidth: "500px",
//           margin: "0 auto",
//           backgroundColor: lightTheme ? "#fff" : "#333",
//           borderRadius: "8px",
//           boxShadow: lightTheme ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(0,0,0,0.5)"
//         }}
//       >
//         <TextField
//           label="Enter Group Name"
//           variant="outlined"
//           className={"search-box" + (lightTheme ? "" : " dark")}
//           value={groupName}
//           onChange={(e) => setGroupName(e.target.value)}
//           fullWidth
//         />
//         <TextField
//           label="Enter Group Description"
//           variant="outlined"
//           className={"search-box" + (lightTheme ? "" : " dark")}
//           value={groupDescription}
//           onChange={(e) => setGroupDescription(e.target.value)}
//           fullWidth
//           multiline
//           rows={4}
//         />
//         <IconButton
//           className={"icon" + (lightTheme ? "" : " dark")}
//           onClick={handleClickOpen}
//           disabled={!isFormValid}
//           style={{ alignSelf: "flex-end" }}
//         >
//           <DoneOutlineRoundedIcon />
//         </IconButton>
//       </div>
//     </>
//   );
// }

// export default CreateGroups;


// import React, { useState } from "react";
// import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   IconButton,
// } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { create } from "@mui/material/styles/createTransitions";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function CreateGroups() {
//   const lightTheme = useSelector((state) => state.themeKey);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   // console.log("Data from LocalStorage : ", userData);
//   const nav = useNavigate();
//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }
//   const user = userData.data;
//   const [groupName, setGroupName] = useState("");
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   console.log("User Data from CreateGroups : ", userData);

//   const createGroup = () => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.post(
//       "http://localhost:8080/chat/createGroup",
//       {
//         name: groupName,
//         users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
//       },
//       config
//     );
//     nav("/app/groups");
//   };

//   return (
//     <>
//       <div>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">
//             {"Do you want to create a Group Named " + groupName}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//               This will create a create group in which you will be the admin and
//               other will be able to join this group.
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Disagree</Button>
//             <Button
//               onClick={() => {
//                 createGroup();
//                 handleClose();
//               }}
//               autoFocus
//             >
//               Agree
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//       <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
//         <input
//           placeholder="Enter Group Name"
//           className={"search-box" + (lightTheme ? "" : " dark")}
//           onChange={(e) => {
//             setGroupName(e.target.value);
//           }}
//         />
//         <IconButton
//           className={"icon" + (lightTheme ? "" : " dark")}
//           onClick={() => {
//             handleClickOpen();
//             // createGroup();
//           }}
//         >
//           <DoneOutlineRoundedIcon />
//         </IconButton>
//       </div>
//     </>
//   );
// }

// export default CreateGroups;
