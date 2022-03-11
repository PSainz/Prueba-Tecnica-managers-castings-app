import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import ContestantSimple from "../Contestant/ContestantSimple";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  actionDiv: {
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const ContestantsSimple = () => {
  const contestants = useSelector((state) => state.contestants);
  console.log(contestants, "Contestants");
  const classes = useStyles();

  return !contestants.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.mainContainer}>
      <div className={classes.actionDiv}>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Button
          component={Link}
          to="/create-contestant"
          variant="contained"
          color="primary"
        >
          Create contestant
        </Button>
      </div>

      <Grid className={""} container alignItems="stretch" spacing={3}>
        {contestants.map((contestant) => (
          <Grid key={contestant._id} item xs={12} sm={6} md={6}>
            <ContestantSimple contestant={contestant} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContestantsSimple;
