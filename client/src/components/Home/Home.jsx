import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./../Navbar/Navbar.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login.jsx";
import { LogoutButton } from "../Logout/Logout.jsx";
import { Button } from "@mui/material";

function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="Home">
      <header className="Home-header">
        {isAuthenticated ? (
          <>
            <Button>
              <Link to="/view-and-edit-contestants">Edit contestants</Link>
            </Button>
            <Button>
              {" "}
              <Link to="/create-contestant">Create Contestant</Link>
            </Button>
            <LogoutButton />
          </>
        ) : (
          <div className="Home">
            <header className="Home-header">
              <LoginButton />
              <Button>
                <Link to="/create-contestant">Create Contestant</Link>
              </Button>
              <Button>
                <Link to="/view-contestants">See all contestants</Link>
              </Button>
            </header>
          </div>
        )}
      </header>
    </div>
  );
}

export default Home;
