import classes from './Home.module.css'
import SeachBar from './SearchBar'
import Events from './Events'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [eventData, setEventData] = useState([])


  // useEffect(() => {
  //   async function getEventData() {
  //     const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_TM_API_KEY}&city=toronto`)
  //     console.log(res.data)  
  //     setEventData(res.data)    
  //   }
  //   getEventData()
  // }, [])

  const search = (enteredCity) => {
axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_TM_API_KEY}&city=${enteredCity}`)
.then(response => {
  const info = response.data
  console.log(info)
  setEventData(info)
}).catch(error => {
  console.log(error)
})
  }


  return (
    <>
      <div className={classes['aurora-outer']}>
        <div className={classes['aurora-inner']}>
          <h1>Main Event.</h1>
          <h2>Concerts. Sports.<br />Arts &amp; Theatre</h2>
          <SeachBar search={search}/>
        </div>
      </div>
      <Events />
    </>
  )
}

// localStartDateTime