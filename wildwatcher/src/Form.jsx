import React, { Component } from 'react';

export default class Form extends Component {
  constructor({ onSave }) {
    super(arguments[0]);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  postFormData() {
    const postUrl = 'https://wildwatcher.herokuapp.com/birds';
    let myForm = document.querySelector('#add-form');
    const form = new FormData(myForm);
    const payload = {
      commonName: form.get('commonName'),
      scientificName: form.get('scientificName'),
      fact: form.get('fact'),
      sightings: 0
    };
    let dataYas = JSON.stringify(payload);
    console.log(dataYas)
    
    fetch(postUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: dataYas
    })
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.postFormData();
    e.target.reset();
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _onClick(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: ''})
  }
  
  render() {
    return (
      <form id="add-form" action="submit" onSubmit={this.handleSubmit} className="add-form">
        <label htmlFor="commonName">Common Name</label>
        <input type="text" name="commonName" onChange={this.handleChange} />
        <label htmlFor="scientificName">Scientific Name</label>
        <input type="text" name="scientificName" onChange={this.handleChange} />
        <label htmlFor="fact">Fact</label>
        <textarea
          name="fact"
          cols="30"
          rows="10"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    );
  }
}
