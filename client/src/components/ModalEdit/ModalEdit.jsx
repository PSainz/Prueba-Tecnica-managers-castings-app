import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateContestant from "../CreateContestant/CreateContestant.jsx";
import { useDispatch } from "react-redux";
import { getContestants } from "../../actions/contestants";

const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "100%",
  height: "80%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
};

export default function BasicModal() {
  const [currentId, setCurrentId] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContestants());
  }, [currentId, dispatch]);

  console.log(currentId, "currentId modal");

  return (
    <div>
      <Button
        className={""}
        variant="contained"
        color="primary"
        size="small"
        type="fire"
        onClick={handleOpen}
      >
        Show More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateContestant currentId={currentId} setCurrentId={setCurrentId} />
        </Box>
      </Modal>
    </div>
  );
}
