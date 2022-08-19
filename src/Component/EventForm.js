import { useState } from 'react'
import './UI/EventForm.css'

export default function EventForm() {
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const cityChangeHandler = function(event) {
    setEnteredCity(event.target.value)
  }

  const dateChangeHandler = function(value) {
    setEnteredDate(event.target.value)
  }

  return (
    <form>
      <div className="event-form">

        <div className="event-form__input">
          <input
            type="text"
            value={enteredCity}
            placeholder='City' />
        </div>


        <div className="event-form__input">
          <input
            type="date"
            value={enteredDate}
          />
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