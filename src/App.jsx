import './App.css'
import MovieCard from "./components/MovieCard"
function App() {
  const movieNumber = 1;
  return (
    <>
    {movieNumber === 1 ?
    (< MovieCard movie={{title: "Sayuru's film", release_date: "2025"}}/>) :
    (< MovieCard movie={{title: "Sagara's film", release_date: "2023"}}/>)
    }
    </> 
  );
}
export default App
