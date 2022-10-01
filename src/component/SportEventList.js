import classes from './SportEventList.module.css'
import SportEvents from './SportEvents'

export default function SportEventList({ event }) {
  let sports = [];
  event.map((e) => {
    if (e.classifications[0].segment.name === 'Sports') {
      sports.push(e);
    };
    return sports;
  });

  return (
    <div className={classes['event-list__container']}>
      {sports.map((sport) => {
        return <SportEvents
        key={sport.id}
          genre={sport.classifications[0].segment.name}
          venue={sport._embedded.venues[0].name}
          date={sport.dates.start.localDate}
          eventName={sport.name}
          time={sport.dates.start.localTime}
          url={sport.url}
        // image={event.images}
        />
      })}
    </div>
  )
}