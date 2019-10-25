import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getJoke } from './actions/index'
import JokeDisplay from './components/JokeDisplay'
import JokeButton from './components/JokeButton'

import './App.css';

function App(props) {
  useEffect(() => {
    props.getJoke();
  }, [])

  const handleClick = e => {
   e.preventDefault()    
  }

  return (
    <div className="App">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={props.joke} handleClick={handleClick} />
      {props.jokeError && <p>Error: {props.jokeError}</p>}

      <div className="joke-button"><JokeButton /></div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    joke: state.joke,
    isJokeLoading: state.isLoading,
    jokeError: state.error  
  };
}

const mapDispatchToProps = {
  getJoke
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
