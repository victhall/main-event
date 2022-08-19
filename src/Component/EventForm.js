import { useState } from 'react'
import './UI/EventForm.css'

export default function EventForm() {
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const cityChangeHandler = function (event) {
    console.log(event.target.value)
    setEnteredCity(event.target.value)
  }

  const dateChangeHandler = function (event) {
    console.log(event.target.value)
    setEnteredDate(event.target.value)
  }

  return (
    <form>
      <div className="event-form">

        <div className="event-form__input">
          <input
            type="text"
            value={enteredCity}
            placeholder='City'
            onChange={cityChangeHandler} />
        </div>


        <div className="event-form__input">
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div>

        <div className="event-form__btn">
          <button
            className='event-search__btn'
            type="submit">Search</button>
        </div>

      </div>
    </form>
  )
}