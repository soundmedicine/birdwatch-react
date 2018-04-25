import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav-extended teal darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center amber-text text-darken-4">
            WildWatcher
          </a>
        </div>
        <div className="nav-content center">
          <ul className="tabs tabs-transparent">
            <li className="tab amber-text text-darken-4">
              <a href="#test1">Search</a>
            </li>
            <li className="tab amber-text text-darken-4">
              <a className="active" href="#test2">
                Add Animal
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
