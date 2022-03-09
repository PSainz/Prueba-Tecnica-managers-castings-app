import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import Contestants from "../components/Contestants/Contestants";
import CreateContestant from "../components/CreateContestant/CreateContestant";
import { getContestants } from "../actions/contestants";

const Prueba = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  //   const classes = useStyles();

  useEffect(() => {
    dispatch(getContestants());
  }, [currentId, dispatch]);

  return (
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
              <Contestants setCurrentId={setCurrentId} />
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
  );
};

export default Prueba;
