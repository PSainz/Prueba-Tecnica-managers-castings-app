import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createContestant, updateContestant } from "../../actions/contestants";
import { fetchSwapiCharacters } from "../../api/swapi";
import { TextField, MenuItem, Button, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import moment from "react-moment";
// import ReactDatePicker from "react-datepicker";
import { alpha } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

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

  const [character, setCharacter] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date.toLocaleDateString());
    setSelectedDate(date.toLocaleDateString());
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
      country: "",
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
      clear();
    } else {
      contestantData.birth_date = selectedDate;
      dispatch(createContestant(contestantData));
      navigate("/contestants");
      clear();
    }
  };

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            openTo="year"
            label="Birth date*"
            disableFuture
            // minDate="2020-01-01"
            // minDate="2021-01-01"
            value={selectedDate || ""}
            onChange={handleDateChange}
            // renderInput={(selectedDate) => <TextField {...selectedDate} />}
            renderInput={(selectedDate) => (
              <TextField
                {...selectedDate}
                helperText={selectedDate?.inputProps?.placeholder}
              />
            )}
          />
        </LocalizationProvider>

        {/* <ReactDatePicker
          dateFormat="d MMM yyyy"
          minDate={new Date()}
          selected={
            contestantData.birth_date?.value
              ? new Date(contestantData.birth_date.value)
              : null
          }
          showTimeSelect={false}
          todayButton="Today"
          dropdownMode="select"
          isClearable
          placeholderText="Click to select time"
          shouldCloseOnSelect
        /> */}
        {/* <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Birth date*"
              variant="inline"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div> */}
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
          {character.map((item) => {
            return (
              <MenuItem key={item.name} value={item.name || ""}>
                {item.name}
              </MenuItem>
            );
          })}
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
