import React from 'react';
import './App.css';
import './css/star-wars-font.css';
import Login from './components/Login';
import PlanetSearch from './components/PlanetSearch';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  changeLoginState = (str) => {
    this.setState({ loggedIn: !this.state.loggedIn });
  }
  render() {
    return (
      <div className="App">
        <Header changeLoginState={this.changeLoginState.bind(this)} loggedIn={this.state.loggedIn}/>
        <div className="content-wrapper">
        {this.state.loggedIn ? <PlanetSearch /> : <Login changeLoginState={this.changeLoginState.bind(this)} />}
        </div>
      </div>
    );
  }
}

export default App;
