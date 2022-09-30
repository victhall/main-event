import ConcertEvents from './ConcertEvents';

export default function ConcertEventList({ event }) {
  return (
    <ConcertEvents
      genre={event.classifications[0].segment.name}
      venue={event._embedded.venues[0].name}
      date={event.dates.start.localDate}
      eventName={event.name}
      time={event.dates.start.localTime}
      url={event.url}
    />
  )
}