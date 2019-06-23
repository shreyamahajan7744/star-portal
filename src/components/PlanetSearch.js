import React from 'react';
import '../css/planet-search.css'
import { search, processPlanets } from '../utils';
import PlanetSearchForm from './PlanetSearchForm';
import PlanetList from './PlanetList';
import PlanetDetails from './PlanetDetails';

export default class PlanetSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            planets: [],
            queryError: false,
            selectedPlanet: null
        };
    }

    handleChange(event) {
        this.setState({ query: event.target.value }, () => { this.searchForPlanets(this.state.query) });
    }

    setError(entry, target) {
        target = target + 'Error';
        this.setState({ [target]: entry, planets: [] });
    }
    selectPlanet(planet) {
        this.setState({ selectedPlanet: planet });
    }
    closeSelectedPlanet() {
        this.setState({ selectedPlanet: null });
    }
    async searchForPlanets(query) {
        if (query) {
            const response = await search(query, 'planets');
            if (response.count) {
                const planets = processPlanets(response.results);
                this.setError(false, 'query')
                this.setState({ planets });
            } else {
                this.setError(true, 'query')
            }
        } else {
            this.setError(true, 'query');
        }
    }

    render() {
        if (this.state.selectedPlanet) {
            return (
                <div className="form-container">
                    <PlanetDetails planet={this.state.selectedPlanet} close={this.closeSelectedPlanet.bind(this)}/>
                </div>
            )
        } else {
            return (
                <div className="form-container">
                    <PlanetSearchForm query={this.state.query} queryError={this.state.queryError} handleChange={this.handleChange.bind(this)} />
                    <PlanetList planets={this.state.planets} selectPlanet={this.selectPlanet.bind(this)} />
                </div>
            );
        }
    }
}
