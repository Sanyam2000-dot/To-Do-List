import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "./List";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
      marginTop: "2rem",
    },
  },
}));

export default function TextArea() {
  const [input, SetInput] = useState("");
  const [list, updateList] = useState([]);

  const onChangeHandler = (event) => {
    const newInput = event.target.value;
    SetInput(newInput);
  };

  const onClickHandler = () => {
    updateList([...list, { input: input, key: Math.random() * 1000 }]);
    SetInput("");
    console.log(list);
  };
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Enter Task"
          variant="outlined"
          value={input}
          onChange={onChangeHandler}
        />
        <Button variant="outlined" color="primary" onClick={onClickHandler}>
          Add Task
        </Button>
      </form>
      <List list={list} input={input} />
    </div>
  );
}
