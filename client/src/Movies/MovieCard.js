import React from 'react';
import * as Strap from 'reactstrap'

const MovieCard = props => {
  const {movie} = props
  console.log(movie)
  return(
    <Strap.Card>
      <Strap.CardTitle>
        {movie.title}
      </Strap.CardTitle>
      <Strap.CardBody>
        
      </Strap.CardBody>
      
      
    </Strap.Card>
    )

};

export default MovieCard;
