import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createContestant, updateContestant } from "../../actions/contestants";
import { TextField, MenuItem, Button, Typography } from "@mui/material";

const CreateContestant = ({ currentId, setCurrentId }) => {
  const [contestantData, setContestantData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    mobile_phone: "",
    country: "",
    email: "",
    star_wars_character: "",
    selectedFile: "",
  });

  const contestant = useSelector((state) =>
    currentId
      ? state.contestants.find((first_name) => first_name._id === currentId)
      : null
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (contestant) setContestantData(contestant);
  }, [contestant]);

  const clear = () => {
    setCurrentId();
    setContestantData({
      first_name: "",
      last_name: "",
      birth_date: "",
      mobile_phone: "",
      country: "",
      email: "",
      star_wars_character: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (currentId === 0) {
    //   dispatch(createContestant(contestantData));
    //   clear();
    // } else {
    //   dispatch(updateContestant(currentId, contestantData));
    //   clear();
    // }
    if (currentId) {
      dispatch(updateContestant(currentId, contestantData));
      clear();
    } else {
      dispatch(createContestant(contestantData));
      navigate("/contestants");
      clear();
    }
  };

  //   const waveForms = [
  //     { value: "Hollow", text: "Hollow" },
  //     { value: "Fat", text: "Fat" },
  //     { value: "Mellow", text: "Mellow" },
  //   ];

  return (
    <div>
      <form
        autoComplete="off"
        noValidate
        className={""}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId
            ? `Editing "${contestant.first_name}"`
            : "Creating contestant"}
        </Typography>
        <TextField
          name="first_name"
          variant="outlined"
          label="First name*"
          fullWidth
          value={contestantData.first_name || ""}
          onChange={(e) =>
            setContestantData({ ...contestantData, first_name: e.target.value })
          }
        />
        <TextField
          name="last_name"
          variant="outlined"
          label="Last name*"
          fullWidth
          value={contestantData.last_name || ""}
          onChange={(e) =>
            setContestantData({ ...contestantData, last_name: e.target.value })
          }
        />
        <TextField
          name="birth_date"
          variant="outlined"
          label="Birth date*"
          fullWidth
          value={contestantData.birth_date || ""}
          onChange={(e) =>
            setContestantData({ ...contestantData, birth_date: e.target.value })
          }
        />
        <TextField
          name="mobile_phone"
          variant="outlined"
          label="Mobile phone*"
          fullWidth
          value={contestantData.mobile_phone || ""}
          onChange={(e) =>
            setContestantData({
              ...contestantData,
              mobile_phone: e.target.value,
            })
          }
        />
        <TextField
          name="country"
          variant="outlined"
          label="Country of residence*"
          fullWidth
          value={contestantData.country || ""}
          onChange={(e) =>
            setContestantData({ ...contestantData, country: e.target.value })
          }
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email*"
          fullWidth
          value={contestantData.email || ""}
          onChange={(e) =>
            setContestantData({ ...contestantData, email: e.target.value })
          }
        />
        <TextField
          name="star_wars_character"
          variant="outlined"
          fullWidth
          select
          label="Choose Star Wars character*"
          value={contestantData.star_wars_character}
          onChange={(e) =>
            setContestantData({
              ...contestantData,
              star_wars_character: e.target.value,
            })
          }
        >
          {/* {ratings.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value || ""}>
                {item.text}
              </MenuItem>
            );
          })} */}
        </TextField>
        <div className={""}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setContestantData({ ...contestantData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <Button
        className={""}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default CreateContestant;
