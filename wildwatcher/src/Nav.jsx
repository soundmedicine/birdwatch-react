import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav-extended teal darken-4">
        <div className="nav-wrapper">
          <a href="" className="brand-logo center amber-text text-darken-4">
            WildWatcher
          </a>
        </div>
        <div className="nav-content center">
          <ul className="tabs tabs-transparent">
            <li className="tab amber-text text-darken-4">
              <a onClick={this.props.toggleSearch}>
                Search
              </a>
            </li>
            <li className="tab amber-text text-darken-4">
              <a onClick={this.props.toggleAdd}>
                Add Animal
              </a>
            </li>
            <li className="tab amber-text text-darken-4">
              <a onClick={this.props.toggleChart}>
                Sightings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
