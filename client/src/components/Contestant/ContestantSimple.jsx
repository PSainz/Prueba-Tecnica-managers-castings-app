import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import ModalEdit from "../ModalEdit/ModalEdit.jsx";
import { deleteContestant } from "../../actions/contestants";
import { useAuth0 } from "@auth0/auth0-react";
// import useStyles from "./styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    border: "1px solid yellow",
    position: "relative",
    margin: "15px",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  container: {
    border: "1px solid yellow",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
});

const ContestantSimple = ({ contestant }) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            contestant.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
        />
        <div className={classes.overlay}>
          <Typography variant="h6">
            {contestant.first_name + " " + contestant.last_name}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Typography variant="h6">{contestant.star_wars_character}</Typography>
        </div>
        <div className={classes.details}>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {contestant.birth_date}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {contestant.email}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {contestant.mobile_phone}
          </Typography>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h6"
          >
            {contestant.countrie}
          </Typography>
        </div>
        <div className={classes.details}></div>
      </Card>
    </div>
  );
};

export default ContestantSimple;
