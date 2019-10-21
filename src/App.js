import React from 'react';
import DisplaySimpsons from './components/SimpsonCharacter';
import axios from 'axios';
import './App.css';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      simpsonCharacter: "loading"
    }
  }

  componentDidMount = () => {
    this.getSimpson(); 
  }


  getSimpson =  () => {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          simpsonCharacter: data[0],
        });
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <DisplaySimpsons simpsonCharacter = {this.state.simpsonCharacter} />
          <button type="button" onClick={this.getSimpson}>Get a new Simpson!</button>
        </header>
      </div>
    ); 
  }
  
}

export default App;
