import classes from './SearchBar.module.css'
export default function SeachBar() {
  return (
    <div className={classes.form}>
      <form>
        <input
          className={classes['name-input']}
          placeholder='Search by name'
          type='text'
        />
        <input
        className={classes['date-input']}
          type='date'
        />
        <input
        className={classes['location-input']}
          placeholder='Location'
          type='text'
        />
        <input
        className={classes['event-input']}
          placeholder='Type of event'
          type='text'
        />
        <button>Search</button>
      </form>
    </div>
  )
}