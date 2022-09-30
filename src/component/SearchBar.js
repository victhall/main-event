import { useState } from 'react'
import classes from './SearchBar.module.css'

export default function SeachBar(props) {
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const cityChangeHandler = function(e) {
    setEnteredCity(e.target.value);

  }

  const submitHandler = function (e) {
    e.preventDefault();

    props.search(enteredCity)
    setEnteredCity('');

  }


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
        {/* <input
          className={classes['date-input']}
          type='date'
        /> */}
        <button>Search</button>
      </form>
    </div>
  )
}