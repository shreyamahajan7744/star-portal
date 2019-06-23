import React from "react";

export default class PlanetDetails extends React.Component {
    render() {
        const planet = this.props.planet;
        return (
            <div className="container">
                <div className="close pointer-cursor" onClick={this.props.close}>&#10006;</div>
                <div className="row">
                    <div className="col-12">
                        <div className="well">
                            <h2 className="planet-name">{planet.name}</h2>
                            <div className="planet-details">
                            <p><span><strong>Diameter: </strong></span><span>{planet.diameter}</span></p>
                            <p><span><strong>Climate: </strong></span><span>{planet.climate}</span></p>
                            <p><span><strong>Gravity: </strong></span><span>{planet.gravity}</span></p>
                            <p><span><strong>A Day in: </strong></span><span>{planet.rotation_period + 'hours'}</span></p>
                            <p><span><strong>A Year in: </strong></span><span>{planet.orbital_period + 'days'}</span></p>
                            <p><span><strong>Terrain: </strong></span><span>{planet.terrain}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}