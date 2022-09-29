import classes from './Home.module.css'
import SeachBar from './SearchBar'

export default function Home() {
  return (
    <>
      <div className={classes['aurora-outer']}>
        <div className={classes['aurora-inner']}>
          <h1>Main Event.</h1>
          <h2>Concerts. Sports.<br />Arts &amp; Theatre</h2>
        </div>
      </div>
      <SeachBar />
    </>
  )
}