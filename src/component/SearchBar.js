export default function SeachBar() {
  return (
    <form>
      <input
        placeholder='Search by name'
        type='text'
      />
      <input
        type='date'
      />
      <input
      placeholder='Location'
        type='text'
      />
            <input
      placeholder='Type of event'
        type='text'
      />
      <button>Search</button>
    </form>
  )
}