import classes from './Home.module.css'
import SeachBar from './SearchBar'
import Events from './Events'
import ConcertEventList from './ConcertEventList'
import SportEventList from './SportEventList'
import ArtsTheatreEventList from './ArtsTheatreEventList'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [eventData, setEventData] = useState([]);

  // useEffect(() => {
  //   async function getEventData() {
  //     const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_TM_API_KEY}&city=toronto`)
  //     console.log(res.data)  
  //     setEventData(res.data)    
  //   }
  //   getEventData()
  // }, [])

  async function getEventData(enteredCity, enteredDate) {
    try {
      const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${enteredCity}&localStartDateTime=${enteredDate}&apikey=${process.env.REACT_APP_TM_API_KEY}`)
      const data = response.data._embedded.events;
      // console.log(data);
      setEventData([...data]);
    } catch (error) {
      console.error(error)
    };
  };
  // console.log('EVENT DATA PLZZ', eventData)

  //  const events = eventData.map((event) => {
  //     let concerts = []
  //     if (event.classifications[0].segment.name === 'music') {
  //       concerts.push(event)
  //     }
  //     return concerts
  //   })



  return (
    <>
      <div className={classes['aurora-outer']}>
        <div className={classes['aurora-inner']}>
          <h1>Main Event.</h1>
          <h2>Concerts. Sports.<br />Arts &amp; Theatre</h2>
          <SeachBar onSearch={getEventData} />
        </div>
      </div>

      {eventData &&
        <SportEventList
          event={eventData} />}

      {eventData && <ArtsTheatreEventList
        event={eventData} />}


      {/* {eventData && eventData.map((event) => {
        let concerts = []
        if (event.classifications[0].segment.name === 'music') {
          concerts.push(event)
          console.log('concerts inside', concerts)
        }
        <ConcertEventList concerts={concerts} />
      })} */}


      {/* //PREV WOKRING ONE */}
      {/* {eventData && eventData.map((event) => (
        <ConcertEventList
          event={event}
        />
      ))} */}

      {eventData &&
        <ConcertEventList
          event={eventData}
        />
      }

      {/* {eventData && eventData.filter((event) => {
        if (event.classifications[0].segment.name === 'Music') {
          return event
        }
      }).map((event) => {
        <ConcertEventList
          event={event}
        />
      })} */}
    </>
  )
}
