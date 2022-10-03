import classes from './EventList.module.css'
import ArtsTheatreEvents from './ArtsTheatreEvents'

export default function ArtsTheatreEventList({ event }) {
  let artsTheatre = [];
  event.map((e) => {
    if (e.classifications[0].segment.name === 'Arts & Theatre') {
      artsTheatre.push(e);
    };
    return artsTheatre
  });

  return (
  
    <div className={classes['event-list__container']}>
      {artsTheatre.map((artTheatre) => {
        return <ArtsTheatreEvents
        key={artTheatre.id}
          genre={artTheatre.classifications[0].segment.name}
          venue={artTheatre._embedded.venues[0].name}
          date={artTheatre.dates.start.localDate}
          eventName={artTheatre.name}
          time={artTheatre.dates.start.localTime}
          url={artTheatre.url}
          image={artTheatre.images[1].url}
        />
      })}

    </div>
  )
}