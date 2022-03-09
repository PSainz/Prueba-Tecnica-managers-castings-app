import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Contestant from "../Contestant/Contestant";
import { Button } from "@mui/material";
// import useStyles from "./styles";

const Contestants = ({ setCurrentId }) => {
  const contestants = useSelector((state) => state.contestants);
  console.log(contestants, "Contestants");
  // const classes = useStyles();

  return !contestants.length ? (
    <CircularProgress />
  ) : (
    <div>
      <Grid className={""} container alignItems="stretch" spacing={3}>
        {contestants.map((contestant) => (
          <Grid key={contestant._id} item xs={12} sm={6} md={6}>
            <Contestant contestant={contestant} setCurrentId={setCurrentId} />
            <img src={contestant.selectedFile} style={{ width: "100%" }} />
            <Button
              className={""}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Show
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Contestants;
