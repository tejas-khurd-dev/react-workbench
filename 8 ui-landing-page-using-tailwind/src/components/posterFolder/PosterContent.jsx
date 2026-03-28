import PosterWatches from "./PosterWatches";
import PosterWriteUp from "./PosterWriteUp";

const PosterContent = () => {
  return (
    <div className="poster-content">
      <PosterWriteUp />

      <PosterWatches />
      
    </div>
  )
}

export default PosterContent