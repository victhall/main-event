import classes from './Events.module.css'
import { GoLocation } from "react-icons/go";
import { FiClock } from "react-icons/fi";

export default function ConcertEvents(props) {
  return (
    <div className={classes['event-container']}>
      <h1>CONCERTSSSSS</h1>
      <img src='https://www.okayplayer.com/wp-content/uploads/2022/06/GettyImages-1392695968.jpg' />
      <div className={classes['event-details']}>
        <p>{props.date}</p>
        <h1>{props.eventName}</h1>
        <p><GoLocation /> {props.venue}</p>
        <p><FiClock /> {props.time}</p>
        <button>Buy Ticket</button>
      </div>
    </div>
  )
}