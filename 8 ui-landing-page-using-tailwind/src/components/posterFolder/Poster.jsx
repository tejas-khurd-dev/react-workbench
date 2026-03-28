import PosterBgImage from "./PosterBgImage";
import PosterContent from "./PosterContent";
import "./Poster.css"

const Poster = () => {
  return (
    <>
      <section className="poster-section">
        <PosterBgImage />

        <PosterContent />
        
      </section>
    </>
  );
};

export default Poster;