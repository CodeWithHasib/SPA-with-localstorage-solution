import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard";

const Home = ({ handleWatchTime }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <div className="movie-container row">
        {movies.map((movie) => (
          <SingleCard
            handleWatchTime={handleWatchTime}
            movie={movie}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
