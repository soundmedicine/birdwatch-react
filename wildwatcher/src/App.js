import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Birds from './Birds';
import Turtles from './Turtles';
import Form from './Form';
import Chart from './Chart';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      chartData: {}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
        chartData: {
            labels: [
                'Birds',
                'Turtles'
            ],
            datasets: [
                {
                    label: 'Sightings',
                    data: [
                        23,
                        16
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132. 0.6',
                        'rgba(54, 162, 235, 0.6'
                    ]
                }
            ]
        }
      })
    }



  toggleViewAdd = () => {
    this.setState({
      toggle: false
    });
  };

  toggleViewSearch = () => {
    this.setState({
      toggle: true
    });
  };

  render() {
    return (
      <div>
        <Nav
          toggleSearch={this.toggleViewSearch}
          toggleAdd={this.toggleViewAdd}
        />
        {this.state.toggle && <Birds />}
        {this.state.toggle && <Turtles />}
        {!this.state.toggle && <Form />}
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      </div>
    );
  }
}
