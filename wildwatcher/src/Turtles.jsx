import React, { Component, Fragment } from 'react';

export default class turtles extends Component {
  state = {
    turtles: []
  };

  componentDidMount() {
    return fetch('https://wildwatcher.herokuapp.com/turtles')
      .then(response => response.json())
      .then(turtles =>
        this.setState({
          turtles: turtles.turtles
        })
      );
  }

  render() {
    let turtlesView = <div className="row">Loading...</div>;
    const { turtles } = this.state;
    if (turtles && turtles.length > 0) {
      turtlesView = turtles.map(turtle => {
        return (
          <div className="row" key={turtle.id}>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={turtle.image} alt={turtle.fact} />
                  <span className="card-title">{turtle.commonName}</span>
                </div>
                <div className="card-content">
                  <p>{turtle.fact}</p>
                  <p>Sightings: {turtle.sightings}</p>
                  <p>Scientific Name: {turtle.scientificName}</p>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return <Fragment>{turtlesView}</Fragment>;
  }
}
