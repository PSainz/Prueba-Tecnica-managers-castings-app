import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Contestant from "../Contestant/Contestant";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  // root: {
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   color: 'white',
  //   height: 48,
  //   padding: '0 30px',
  // },
  mainContainer: {
    marginTop: "50px",
    margin: "4px, 4px",
    padding: "4px",
    backgroundColor: "transparent",
    width: "500px",
    height: "600px",
    overflowX: "hidden",
    overflowY: "auto",
    textAlign: "justify",
  },
  // smMargin: {
  //   margin: theme.spacing(1),
  // },
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
            {/* <img src={contestant.selectedFile} style={{ width: "100%" }} /> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Contestants;
