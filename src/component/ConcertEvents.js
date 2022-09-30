import classes from './ConcertEvents.module.css'
import { BsCalendar4Week } from "react-icons/bs";

export default function Card(props) {
  return (
    <>
<p>{props.eventName}</p>
<p>{props.venue}</p>
<p>{props.date}</p>
<p>{props.time}</p>
</>
  )
}