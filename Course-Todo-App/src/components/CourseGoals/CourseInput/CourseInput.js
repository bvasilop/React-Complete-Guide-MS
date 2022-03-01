import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const labelStyle = { color: !isValid ? "red" : "black" };
  const inputStyle = {
    borderColor: !isValid ? "red" : "#ccc",
    background: !isValid ? "salmon" : "transparent",
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={labelStyle}>Course Goal</label>
        <input
          style={inputStyle}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
