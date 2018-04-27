import React, { Component } from 'react';

export default class Form extends Component {
  constructor({ onSave }) {
    super(arguments[0]);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = {
      commonName: form.get('commonName'),
      scientificName: form.get('scientificName'),
      fact: form.get('fact')
    };
    console.log(payload);
    // this.props.onSave({ ...this.state });
    // this.setState({
    //   commonName: '',
    //   scientificName: '',
    //   image: '',
    //   fact: '',
    //   sightings: 0
    // });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form action="submit" className="add-form">
        <label htmlFor="commonName">Common Name</label>
        <input type="text" name="commonName" onChange={this.handleChange} />
        <label htmlFor="scientificName">Scientific Name</label>
        <input type="text" name="scientificName" onChange={this.handleChange} />
        <label htmlFor="fact" name="fact" onChange={this.handleChange}>
          Notes
        </label>
        <textarea name="fact" id="" cols="30" rows="10" />
        <input
          type="submit"
          name="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}
