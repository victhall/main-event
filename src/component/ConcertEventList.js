import ConcertEvents from './ConcertEvents';
import classes from './ConcertEventList.module.css'

export default function ConcertEventList({ event }) {
  let concerts = [];
  event.map((e) => {
    if (e.classifications[0].segment.name === 'Music') {
      concerts.push(e);
    };
    return concerts
  });

  return (
    <div className={classes['event-list__container']}>
      {concerts.map((concert) => {
        return <ConcertEvents
        key={concert.id}
          genre={concert.classifications[0].segment.name}
          venue={concert._embedded.venues[0].name}
          date={concert.dates.start.localDate}
          eventName={concert.name}
          time={concert.dates.start.localTime}
          url={concert.url}
        // image={event.images}
        />
      })}
    </div>
  )
}