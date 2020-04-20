import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import * as Strap from 'reactstrap'
import MovieCard from './MovieCard'
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const id = useParams()
 console.log(props)
 
  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id.id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
 
  
  

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }
  

  if (!movie) {
    return <div>please...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <Strap.Card>
      <Strap.CardTitle>{movie.title}</Strap.CardTitle>
  <Strap.CardSubtitle>{movie.director}</Strap.CardSubtitle>
  
  <Strap.CardBody>
   <Strap.CardText>
      <ul>
      {movie.stars.map(el=>{
      return <li>{el} </li>
     
     })}
      </ul>
   </Strap.CardText>

  </Strap.CardBody>
  <Strap.Button color='primary' onClick={saveMovie}>Save To List </Strap.Button>
    </Strap.Card>
  
  );
}

export default Movie;
