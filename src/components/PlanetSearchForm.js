import React from 'react';

export default class PlanetSearchForm extends React.Component {
    render() {
        return (
            <form>
                <label>
                    <h4>Planet Name</h4>
                    <input required placeholder="Dathomir" type="text" value={this.props.query} onChange={this.props.handleChange} /><br />
                    {this.props.queryError ? <span className="error">{this.props.query ? 'Planet not found !' : ''}</span> : ''}
                </label>
            </form>
        )
    }
}