import classes from './Events.module.css'

export default function ConcertEvents(props) {
  return (
    <div className={classes['event-container']}>
      <img src='https://www.okayplayer.com/wp-content/uploads/2022/06/GettyImages-1392695968.jpg' />
      <div className={classes['event-details']}>
      <p className={classes['genre-music']}>{props.genre}</p>
        <h1>{props.eventName}</h1>
        <p className={classes.venue}>{props.venue}</p>
        <p className={classes.time}>{props.date} @ {props.time}</p>
      </div>
    </div>
  )
}