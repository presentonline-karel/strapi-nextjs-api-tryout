export default function Films(films) {
  return (
    <>
      <ul>
        {films && films.data.map((film) => {
          return (
            <li key={film.id}>
              <h2>{film.name}</h2>
              <p>{film.description}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
}
