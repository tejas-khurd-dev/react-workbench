import watch from "../../assets/images/watch.png"

const BestDeal = () => {
  return (
    <div className="best-deal">
      <div className="deal-text">
        <h1 className="deal-heading">Best Deals</h1>
        <p className="deal-para">
          Grab top tech at unbeatable prices. Premium quality, sleek design, and powerful performance — all for less.
        </p>
      </div>
      <img src={watch} alt="" className="deal-img" />
    </div>
  )
}

export default BestDeal