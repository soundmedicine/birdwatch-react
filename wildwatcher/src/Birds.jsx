import React, { Component, Fragment } from 'react';

export default class Birds extends Component {
  state = {
    birds: []
  };

  //   function addTally() {

  //   }

  // addButton.addEventListener('click', function() {
  //     object.sightings += 1
  //     sightings.textContent = 'Sightings: ' + object.sightings
  // })

  // minusButton.addEventListener('click', function() {
  //     if (object.sightings > 0) {
  //         object.sightings -= 1
  //     } else {
  //         object.sightings = 0
  //     }
  //     sightings.textContent = 'Sightings: ' + object.sightings
  // })

  componentDidMount() {
    return fetch('https://wildwatcher.herokuapp.com/birds')
      .then(response => response.json())
      .then(birds =>
        this.setState({
          birds: birds.birds
        })
      );
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
                    <i className="material-icons">add</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }

    return <Fragment>{birdsView}</Fragment>;
    //   <Card
    //     className="small"
    //     header={<CardTitle image="img/sample-1.jpg">Card Title</CardTitle>}
    //     actions={[<a href="#">This is a Link</a>]}
    //   >
    //     I am a very simple card. I am good at containing small bits of
    //     information. I am convenient because I require little markup to use
    //     effectively.
    //   </Card>
  }
}
