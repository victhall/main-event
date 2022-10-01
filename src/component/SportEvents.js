import classes from './ConcertEventList'

export default function SportEvents(props) {
  console.log('props', props)
  return (
    <div className={classes['event-container']}>
      <h1>SPORTSSS</h1>
      <img src='https://www.okayplayer.com/wp-content/uploads/2022/06/GettyImages-1392695968.jpg' />
      <div className={classes['event-details']}>
        <p>{props.date}</p>

        <h1>{props.eventName}</h1>

        <p> {props.venue}</p>
        <p>{props.time}</p>
        <button>Buy Ticket</button>
      </div>
    </div>
  )
}