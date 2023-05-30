"use client";

// React
import { useState } from "react";

// Utils
import { fetcher } from "../utils/fetcher";

interface Film {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
}

export default function FilmsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  async function getFilmsData() {
    const filmsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);

    setFilms(filmsResponse.data);
    setIsLoading(false);
  }
  getFilmsData();

  return (
    <div>
      <>
        <h1 className="text-xl text-gray-700 ">Films</h1>

        {!isLoading &&
          films.map((film: Film) => (
          <div>
            {film.attributes.title}
            {film.attributes.description}
          </div>
          ))
        }
      </>
    </div>
  );
}