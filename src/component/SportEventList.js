import classes from './SportEventList.module.css'
import SportEvents from './SportEvents'

export default function SportEventList({event}) {
  let sports = []
  event.map((e) => {
    // console.log('EVENT', e.classifications[0].segment.name)
    if (e.classifications[0].segment.name === 'Sports') {
      sports.push(e)
    }
    // console.log('sports', sports)
    return sports
  })

  return (
    <div className={classes['event-list__container']}>
  
      {sports.map((sport) => {
        return <SportEvents
          // sport={sport}
        genre={sport.classifications[0].segment.name}
        venue={sport._embedded.venues[0].name}
        date={sport.dates.start.localDate}
        eventName={sport.name}
        time={sport.dates.start.localTime}
        url={sport.url}
        // image={event.images}
        />
      })}

      {/* {concerts.map(c=> <div>hey</div>)} */}
    </div>
  )
}