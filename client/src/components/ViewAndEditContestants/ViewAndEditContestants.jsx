import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Grow, Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import Contestants from "../Contestants/Contestants.jsx";
import CreateContestant from "../CreateContestant/CreateContestant.jsx";
import { getContestants } from "../../actions/contestants.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({});

const ViewAndEditContestants = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getContestants());
  }, [currentId, dispatch]);

  return (
    <div>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Contestants
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CreateContestant
                  currentId={currentId}
                  setCurrentId={setCurrentId}
                />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default ViewAndEditContestants;
