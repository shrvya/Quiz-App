import Tours from "./Tours";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Button from "react-bootstrap/Button";
function App() {
  const [load, setload] = useState(false);
  const [tours, settour] = useState([]);

  const url = "https://course-api.com/react-tours-project";
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    settour(newTours)
  }
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      settour(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  
  }, []);

  if (load) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          
          <Button variant="primary" style={{position:"relative",top: "3rem",right: "10%" }}  className='btn' onClick={() => fetchData()}>
            Refresh 
          </Button>
          
        </div>
      </main>
    )
  }
  return (
    <main>
      <div>
        <Tours props={tours} removeTour={removeTour} />
      </div>
    </main>
  );
}

export default App;
