import React from "react";

import {Tile} from '../tile/Tile';

export const TileList = ({arrayList}) => {
  return (
    <div>
      {arrayList.map( (value,index) => (
        <Tile 
          value={value}
          key={index}
        />
      ))}
    </div>
  );
};
