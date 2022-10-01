import classes from './SportEventList.module.css'
import ArtsTheatreEvents from './ArtsTheatreEvents'

export default function ArtsTheatreEventList({event}) {
  let artsTheatre = []
  event.map((e) => {
    // console.log('EVENT', e.classifications[0].segment.name)
    if (e.classifications[0].segment.name === 'Arts & Theatre') {
      artsTheatre.push(e)
    }
    // console.log('artsTheatre', artsTheatre)
    return artsTheatre
  })

  return (
    <div className={classes['event-list__container']}>
      {artsTheatre.map((artTheatre) => {
        return <ArtsTheatreEvents
          // concert={concert}
        genre={artTheatre.classifications[0].segment.name}
        venue={artTheatre._embedded.venues[0].name}
        date={artTheatre.dates.start.localDate}
        eventName={artTheatre.name}
        time={artTheatre.dates.start.localTime}
        url={artTheatre.url}
        // image={event.images}
        />
      })}

      {/* {concerts.map(c=> <div>hey</div>)} */}
    </div>
  )
}