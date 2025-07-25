
import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import axios from "axios";
import { myContext } from "./MainContainer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School"; // Import the new icon

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const { refresh } = useContext(myContext);
  const [conversations, setConversations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConversations, setFilteredConversations] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    console.log("User not Authenticated");
    navigate("/");
  }

  const user = userData.data;

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:8080/chat/", config).then((response) => {
      setConversations(response.data);
      setFilteredConversations(response.data); // Initialize filtered conversations
    });
  }, [user.token, refresh]);

  useEffect(() => {
    // Filter conversations based on search term
    if (searchTerm === "") {
      setFilteredConversations(conversations);
    } else {
      const filtered = conversations.filter((conversation) => {
        const otherUser = conversation.users.find(user => user._id !== userData.data._id);
        return otherUser.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredConversations(filtered);
    }
  }, [searchTerm, conversations, userData.data._id]);

  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton onClick={() => navigate("/app/welcome")}>
            <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => navigate("/app/users")}>
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          {/* Removed AddCircleIcon */}
          <IconButton onClick={() => navigate("/app/learn")}>
            <SchoolIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme ? (
              <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />
            ) : (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={"search-box" + (lightTheme ? "" : " dark")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {filteredConversations.map((conversation, index) => {
          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }
          const otherUser = conversation.users.find(user => user._id !== userData.data._id);
          return (
            <div
              key={index}
              className="conversation-container"
              onClick={() =>
                navigate("chat/" + conversation._id + "&" + otherUser.name)
              }
            >
              <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                {otherUser.name[0]}
              </p>
              <p className={"con-title" + (lightTheme ? "" : " dark")}>
                {otherUser.name}
              </p>
              <p className="con-lastMessage">
                {conversation.latestMessage ? conversation.latestMessage.content : "No previous Messages, click here to start a new chat"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;

// import React, { useContext, useEffect, useState } from "react";
// import { IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../Features/themeSlice";
// import axios from "axios";
// import { myContext } from "./MainContainer";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import SearchIcon from "@mui/icons-material/Search";
// import SchoolIcon from "@mui/icons-material/School"; // Import the new icon

// function Sidebar() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   const { refresh } = useContext(myContext);
//   const [conversations, setConversations] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredConversations, setFilteredConversations] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("userData"));

//   if (!userData) {
//     console.log("User not Authenticated");
//     navigate("/");
//   }

//   const user = userData.data;

//   useEffect(() => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.get("http://localhost:8080/chat/", config).then((response) => {
//       setConversations(response.data);
//       setFilteredConversations(response.data); // Initialize filtered conversations
//     });
//   }, [user.token, refresh]);

//   useEffect(() => {
//     // Filter conversations based on search term
//     if (searchTerm === "") {
//       setFilteredConversations(conversations);
//     } else {
//       const filtered = conversations.filter((conversation) => {
//         const otherUser = conversation.users.find(user => user._id !== userData.data._id);
//         return otherUser.name.toLowerCase().includes(searchTerm.toLowerCase());
//       });
//       setFilteredConversations(filtered);
//     }
//   }, [searchTerm, conversations, userData.data._id]);

//   return (
//     <div className="sidebar-container">
//       <div className={"sb-header" + (lightTheme ? "" : " dark")}>
//         <div className="other-icons">
//           <IconButton onClick={() => navigate("/app/welcome")}>
//             <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/users")}>
//             <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/groups")}>
//             <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/create-groups")}>
//             <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => dispatch(toggleTheme())}>
//             {lightTheme ? (
//               <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             ) : (
//               <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             )}
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/learn")}>
//             <SchoolIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton
//             onClick={() => {
//               localStorage.removeItem("userData");
//               navigate("/");
//             }}
//           >
//             <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//         </div>
//       </div>
//       <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//         <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
//           <SearchIcon />
//         </IconButton>
//         <input
//           placeholder="Search"
//           className={"search-box" + (lightTheme ? "" : " dark")}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
//         {filteredConversations.map((conversation, index) => {
//           if (conversation.users.length === 1) {
//             return <div key={index}></div>;
//           }
//           const otherUser = conversation.users.find(user => user._id !== userData.data._id);
//           return (
//             <div
//               key={index}
//               className="conversation-container"
//               onClick={() =>
//                 navigate("chat/" + conversation._id + "&" + otherUser.name)
//               }
//             >
//               <p className={"con-icon" + (lightTheme ? "" : " dark")}>
//                 {otherUser.name[0]}
//               </p>
//               <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                 {otherUser.name}
//               </p>
//               <p className="con-lastMessage">
//                 {conversation.latestMessage ? conversation.latestMessage.content : "No previous Messages, click here to start a new chat"}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;





// import React, { useContext, useEffect, useState } from "react";
// import { IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../Features/themeSlice";
// import axios from "axios";
// import { myContext } from "./MainContainer";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import SearchIcon from "@mui/icons-material/Search";
// import SchoolIcon from "@mui/icons-material/School"; // Import the new icon

// function Sidebar() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   const { refresh } = useContext(myContext); // Removed setRefresh as it was not used
//   const [conversations, setConversations] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("userData"));

//   if (!userData) {
//     console.log("User not Authenticated");
//     navigate("/");
//   }

//   const user = userData.data;

//   useEffect(() => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.get("http://localhost:8080/chat/", config).then((response) => {
//       setConversations(response.data);
//     });
//   }, [user.token, refresh]);

//   return (
//     <div className="sidebar-container">
//       <div className={"sb-header" + (lightTheme ? "" : " dark")}>
//         <div className="other-icons">
//           <IconButton onClick={() => navigate("/app/welcome")}>
//             <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/users")}>
//             <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/groups")}>
//             <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/create-groups")}>
//             <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => dispatch(toggleTheme())}>
//             {lightTheme ? (
//               <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             ) : (
//               <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             )}
//           </IconButton>
//           <IconButton onClick={() => navigate("/app/learn")}>
//             <SchoolIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton
//             onClick={() => {
//               localStorage.removeItem("userData");
//               navigate("/");
//             }}
//           >
//             <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//         </div>
//       </div>
//       <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//         <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
//           <SearchIcon />
//         </IconButton>
//         <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
//       </div>
//       <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
//         {conversations.map((conversation, index) => {
//           if (conversation.users.length === 1) {
//             return <div key={index}></div>;
//           }
//           const otherUser = conversation.users.find(user => user._id !== userData.data._id);
//           return (
//             <div
//               key={index}
//               className="conversation-container"
//               onClick={() =>
//                 navigate("chat/" + conversation._id + "&" + otherUser.name)
//               }
//             >
//               <p className={"con-icon" + (lightTheme ? "" : " dark")}>
//                 {otherUser.name[0]}
//               </p>
//               <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                 {otherUser.name}
//               </p>
//               <p className="con-lastMessage">
//                 {conversation.latestMessage ? conversation.latestMessage.content : "No previous Messages, click here to start a new chat"}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



// import React, { useContext, useEffect, useState } from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { IconButton } from "@mui/material";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../Features/themeSlice";
// import axios from "axios";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import { myContext } from "./MainContainer";

// function Sidebar() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   // const refresh = useSelector((state) => state.refreshKey);
//   const { refresh, setRefresh } = useContext(myContext);
//   console.log("Context API : refresh : ", refresh);
//   const [conversations, setConversations] = useState([]);
//   // console.log("Conversations of Sidebar : ", conversations);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   // console.log("Data from LocalStorage : ", userData);
//   const nav = useNavigate();

// import React, { useContext, useEffect, useState } from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { IconButton } from "@mui/material";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import SearchIcon from "@mui/icons-material/Search";
// import SchoolIcon from "@mui/icons-material/School"; // Import the new icon
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../Features/themeSlice";
// import axios from "axios";
// import { refreshSidebarFun } from "../Features/refreshSidebar";
// import { myContext } from "./MainContainer";

// function Sidebar() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   const { refresh, setRefresh } = useContext(myContext);
//   const [conversations, setConversations] = useState([]);
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const nav = useNavigate();

//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }

//   const user = userData.data;

//   useEffect(() => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.get("http://localhost:8080/chat/", config).then((response) => {
//       setConversations(response.data);
//     });
//   }, [refresh]);

//   return (
//     <div className="sidebar-container">
//       <div className={"sb-header" + (lightTheme ? "" : " dark")}>
//         <div className="other-icons">
//           <IconButton onClick={() => nav("/app/welcome")}>
//             <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("users")}>
//             <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("groups")}>
//             <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("create-groups")}>
//             <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => navigate("learn")}> {/* New icon */}
//             <SchoolIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton onClick={() => dispatch(toggleTheme())}>
//             {lightTheme ? (
//               <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             ) : (
//               <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             )}
//           </IconButton>
//           <IconButton onClick={() => {
//             localStorage.removeItem("userData");
//             navigate("/");
//           }}>
//             <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//         </div>
//       </div>
//       <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//         <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
//           <SearchIcon />
//         </IconButton>
//         <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
//       </div>
//       <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
//         {conversations.map((conversation, index) => {
//           if (conversation.users.length === 1) {
//             return <div key={index}></div>;
//           }
//           if (conversation.latestMessage === undefined) {
//             return (
//               <div key={index} onClick={() => setRefresh(!refresh)}>
//                 <div
//                   key={index}
//                   className="conversation-container"
//                   onClick={() => navigate("chat/" + conversation._id + "&" + conversation.users[1].name)}
//                 >
//                   <p className={"con-icon" + (lightTheme ? "" : " dark")}>
//                     {conversation.users[1].name[0]}
//                   </p>
//                   <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                     {conversation.users[1].name}
//                   </p>
//                   <p className="con-lastMessage">
//                     No previous Messages, click here to start a new chat
//                   </p>
//                 </div>
//               </div>
//             );
//           } else {
//             return (
//               <div
//                 key={index}
//                 className="conversation-container"
//                 onClick={() => navigate("chat/" + conversation._id + "&" + conversation.users[1].name)}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>
//                   {conversation.users[1].name[0]}
//                 </p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {conversation.users[1].name}
//                 </p>
//                 <p className="con-lastMessage">
//                   {conversation.latestMessage.content}
//                 </p>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
