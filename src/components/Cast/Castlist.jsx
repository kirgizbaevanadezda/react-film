import { useState, useEffect } from "react";
import axios from "axios";
import Castitem from "./Castitem";

function Castlist({ id }) {
  const [cast, setCast] = useState([]);
  const castitem = cast.map((item) => <Castitem key={item.id} {...item} />);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cd0424926ff3c009921c9fa2e813a15c&language=en-US`
          )
          .then((res) => {
            const data = res.data.cast;
            setCast(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="cast_box container">
      <ul className="list__">{castitem}</ul>
    </div>
  );
}

export default Castlist;
