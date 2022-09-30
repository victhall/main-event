import classes from './Home.module.css'
import SeachBar from './SearchBar'
import Events from './Events'
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
    console.log('ENTERED DATE', enteredDate)
    try {
      const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${enteredCity}&localStartDateTime=${enteredDate}&apikey=${process.env.REACT_APP_TM_API_KEY}`)
      const data = response.data._embedded.events;
      console.log(data);
      setEventData(data);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className={classes['aurora-outer']}>
        <div className={classes['aurora-inner']}>
          <h1>Main Event.</h1>
          <h2>Concerts. Sports.<br />Arts &amp; Theatre</h2>
          <SeachBar onSearch={getEventData} />
        </div>
      </div>
      <Events />
    </>
  )
}

// localStartDateTime