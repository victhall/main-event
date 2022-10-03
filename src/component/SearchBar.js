import { useState } from 'react';
import classes from './SearchBar.module.css';

export default function SeachBar(props) {
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHandler = function (e) {
    setEnteredDate(e.target.value);
  };

  const cityChangeHandler = function (e) {
    setEnteredCity(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    props.onSearch(enteredCity, enteredDate);
    setEnteredCity('');
    setEnteredDate('');
  };

  return (
    <>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <input
            className={classes['city-input']}
            placeholder='City'
            type='text'
            value={enteredCity}
            onChange={cityChangeHandler}
            required
          />
          <input
            className={classes['date-input']}
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
            required
            min={new Date().toISOString().split("T")[0]}
          />
          <button className={classes['search-btn']}>Search</button>
        </form>
      </div>
    </>
  );
};