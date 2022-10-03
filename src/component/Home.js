import classes from './Home.module.css'
import SeachBar from './SearchBar'
import ConcertEventList from './ConcertEventList'
import SportEventList from './SportEventList'
import ArtsTheatreEventList from './ArtsTheatreEventList'
import { useState } from 'react'
import axios from 'axios'
import { BsChevronCompactDown } from "react-icons/bs";

export default function Home() {
  const [eventData, setEventData] = useState([]);

  async function getEventData(enteredCity, enteredDate) {
    const date = enteredDate;
    const startTime = `T00:00:00`;
    const endTime = `T23:59:59`;
    const localStartDateTime = `${date}${startTime},${date}${endTime}`
    try {
      const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${enteredCity}&localStartDateTime=${localStartDateTime}&apikey=${process.env.REACT_APP_TM_API_KEY}`)
      const data = response.data._embedded.events;
      const uniqueEvents = [];
      data.map(x => uniqueEvents.filter(y => y.name === x.name).length > 0 ? null : uniqueEvents.push(x));
      setEventData([...uniqueEvents]);
      console.log(uniqueEvents)
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <>
      <SeachBar onSearch={getEventData} />
      <div className={classes['btn-thing']}>
        <BsChevronCompactDown className={classes['scroll-icon']} />
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
