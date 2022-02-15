import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  //ex. 1 (most common)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Ex. using multiple combined states
  // const [userInput, setUserInput,] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    // ex.1 (most common)
    setEnteredTitle(event.target.value);
  };

  // ex. 2
  // setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   })

  // ex. 3 latest state snapshot
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });

  const amountChangeHandler = (event) => {
    //ex. 1 (most common)
    setEnteredAmount(event.target.value);
  };

  //ex. 2
  // setUserInput({
  //   ...userInput,
  //   enteredAmount: event.target.value,
  // })
  // ex. 3
  // setUserInput((prevState) => {});

  const dateChangeHandler = (event) => {
    //ex. 1 (most common)
    setEnteredDate(event.target.value);
  };

  //ex. 2
  // setUserInput({
  //   ...userInput,
  //   enteredDate: event.target.value,
  // })

  // ex. 3
  // setUserInput((prevState) => {});

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
