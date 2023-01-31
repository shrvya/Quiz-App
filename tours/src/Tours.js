import Tourcard from "./TourCard";
export default function Tours({ props ,removeTour}) {
  
  return (
    <div className="tour-container">
      <h1 className="tour-comp">Tours comp </h1>
      <div className="card-body">
        {props.map((element) => (
          <Tourcard key={element.id} {...element} removeTour={removeTour}/>
        ))}
      </div>
    </div>
  );
}
