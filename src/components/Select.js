import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import "./components.css";
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    width: "150px",
    border: "none",
    color: "#a2ffe2",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor: "transparent",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <form className={classes.root} autoComplete="off">
      <NativeSelect
        value={age}
        onChange={handleChange}
        input={
          <BootstrapInput
            name="age"
            placeholder="Select a Currency"
            id="age-customized-native-simple"
          />
        }
      >
        <option className="selectitems" value="" disabled>
          Select a Currency
        </option>
        <option className="selectitems" value={10}>
          Ten
        </option>
        <option className="selectitems" value={20}>
          Twenty
        </option>
        <option className="selectitems" value={30}>
          Thirty
        </option>
      </NativeSelect>
    </form>
  );
}
