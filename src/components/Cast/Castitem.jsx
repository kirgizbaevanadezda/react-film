import React from "react";
import moduleName from "./img.png";
function Castitem({ name, profile_path }) {
  return (
    <div>
      <img
        className="castimg"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : moduleName
        }
        alt="АКТОРСКИЙ СОСТАВ"
      />
      <p>{name}</p>
    </div>
  );
}

export default Castitem;
