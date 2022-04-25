import './App.css';
import { useState } from "react";
import { data } from "./data"

function App() {
  const [films, setFilms] = useState(data);
  const [showMore, setShowMore] = useState (false);
  const removeFilm = (id) =>{
    let newFilms = films.filter(item => item.id !==id);
    setFilms(newFilms);
  }
  return (
    <div>
    <div className='container'>
    <h1>Top {films.length} best films</h1>
    </div>
    {films.map((element =>{
      const {id, title, year, country, image, description} = element;
      return(
        <div key={id}>
          <div className='container'>
            <h2>{id}. {title}</h2>
          </div>
          <div className='container'>
            <p>Year: {year}</p>
          </div>
          <div className='container'>
            <p>{country}</p>
          </div>
          <div className='container'>
<img src={image} alt="films"/>
          </div>
          <div className='container description'>
            <p>{showMore ? description : description.substring(0,300) + "..."}
            <button className='showmore' onClick={() => setShowMore(!showMore)}>{showMore? "Show less" : "Show more"}</button></p>
          </div>
          <div className='container'>
<button className='btn' onClick ={()=> removeFilm(id)}>I'v seen it. Delete this one</button>
          </div>
        </div>
      )
      }))}
      <div className='container'>
        <button className='btn delete' onClick={()=> setFilms([])}>Delete all</button>
      </div>
    </div>
  );
}

export default App;
