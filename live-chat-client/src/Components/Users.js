import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import logo from "../Images/live-chat_512px.png";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function Users() {
  const { refresh, setRefresh } = useContext(myContext);
  const lightTheme = useSelector((state) => state.themeKey);
  const [users, setUsers] = useState([]);
  const [hoveredUser, setHoveredUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  const dispatch = useDispatch();

  if (!userData) {
    console.log("User not Authenticated");
    nav(-1);
  }

  useEffect(() => {
    console.log("Users refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:8080/user/fetchUsers", config).then((data) => {
      console.log("UData refreshed in Users panel ");
      setUsers(data.data);
    });
  }, [refresh, userData.data.token]);

  const handleMouseEnter = (user) => {
    setHoveredUser(user);
  };

  const handleMouseLeave = () => {
    setHoveredUser(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Update search query
  };

  // Filter users based on search query in interests
  const filteredUsers = users.filter((user) =>
    user.about.toLowerCase().includes(searchQuery) // Check interests against search query
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            alt="Live Chat Logo"
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Users
          </p>
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="Search Interests"
            className={"search-box" + (lightTheme ? "" : " dark")}
            value={searchQuery}
            onChange={handleSearchChange} // Handle search input changes
          />
        </div>
        <div className="ug-list">
          {filteredUsers.map((user, index) => (
            <div key={index} style={{ position: "relative" }}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={"list-tem" + (lightTheme ? "" : " dark")}
                onMouseEnter={() => handleMouseEnter(user)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  console.log("Creating chat with ", user.name);
                  const config = {
                    headers: {
                      Authorization: `Bearer ${userData.data.token}`,
                    },
                  };
                  axios.post(
                    "http://localhost:8080/chat/",
                    {
                      userId: user._id,
                    },
                    config
                  ).then(() => {
                    dispatch(refreshSidebarFun());
                  });
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {user.name}
                </p>
              </motion.div>
              {hoveredUser === user && (
                <motion.div
                  className={"hovered-user-details" + (lightTheme ? "" : " dark")}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>Interests: {user.about}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
// import React, { useContext, useEffect, useState } from "react";
// import "./myStyles.css";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import logo from "../Images/live-chat_512px.png";
// import { useDispatch, useSelector } from "react-redux";
// import { AnimatePresence, motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import { myContext } from "./MainContainer";

// function Users() {
//   const { refresh, setRefresh } = useContext(myContext);
//   const lightTheme = useSelector((state) => state.themeKey);
//   const [users, setUsers] = useState([]);
//   const [hoveredUser, setHoveredUser] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(""); // New state for search query
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const nav = useNavigate();
//   const dispatch = useDispatch();

//   if (!userData) {
//     console.log("User not Authenticated");
//     nav(-1);
//   }

//   useEffect(() => {
//     console.log("Users refreshed");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${userData.data.token}`,
//       },
//     };
//     axios.get("http://localhost:8080/user/fetchUsers", config).then((data) => {
//       console.log("UData refreshed in Users panel ");
//       setUsers(data.data);
//     });
//   }, [refresh, userData.data.token]);

//   const handleMouseEnter = (user) => {
//     setHoveredUser(user);
//   };

//   const handleMouseLeave = () => {
//     setHoveredUser(null);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value.toLowerCase()); // Update search query
//   };

//   // Filter users based on search query
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery)
//   );

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0 }}
//         transition={{
//           duration: "0.3",
//         }}
//         className="list-container"
//       >
//         <div className={"ug-header" + (lightTheme ? "" : " dark")}>
//           <img
//             src={logo}
//             alt="Live Chat Logo"
//             style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
//           />
//           <p className={"ug-title" + (lightTheme ? "" : " dark")}>
//             Available Users
//           </p>
//           <IconButton
//             className={"icon" + (lightTheme ? "" : " dark")}
//             onClick={() => {
//               setRefresh(!refresh);
//             }}
//           >
//             <RefreshIcon />
//           </IconButton>
//         </div>
//         <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//           <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
//             <SearchIcon />
//           </IconButton>
//           <input
//             placeholder="Search"
//             className={"search-box" + (lightTheme ? "" : " dark")}
//             value={searchQuery}
//             onChange={handleSearchChange} // Handle search input changes
//           />
//         </div>
//         <div className="ug-list">
//           {filteredUsers.map((user, index) => (
//             <div key={index} style={{ position: "relative" }}>
//               <motion.div
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={"list-tem" + (lightTheme ? "" : " dark")}
//                 onMouseEnter={() => handleMouseEnter(user)}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={() => {
//                   console.log("Creating chat with ", user.name);
//                   const config = {
//                     headers: {
//                       Authorization: `Bearer ${userData.data.token}`,
//                     },
//                   };
//                   axios.post(
//                     "http://localhost:8080/chat/",
//                     {
//                       userId: user._id,
//                     },
//                     config
//                   ).then(() => {
//                     dispatch(refreshSidebarFun());
//                   });
//                 }}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {user.name}
//                 </p>
//               </motion.div>
//               {hoveredUser === user && (
//                 <motion.div
//                   className={"hovered-user-details" + (lightTheme ? "" : " dark")}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <p>Interests: {user.about}</p>
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Users;



// import React, { useContext, useEffect, useState } from "react";
// import "./myStyles.css";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import logo from "../Images/live-chat_512px.png";
// import { useDispatch, useSelector } from "react-redux";
// import { AnimatePresence, motion } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import { myContext } from "./MainContainer";

// function Users() {
//   // const [refresh, setRefresh] = useState(true);
//   const { refresh, setRefresh } = useContext(myContext);

//   const lightTheme = useSelector((state) => state.themeKey);
//   const [users, setUsers] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   // console.log("Data from LocalStorage : ", userData);
//   const nav = useNavigate();
//   const dispatch = useDispatch();

//   if (!userData) {
//     console.log("User not Authenticated");
//     nav(-1);
//   }

//   useEffect(() => {
//     console.log("Users refreshed");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${userData.data.token}`,
//       },
//     };
//     axios.get("http://localhost:8080/user/fetchUsers", config).then((data) => {
//       console.log("UData refreshed in Users panel ");
//       setUsers(data.data);
//       // setRefresh(!refresh);
//     });
//   }, [refresh]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0 }}
//         transition={{
//           duration: "0.3",
//         }}
//         className="list-container"
//       >
//         <div className={"ug-header" + (lightTheme ? "" : " dark")}>
//           <img
//             src={logo}
//             style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
//           />
//           <p className={"ug-title" + (lightTheme ? "" : " dark")}>
//             Available Users
//           </p>
//           <IconButton
//             className={"icon" + (lightTheme ? "" : " dark")}
//             onClick={() => {
//               setRefresh(!refresh);
//             }}
//           >
//             <RefreshIcon />
//           </IconButton>
//         </div>
//         <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//           <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
//             <SearchIcon />
//           </IconButton>
//           <input
//             placeholder="Search"
//             className={"search-box" + (lightTheme ? "" : " dark")}
//           />
//         </div>
//         <div className="ug-list">
//           {users.map((user, index) => {
//             return (
//               <motion.div
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={"list-tem" + (lightTheme ? "" : " dark")}
//                 key={index}
//                 onClick={() => {
//                   console.log("Creating chat with ", user.name);
//                   const config = {
//                     headers: {
//                       Authorization: `Bearer ${userData.data.token}`,
//                     },
//                   };
//                   axios.post(
//                     "http://localhost:8080/chat/",
//                     {
//                       userId: user._id,
//                     },
//                     config
//                   );
//                   dispatch(refreshSidebarFun());
//                 }}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {user.name}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Users;
