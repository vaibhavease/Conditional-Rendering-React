import MovieCard from './Components/MovieCard'
import './App.css'

function App() {
 const hot = false ;


  
 
  return (<div>

     { hot ? (
        <MovieCard movie = {{ title: "Disha Patani" , release: 2027}}/>
     ) : (
       <MovieCard movie = {{ title: "Dus ka Dum", release: 2022}}/>
     ) }
     
      </div>
      
  )

 
}

export default App
