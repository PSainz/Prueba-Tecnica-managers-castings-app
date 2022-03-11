import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./../Navbar/Navbar.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login.jsx";
import { LogoutButton } from "../Logout/Logout.jsx";
import { Button } from "@mui/material";
import "./Home.css";

function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="home">
      {isAuthenticated ? (
        <>
          <div class="buttons-login">
            <Button
              component={Link}
              to="/view-and-edit-contestants"
              variant="contained"
              color="primary"
            >
              Edit contestants
            </Button>
            <Button
              component={Link}
              to="/create-contestant"
              variant="contained"
              color="primary"
            >
              Create Contestant
            </Button>
            <LogoutButton />
          </div>
        </>
      ) : (
        <div className="Home">
          <div class="buttons-login">
            <Button
              component={Link}
              to="/create-contestant"
              variant="contained"
              color="primary"
            >
              Create Contestant
            </Button>
            <Button
              component={Link}
              to="/view-contestants"
              variant="contained"
              color="primary"
            >
              See all contestants
            </Button>
            <LoginButton />
          </div>
        </div>
      )}
      <div>
        <h1 className="welcome">WELCOME TO MANAGERS CASTING APP!</h1>
      </div>
    </div>
  );
}

export default Home;
