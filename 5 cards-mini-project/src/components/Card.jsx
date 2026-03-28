import {Bookmark} from "lucide-react"

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt="icon" />
        <button><span className="save">Save</span> <Bookmark /></button>
      </div>

      <div className="center">
        <h3>{props.company} <span id="time">{props.datePosted}</span></h3>
        <h2 id="role">{props.post}</h2>

        <div className="tag-container">
          <h4 className="tag">{props.tag1}</h4>
          <h4 className="tag">{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <hr />

        <div className="bottom-value-container">
          <div className="price-and-location">
            <h3>{props.pay}</h3>
            <h3 className="location">{props.location}</h3>
          </div>

          <div>
            <button className="apply-button">Apply Now</button>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Card