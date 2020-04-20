import React from 'react';
import {Link} from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom'



function SavedList(props){  
  const {path,url} = useRouteMatch()
  return(
  <div className="saved-list">

    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`movies/${movie.id}`}  className="saved-movie">{movie.title}</Link >
    ))}
    <Link to='/' className="home-button">Home</Link>
  </div>)
}
;

export default SavedList;
