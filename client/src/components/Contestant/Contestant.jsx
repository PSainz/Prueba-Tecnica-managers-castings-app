import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";

import { deleteContestant } from "../../actions/contestants";
// import useStyles from "./styles";

const Contestant = ({ contestant, setCurrentId }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  return (
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
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(contestant._id)}
        >
          {/* <MoreHorizIcon fontSize="default" /> */}
        </Button>
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
          {contestant.country}
        </Typography>
      </CardContent>
      <CardActions className={""}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteContestant(contestant._id))}
        >
          BYE BYE MADAFAKA
        </Button>
      </CardActions>
    </Card>
  );
};

export default Contestant;
