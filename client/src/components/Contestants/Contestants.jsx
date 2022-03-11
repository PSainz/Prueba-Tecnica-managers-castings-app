import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Contestant from "../Contestant/Contestant";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "50px",
    margin: "4px, 4px",
    padding: "4px",
    backgroundColor: "transparent",
    width: "600px",
    height: "600px",
    overflowX: "auto",
    overflowY: "auto",
    textAlign: "justify",
  },
  actionDiv: {
    textAlign: "center",
  },
});

const Contestants = ({ setCurrentId }) => {
  const contestants = useSelector((state) => state.contestants);
  console.log(contestants, "Contestants");
  const classes = useStyles();

  return !contestants.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.mainContainer}>
      <Grid className={""} container alignItems="stretch" spacing={3}>
        {contestants.map((contestant) => (
          <Grid key={contestant._id} item xs={12} sm={6} md={6}>
            <Contestant contestant={contestant} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Contestants;
