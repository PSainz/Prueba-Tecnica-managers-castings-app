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

const Contestant = ({ contestant, setCurrentId }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  // const classes = useStyles();

  return (
    <div className="contestant">
      <header className="contestant-header">
        {isAuthenticated ? (
          <>
            <Card className={""}>
              <CardMedia
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
                  {contestant.birth_date}
                </Typography>
              </div>
              <Typography
                className={""}
                gutterBottom
                variant="h5"
                component="h2"
              >
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
                  {/* <ModalEdit currentId={contestant._id} /> */}
                  EDIT
                </Button>
              </CardActions>
            </Card>
          </>
        ) : (
          <div className="Home">
            <header className="Home-header">
              <CardMedia
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
                  {contestant.birth_date}
                </Typography>
              </div>
              <Typography
                className={""}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {contestant.mobile_phone}
              </Typography>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {contestant.countrie}
                </Typography>
              </CardContent>
            </header>
          </div>
        )}
      </header>
    </div>
  );
};

export default Contestant;
