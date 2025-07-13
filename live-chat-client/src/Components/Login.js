import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toaster from "./Toaster";

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "", about: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/login/",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid User name or Password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/user/register/",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already Taken, Please take another one",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="primary" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        {showLogin && (
          <div className="login-box">
            <p className="login-text" style={{ color: "#21BCC2" }}>Login to your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="primary"
              name="name"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  loginHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="primary"
              name="password"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  loginHandler();
                }
              }}
            />
            <Button
              variant="outlined"
              style={{ color: "#fff", backgroundColor: "#005AD4" }}
              onClick={loginHandler}
            >
              Login
            </Button>
            <p style={{ color: "#21BCC2" }}>
              Don't have an Account?{" "}
              <span
                className="hyper"
                style={{ color: "#005AD4", cursor: "pointer" }}
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign Up
              </span>
            </p>
            {logInStatus ? (
              <Toaster key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
          </div>
        )}
        {!showLogin && (
          <div className="login-box">
            <p className="login-text" style={{ color: "#21BCC2" }}>Create your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="primary"
              name="name"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
              color="primary"
              name="email"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="primary"
              name="password"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="about-text-field"
              label="Interests"
              variant="outlined"
              color="primary"
              name="about"
              multiline
              rows={4}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <Button
              variant="outlined"
              style={{ color: "#fff", backgroundColor: "#005AD4" }}
              onClick={signUpHandler}
            >
              Sign Up
            </Button>
            <p style={{ color: "#21BCC2" }}>
              Already have an Account?{" "}
              <span
                className="hyper"
                style={{ color: "#005AD4", cursor: "pointer" }}
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log in
              </span>
            </p>
            {signInStatus ? (
              <Toaster key={signInStatus.key} message={signInStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default Login;


// import React, { useState } from "react";
// import logo from "../Images/live-chat_512px.png";
// import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Toaster from "./Toaster";

// function Login() {
//   const [showlogin, setShowLogin] = useState(false);
//   const [data, setData] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const [logInStatus, setLogInStatus] = React.useState("");
//   const [signInStatus, setSignInStatus] = React.useState("");

//   const navigate = useNavigate();

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const loginHandler = async (e) => {
//     setLoading(true);
//     console.log(data);
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const response = await axios.post(
//         "http://localhost:8080/user/login/",
//         data,
//         config
//       );
//       console.log("Login : ", response);
//       setLogInStatus({ msg: "Success", key: Math.random() });
//       setLoading(false);
//       localStorage.setItem("userData", JSON.stringify(response));
//       navigate("/app/welcome");
//     } catch (error) {
//       setLogInStatus({
//         msg: "Invalid User name or Password",
//         key: Math.random(),
//       });
//     }
//     setLoading(false);
//   };

//   const signUpHandler = async () => {
//     setLoading(true);
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };

//       const response = await axios.post(
//         "http://localhost:8080/user/register/",
//         data,
//         config
//       );
//       console.log(response);
//       setSignInStatus({ msg: "Success", key: Math.random() });
//       navigate("/app/welcome");
//       localStorage.setItem("userData", JSON.stringify(response));
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       if (error.response.status === 405) {
//         setLogInStatus({
//           msg: "User with this email ID already Exists",
//           key: Math.random(),
//         });
//       }
//       if (error.response.status === 406) {
//         setLogInStatus({
//           msg: "User Name already Taken, Please take another one",
//           key: Math.random(),
//         });
//       }
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={loading}
//       >
//         <CircularProgress color="secondary" />
//       </Backdrop>
//       <div className="login-container">
//         <div className="image-container">
//           <img src={logo} alt="Logo" className="welcome-logo" />
//         </div>
//         {showlogin && (
//           <div className="login-box">
//             <p className="login-text">Login to your Account</p>
//             <TextField
//               onChange={changeHandler}
//               id="standard-basic"
//               label="Enter User Name"
//               variant="outlined"
//               color="secondary"
//               name="name"
//               onKeyDown={(event) => {
//                 if (event.code == "Enter") {
//                   // console.log(event);
//                   loginHandler();
//                 }
//               }}
//             />
//             <TextField
//               onChange={changeHandler}
//               id="outlined-password-input"
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//               color="secondary"
//               name="password"
//               onKeyDown={(event) => {
//                 if (event.code == "Enter") {
//                   // console.log(event);
//                   loginHandler();
//                 }
//               }}
//             />
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={loginHandler}
//               isLoading
//             >
//               Login
//             </Button>
//             <p>
//               Don't have an Account ?{" "}
//               <span
//                 className="hyper"
//                 onClick={() => {
//                   setShowLogin(false);
//                 }}
//               >
//                 Sign Up
//               </span>
//             </p>
//             {logInStatus ? (
//               <Toaster key={logInStatus.key} message={logInStatus.msg} />
//             ) : null}
//           </div>
//         )}
//         {!showlogin && (
//           <div className="login-box">
//             <p className="login-text">Create your Account</p>
//             <TextField
//               onChange={changeHandler}
//               id="standard-basic"
//               label="Enter User Name"
//               variant="outlined"
//               color="secondary"
//               name="name"
//               helperText=""
//               onKeyDown={(event) => {
//                 if (event.code == "Enter") {
//                   // console.log(event);
//                   signUpHandler();
//                 }
//               }}
//             />
//             <TextField
//               onChange={changeHandler}
//               id="standard-basic"
//               label="Enter Email Address"
//               variant="outlined"
//               color="secondary"
//               name="email"
//               onKeyDown={(event) => {
//                 if (event.code == "Enter") {
//                   // console.log(event);
//                   signUpHandler();
//                 }
//               }}
//             />
//             <TextField
//               onChange={changeHandler}
//               id="outlined-password-input"
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//               color="secondary"
//               name="password"
//               onKeyDown={(event) => {
//                 if (event.code == "Enter") {
//                   // console.log(event);
//                   signUpHandler();
//                 }
//               }}
//             />
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={signUpHandler}
//             >
//               Sign Up
//             </Button>
//             <p>
//               Already have an Account ?
//               <span
//                 className="hyper"
//                 onClick={() => {
//                   setShowLogin(true);
//                 }}
//               >
//                 Log in
//               </span>
//             </p>
//             {signInStatus ? (
//               <Toaster key={signInStatus.key} message={signInStatus.msg} />
//             ) : null}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Login;
