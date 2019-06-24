import React from 'react';
import './App.css';
import './css/star-wars-font.css';
import Login from './components/Login';
import PlanetSearch from './components/PlanetSearch';
import Header from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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
        <Header changeLoginState={this.changeLoginState.bind(this)} loggedIn={this.state.loggedIn} />
        <div className="content-wrapper">
          <Router>
            <Route exact path="/" render={() => <Login changeLoginState={this.changeLoginState} loggedIn={this.state.loggedIn} />} />
            <Route exact path="/search" render={() => <PlanetSearch loggedIn={this.state.loggedIn} />} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
