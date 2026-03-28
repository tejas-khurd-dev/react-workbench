import posterWatch1 from "../../assets/images/poster-watch-1.png";
import posterWatch2 from "../../assets/images/poster-watch-2.png";
import posterWatch3 from "../../assets/images/poster-watch-3.png";

const PosterWatches = () => {
  return (
    <div className="poster-watches">
      <img src={posterWatch1} alt="" className="poster-watch-img" />
      <img src={posterWatch2} alt="" className="poster-watch-img" />
      <img src={posterWatch3} alt="" className="poster-watch-img poster-watch-img--sm" />
    </div>
  )
}

export default PosterWatches