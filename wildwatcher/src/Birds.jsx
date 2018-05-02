import React, { Component, Fragment } from 'react';

export default class Birds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [],
      birdSighting: 0
    };

    this.onClick = this.onClick.bind(this)
  }  
  
  componentDidMount() {
    return fetch('https://wildwatcher.herokuapp.com/birds')
      .then(response => response.json())
      .then(birds =>
        this.setState({
          birds: birds.birds
        })
      );
  }

  onClick = (e) => {

    console.log('Event: ', e.target.id)

    let bird = this.state.birds.filter(bird =>
    bird.commonName === e.target.id)
    bird[0].sightings ++
    
    this.setState({
      birdSighting: bird[0].sightings
    })
    // console.log(this.state.birds[0].sightings)

    
  }



  render() {
    let birdsView = <div className="row">Loading...</div>;
    const { birds } = this.state;
    if (birds && birds.length > 0) {
      birdsView = birds.map(bird => {
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
                    <i onClick={this.onClick} id={bird.commonName} className="material-icons">add</i>
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
