import './UI/EventForm.css'

export default function EventForm() {
  return (
    <form>
      <div className="event-form">

        <div className="event-form__input">
          <input
            type="text"
            placeholder='City' />
        </div>


        <div className="event-form__input">
          <input
            type="date"
          />
        </div>

        <div className="event-form__btn">
          <button
            type="submit">Search</button>
        </div>

      </div>
    </form>
  )

}