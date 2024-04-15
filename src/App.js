import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [place, setPlace] = useState(0);
  const {id, name, image, description} = data[place];
  
  const previousPlace = () => {
     setPlace((place) => {
      place--;
      if (place < 0) {
        return data.length - 1;
      }
      return place;
     })
  } 
  const nextPlace = () => {
    setPlace((place) => {
      place++;
      if (place > data.length - 1) {
        place = 0;
      }
      return place;
    })
  }
  return (
    <div >
      <div className='container'>
        <h1>MOST VISITED PLACES IN THE WORLD</h1>
      </div>
      <div className='container'>
        <img src={image} width="500px" alt="place"/>
      </div>
      <div className='container'>
        <h2>{id}. {name}</h2>
      </div>
      <div className='container'>
        <p>{description}</p>
      </div>
      <div className='btn'>
        <button onClick={previousPlace}>Previous</button>
        <button onClick={nextPlace}>Next</button>
      </div>

    </div>
  );
}

export default App;
