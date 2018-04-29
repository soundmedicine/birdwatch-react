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
      toggle: 'search',
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
      toggle: 'add'
    });
    console.log('ADD')
  };

  toggleViewSearch = () => {
    this.setState({
      toggle: 'search'
    });
    console.log('SEARCH')
  };

  toggleViewChart = () => {
    this.setState({
      toggle: 'chart'
    });
    console.log('CHART')
  }

  render() {
    return (
      <div>
        <Nav
          toggleSearch={this.toggleViewSearch}
          toggleAdd={this.toggleViewAdd}
          toggleChart={this.toggleViewChart}
        />
        {this.state.toggle && <Birds />}
        {this.state.toggle && <Turtles />}
        {this.state.toggle && <Form />}
        {this.state.toggle && <Chart chartData={this.state.chartData} legendPosition="bottom"/>}
      </div>
    );
  }
}
