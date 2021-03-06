import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createContestant, updateContestant } from "../../actions/contestants";
import { fetchSwapiCharacters } from "../../api/swapi";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { countries } from "../../utils/countries.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
  },
  container: {
    border: "1px solid yellow",
    marginTop: "20px",
    width: "80%",
    margin: "auto",
    padding: "10px",
  },
  alignCenter: {
    textAlign: "center",
    padding: "10px",
  },
  fileInput: {
    width: "97%",
    margin: "10px 10px",
  },
  fileInputDate: {
    width: "97% !important",
    margin: "10px 0",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "10px",
  },
});

const CreateContestant = ({ currentId, setCurrentId }) => {
  const [contestantData, setContestantData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    mobile_phone: "",
    countrie: "",
    email: "",
    star_wars_character: "",
    selectedFile: "",
  });

  const classes = useStyles();

  const [character, setCharacter] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const myMaxDate = new Date("2004-01-01");
  const myMinDate = new Date("1960-01-01");

  const handleDateChange = (date) => {
    if (date !== null) {
      console.log(date.toLocaleDateString());
      setSelectedDate(date.toLocaleDateString());
    } else {
      console.log("null");
      setSelectedDate("");
    }
  };

  const contestant = useSelector((state) =>
    currentId
      ? state.contestants.find((first_name) => first_name._id === currentId)
      : null
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSwapiCharacters().then((response) => setCharacter(response));
    if (contestant) setContestantData(contestant);
  }, [contestant]);

  const clear = () => {
    setCurrentId();
    setContestantData({
      first_name: "",
      last_name: "",
      birth_date: "",
      mobile_phone: "",
      countrie: "",
      email: "",
      star_wars_character: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      contestantData.birth_date = selectedDate;
      dispatch(updateContestant(currentId, contestantData));
      navigate("/view-contestants");
      clear();
    } else {
      contestantData.birth_date = selectedDate;
      dispatch(createContestant(contestantData));
      navigate("/view-contestants");
      clear();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Button
          component={Link}
          to="/view-contestants"
          variant="contained"
          color="primary"
        >
          View contestants
        </Button>
      </div>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" className={classes.alignCenter}>
          {currentId
            ? `Editing "${contestant.first_name}"`
            : "Creating contestant"}
        </Typography>
        <TextField
          className={classes.fileInput}
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
          className={classes.fileInput}
          name="last_name"
          variant="outlined"
          label="Last name*"
          fullWidth
          value={contestantData.last_name || ""}
          onChange={(e) =>
            setContestantData({ ...contestantData, last_name: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            className={classes.fileInputDate}
          >
            <DatePicker
              className={classes.fileInputDate}
              variant="outlined"
              emptyLabel="Birth date (+18)*"
              openTo="year"
              label="Birth date (+18)*"
              disableFuture
              minDate={myMinDate}
              maxDate={myMaxDate}
              value={selectedDate || ""}
              onChange={handleDateChange}
              renderInput={(selectedDate) => (
                <TextField
                  {...selectedDate}
                  helperText={selectedDate?.inputProps?.placeholder}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <TextField
          className={classes.fileInput}
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
          className={classes.fileInput}
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
          className={classes.fileInput}
          name="star_wars_character"
          variant="outlined"
          fullWidth
          select
          label="Countrie of residence*"
          // value={contestantData.countrie}
          value={"Spain"}
          onChange={() =>
            setContestantData({
              ...contestantData,
              countrie: "Spain",
            })
          }
        >
          {countries.map((item) => {
            return (
              <MenuItem key={item.name} value={item.name || ""}>
                {item.name}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          className={classes.fileInput}
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
          {character.map((item) => {
            return (
              <MenuItem key={item.name} value={item.name || ""}>
                {item.name}
              </MenuItem>
            );
          })}
        </TextField>
        <div className={classes.fileInput}>
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
