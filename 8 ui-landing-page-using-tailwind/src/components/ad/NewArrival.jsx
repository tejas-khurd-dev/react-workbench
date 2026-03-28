import airpods from "../../assets/images/airpods.png"

const NewArrival = () => {
  return (
    <div className="new-arrival">
      <div className="arrival-text">
        <h1 className="arrival-heading">New Arrivals</h1>
        <p className="arrival-para">
          Explore the latest innovations built for style, comfort, and seamless performance. Discover what’s new today.
        </p>
      </div>
      <img src={airpods} alt="" className="arrival-img" />
    </div>
  )
}

export default NewArrival