import React, { useState } from 'react';
import {Route,Switch} from 'react-router-dom'

import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path='/movies/:id' component={Movie} />

        <Route path='/' component={MovieList}  />
      </Switch>
    </div>
  );
};

export default App;
