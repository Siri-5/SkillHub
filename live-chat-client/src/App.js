import React from 'react';
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import CreateGroups from "./Components/CreateGroups";
import Groups from "./Components/Groups";
import Learn from "./Components/Learn";
import PythonPage from "./Components/PythonPage";
import AptitudePage from "./Components/AptitudePage";
import WebDevelopmentPage from "./Components/WebDevelopmentPage";
import AcrylicPaintingPage from "./Components/AcrylicPaintingPage";
import CarnaticMusicPage from "./Components/CarnaticMusicPage";
import JavaPage from "./Components/JavaPage";
import AppDevelopment from "./Components/AppDevelopment";
import MachineLearning from "./Components/MachineLearning";
import DataScience from "./Components/DataScience";
import PencilSketching from "./Components/PencilSketching";
import AbstractPainting from "./Components/AbstractPainting";
import { useSelector } from "react-redux";

function App() {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={"App" + (lightTheme ? "" : "-dark")}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat/:_id" element={<ChatArea />} />
          <Route path="users" element={<Users />} />
          <Route path="groups" element={<Groups />} />
          <Route path="create-groups" element={<CreateGroups />} />
          <Route path="learn" element={<Learn />} />
          <Route path="python" element={<PythonPage />} />
          <Route path="aptitude" element={<AptitudePage />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route path="acrylic-painting" element={<AcrylicPaintingPage />} />
          <Route path="carnatic-music" element={<CarnaticMusicPage />} />
          <Route path="java" element={<JavaPage />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="data-science" element={<DataScience />} />
          <Route path="pencil-sketching" element={<PencilSketching />} />
          <Route path="abstract-painting" element={<AbstractPainting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import MainContainer from "./Components/MainContainer";
// import Login from "./Components/Login";
// import { Route, Routes } from "react-router-dom";
// import Welcome from "./Components/Welcome";
// import ChatArea from "./Components/ChatArea";
// import Users from "./Components/Users";
// import CreateGroups from "./Components/CreateGroups";
// import Groups from "./Components/Groups";
// import Learn from "./Components/Learn "; // Ensure correct import path
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);

//   return (
//     <div className={"App" + (lightTheme ? "" : "-dark")}>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="app" element={<MainContainer />}>
//           <Route path="welcome" element={<Welcome />} />
//           <Route path="chat/:_id" element={<ChatArea />} />
//           <Route path="users" element={<Users />} />
//           <Route path="groups" element={<Groups />} />
//           <Route path="create-groups" element={<CreateGroups />} />
//           <Route path="learn" element={<Learn />} /> {/* Ensure correct route */}
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import MainContainer from "./Components/MainContainer";
// import Login from "./Components/Login";
// import { Route, Routes } from "react-router-dom";
// import Welcome from "./Components/Welcome";
// import ChatArea from "./Components/ChatArea";
// import Users from "./Components/Users";
// import CreateGroups from "./Components/CreateGroups";
// import Groups from "./Components/Groups";
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const dispatch = useDispatch();
//   const lightTheme = useSelector((state) => state.themeKey);
//   return (
//     <div className={"App" + (lightTheme ? "" : "-dark")}>
//       {/* <MainContainer /> */}
//       {/* <Login /> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="app" element={<MainContainer />}>
//           <Route path="welcome" element={<Welcome />}></Route>
//           <Route path="chat/:_id" element={<ChatArea />}></Route>
//           <Route path="users" element={<Users />}></Route>
//           <Route path="groups" element={<Groups />}></Route>
//           <Route path="create-groups" element={<CreateGroups />}></Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
