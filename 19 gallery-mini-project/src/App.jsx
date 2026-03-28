import { useEffect, useState } from "react";
import axios from "axios";
import { MoveLeft, MoveRight } from "lucide-react";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [pageNumber, setpageNumber] = useState(2);

  useEffect(() => {
    getData();
  }, [pageNumber]);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=20`
    );
    setuserData(response.data);
  };

  let printUserData = (
    <p className="gallery-loading-text">
      Loading photos...
    </p>
  );

  if (userData.length > 0) {
    printUserData = userData.map((e, idx) => (
      <a href={e.url} target="blank" key={idx}>
        <div className="gallery-card">
          <img
            src={e.download_url}
            className="gallery-card-img"
          />
          <div className="gallery-card-footer">
            <h2 className="gallery-card-author">
              {e.author}
            </h2>
          </div>
        </div>
      </a>
    ));
  }

  return (
    <div className="gallery-wrapper">

      <div className="gallery-header">
        <div className="gallery-header-badge">
          {pageNumber-1}
        </div>
        <h1 className="gallery-header-title">Photo Gallery</h1>
      </div>

      <div className="gallery-grid">
        {printUserData}
      </div>

      <div className="gallery-pagination">
        <button
          style={{opacity: pageNumber==2?0.6:1}}
          className="gallery-btn"
          onClick={() => {
              setpageNumber(prev => (prev === 2 ? 50 : prev - 1)); // wraps 1 → 50
              setuserData([]);
            }}
        >
          <MoveLeft size={16} /> Previous
        </button>

        <span className="gallery-pagination-info">Page {pageNumber-1}</span>

        <button
        style={{opacity: pageNumber==50?0.6:1}}
          className="gallery-btn"
          onClick={() => {
            if (pageNumber == 50){
              setpageNumber(2);
              setuserData([]);
            }else{
              setpageNumber(prev => prev+1)
              setuserData([]);
            }            
    
          }}
        >
          Next <MoveRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default App;