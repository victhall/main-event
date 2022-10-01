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
      const uniqueEvents = [];
      data.map(x => uniqueEvents.filter(y => y.name == x.name).length > 0 ? null : uniqueEvents.push(x));
      setEventData([...uniqueEvents]);
    } catch (error) {
      console.error(error);
    };
  };

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
        <ConcertEventList
          event={eventData} />}
      {eventData &&
        <SportEventList
          event={eventData} />}
      {eventData &&
        <ArtsTheatreEventList
          event={eventData} />}
    </>
  )
}
