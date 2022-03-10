import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from "./components/Home/Home.jsx";
import Contestants from "./components/Contestants/Contestants.jsx";
import CreateContestant from "./components/CreateContestant/CreateContestant.jsx";
import ViewAndEditContestants from "./components/ViewAndEditContestants/ViewAndEditContestants.jsx"
import { getContestants } from "./actions/contestants";




const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getContestants());
  }, [currentId, dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
           <Route exact path="/view-contestants" element={<Contestants setCurrentId={setCurrentId} />}></Route>
           <Route exact path="/create-contestant" element={<CreateContestant currentId={currentId} setCurrentId={setCurrentId}/>}></Route> 
           <Route exact path="/view-and-edit-contestants" element={<ViewAndEditContestants currentId={currentId} setCurrentId={setCurrentId}/>}></Route> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;