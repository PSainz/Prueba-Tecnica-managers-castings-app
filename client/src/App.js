import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from "./components/Home/Home.jsx";
// import Contestants from "./components/Contestants/Contestants.jsx";
// import CreateContestant from "./components/CreateContestant.jsx";
// import { getSpots } from "./actions/spots";



const App = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();
//   // const classes = useStyles();

//   useEffect(() => {
//     dispatch(getSpots());
//   }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        {/* <ul>
                      <li><Link to="/">Home</Link></li>
                <li><Link to="/spots">Spots</Link></li>
                <li><Link to="/create-spot">Create Spot</Link></li>
             </ul> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          {/* <Route exact path="/contestants" element={<Contestants />}></Route>
          <Route exact path="/create-contestant" element={<CreateContestant />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;