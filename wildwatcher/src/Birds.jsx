import React, { Component, Fragment } from 'react';

export default class Birds extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let birdsView = <div className="row">Loading...</div>;
    const { birds } = this.props
    if (birds && birds.length > 0) {
      birdsView = birds.map(bird => {
        console.log(bird)
        return (
          <div className="row" key={bird.id}>
            <div className="col s12 m7">
              <div className="card">
                <div className="card-image">
                  <img src={bird.image} alt={bird.fact} />
                  <span className="card-title">{bird.commonName}</span>
                </div>
                <div className="card-content">
                  <p>{bird.fact}</p>
                  <p>Sightings: {bird.sightings}</p>
                  <p>Scientific Name: {bird.scientificName}</p>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i onClick={this.props.onBirdClick} id={bird.commonName} className="material-icons">add</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
    return <Fragment>{birdsView}</Fragment>;
  }
}
