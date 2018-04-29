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
      toggleSearch: true,
      toggleAdd: false,
      toggleChart: false,
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
      toggleAdd: true,
      toggleSearch: false,
      toggleChart: false
    });
  };

  toggleViewSearch = () => {
    this.setState({
      toggleAdd: false,
      toggleSearch: true,
      toggleChart: false
    });
  };

  toggleViewChart = () => {
    this.setState({
      toggleAdd: false, 
      toggleSearch: false,
      toggleChart: true
    });
  }

  render() {
    return (
      <div>
        <Nav
          toggleSearch={this.toggleViewSearch}
          toggleAdd={this.toggleViewAdd}
          toggleChart={this.toggleViewChart}
        />
        {this.state.toggleSearch && <Birds />}
        {this.state.toggleSearch && <Turtles />}
        {this.state.toggleAdd && <Form />}
        {this.state.toggleChart && <Chart chartData={this.state.chartData} legendPosition="bottom"/>}
      </div>
    );
  }
}
