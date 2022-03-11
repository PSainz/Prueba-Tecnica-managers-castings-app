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
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});

const Contestant = ({ contestant, setCurrentId }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    <div className="contestant">
      {isAuthenticated ? (
        <>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={
                contestant.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              // title={post.title}
            />
            <div className={classes.overlay}>
              <Typography variant="h6">
                {contestant.first_name + " " + contestant.last_name}
              </Typography>
            </div>
            <div className={classes.overlay2}>
              <Typography variant="h6">
                {contestant.first_name + " " + contestant.last_name}
              </Typography>
            </div>
            <div className={classes.details}>
              {contestant.birth_date}
              {contestant.mobile_phone}
              {contestant.countrie}
              {contestant.email}
              {contestant.star_wars_character}
            </div>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {contestant.star_wars_character}
            </Typography>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {contestant.countrie}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                size="small"
                color="primary"
                onClick={() => setCurrentId(contestant._id)}
              >
                {" "}
                EDIT{" "}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(deleteContestant(contestant._id))}
              >
                DELETE
              </Button>
            </CardActions>
          </Card>
          {/* <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={contestant.selectedFile || ""}
              title={contestant.first_name}
            />
            <div className={classes.overlay}>
              <Typography variant="h6">
                {contestant.first_name + " " + contestant.last_name}
              </Typography>
            </div>
            <div className={classes.details}>
              <Typography variant="body2" color="textSecondary" component="h2">
                {contestant.birth_date}
              </Typography>
              </div>
              <Typography className={""} gutterBottom variant="h5" component="h2">
              {contestant.mobile_phone}
            </Typography>
            </div>
            <Typography className={""} gutterBottom variant="h5" component="h2">
              {contestant.mobile_phone}
            </Typography>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {contestant.countrie}
              </Typography>
            </CardContent>
            <CardActions className={""}>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(deleteContestant(contestant._id))}
              >
                DELETE
              </Button>
              <Button
                style={{ color: "green" }}
                size="small"
                onClick={() => setCurrentId(contestant._id)}
              >
                EDIT
              </Button>
            </CardActions>
          </Card> */}
        </>
      ) : (
        <div className="Home">
          {/* <CardMedia
            className={""}
            image={contestant.selectedFile || ""}
            title={contestant.first_name}
          />
          <div className={""}>
            <Typography variant="h6">
              {contestant.first_name + " " + contestant.last_name}
            </Typography>
          </div>
          <div className={""}>
            <Typography variant="body2" color="textSecondary" component="h2">
              {contestant.birth_date}
            </Typography>
          </div>
          <Typography className={""} gutterBottom variant="h5" component="h2">
            {contestant.mobile_phone}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {contestant.countrie}
            </Typography>
          </CardContent> */}
        </div>
      )}
    </div>
  );
};

export default Contestant;
