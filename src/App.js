import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import Home from './components/Home';
import axios from 'axios';

function App() {
  // api key
  const DB_KEY = process.env.REACT_APP_DB_KEY;
  const END_POINT = `http://www.omdbapi.com/?apikey=`

  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {},
  });

  const handleInput = (e) => {
    let search = e.target.value;
    setState(prevState => {
      return {...prevState, search: search}
    });

    // console.log(state.search);
  }
  
  const search = (e) => {

    if(state.search !== "" && e.key === "Enter") {
      axios.get(`http://www.omdbapi.com/?apikey=${DB_KEY}&s=${state.search}`) 
        .then(({data}) => {
          let results = data.Search;
          // console.log(results);

          setState(prevState => {
            return {...prevState, results: results}
          });
        })
    }
  }



  const openPopup = id => {
    axios.get(`http://www.omdbapi.com/?apikey=${DB_KEY}&i=${id}`)
      .then(({data}) => {
        let result = data;
        console.log(data);

        setState(prevState => {
          return {...prevState, selected: result}
        })
      })
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Route exact path="/movies">
          <Search handleInput={handleInput} search={search}/>
          </Route>

          <Route exact path="/movies">
          <Results searched={state.search} results={state.results} openPopup={openPopup} />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          {/* handle popup toggle view */}
          {( typeof state.selected.Title != "undefined") ? <Popup searched={state.search} selected={state.selected} closePopup={closePopup}/> : false }

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
