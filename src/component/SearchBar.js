import { useState } from 'react'
import classes from './SearchBar.module.css'
import moment from 'moment';

export default function SeachBar(props) {
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const dateChangeHandler = function (e) {
    let date = e.target.value;
    const startTime = `T00:00:00`;
    const endTime = `T23:59:59`;
    const localStartDateTime = `${date}${startTime},${date}${endTime}`
    setEnteredDate(localStartDateTime);
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
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <input
          className={classes['city-input']}
          placeholder='City'
          type='text'
          value={enteredCity}
          onChange={cityChangeHandler}
        />
        <input
          className={classes['date-input']}
          type='date'
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <button>Search</button>
      </form>
    </div>
  )
}