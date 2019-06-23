import React from "react";
import Population from "../assets/images/population-icon";


export default class PlanetList extends React.Component {
    render() {
        if (this.props.planets.length) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12" >
                            {
                                this.props.planets.map((planet, index) => (
                                    <li className="pointer-cursor" onClick={() => {this.props.selectPlanet(planet)}} style={{ boxShadow: ' 2px 2px 7px rgba(' + (213 - index * 20) + ',' + (158 - index * 20) + ' ,255,0.5 )' }} key={index}>
                                        <div className="planet-name">
                                            {planet.name}
                                        </div>
                                        <div className="planet-population">
                                            <Population population={planet.population} fill="#bf0785" />
                                        </div>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return ('');
        }
    }
}