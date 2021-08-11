import React from "react";

export const Tile = ({value}) => {
  const tempArray = Object.values(value)

  return (
    <div className="tile-container">
      {tempArray.map( (element,index)=> {
       return index ? 
        <p className="tile" key={index}>{element}</p> :
        <p className="tile-title" key={index}>{element}</p>;
      })}
    </div>
  );
};
