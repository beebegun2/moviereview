import './App.css';
import Nav from '../src/components/nav';
import Thanksgiving from '../src/components/thanksgiving';
import Movie from '../src/components/movie';
import list from '../src/components/movielist';


export default function App() {
  const movies = list.map(movie => {
    return(
      <Movie 
        key={movie.id}
        movie={movie}
      />
    )
  })

  
  return (
      <>
        <Nav />
        <Thanksgiving />
        <section className="card--container">
          {movies}
        </section> 
      </>
  );
}
