import classes from './Events.module.css';

export default function ConcertEvents(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div className={classes['event-container']}>
        <img src={props.image} alt='cover for a specific concert event'/>
        <div className={classes['event-details']}>
          <p className={classes.genre}>{props.genre}</p>
          <h1>{props.eventName}</h1>
          <p className={classes.venue}>{props.venue}</p>
          <p className={classes.time}>{props.date} @ {props.time}</p>
        </div>
      </div>
    </a>
  );
};