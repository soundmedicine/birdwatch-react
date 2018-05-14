import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'
import Birds from './Birds'
import Turtles from './Turtles'
import Form from './Form'
import Chart from './Chart'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      toggleSearch: true,
      toggleAdd: false,
      toggleChart: false,
      chartData: {},
      birds: []
    }
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    this.getChartData()
    fetch('https://wildwatcher.herokuapp.com/birds')
      .then(res => res.json())
      .then(birds => {
        this.setState({
          birds: birds.birds
        })
      })
  }

  addBirds() {
    let totalSightings = this.state.birds.reduce((acc, curr) => {
      // console.log(acc, curr)
      return acc += curr.sightings
    }, 0)
    return totalSightings    
  }

  getChartData() {      
    this.setState({
        chartData: {
          labels: [
              'Birds'
          ],
          datasets: [
            {
              label: 'Sightings',
              data: [
                  0
              ],
              backgroundColor:[
                  'orange'
              ]
            }
          ]
        }
      })
    }

  onBirdClick = (e) => {
    e.preventDefault()
    let tally = this.addBirds()
    console.log('Event: ', e.target.id)
    
    let newBirds = [...this.state.birds]
    let bird = newBirds.filter(bird =>
      bird.commonName === e.target.id)
    
    bird[0].sightings ++        

    let newChartData = this.state.chartData
    
    newChartData.datasets[0].data[0]= tally
    this.setState({
      chartData: newChartData
    })    
  }

  deleteBird(id) {
    console.log(id)
  
    return fetch('https://wildwatcher.herokuapp.com/birds/' + id, {
      method: 'DELETE'
    }).then(response => response.json())
    .catch(err => console.log(err))
  }

  onDeleteClick = (e) => {
    e.preventDefault()

    let bird = this.state.birds.filter(bird =>
    bird.commonName === e.target.id)
    
    this.deleteBird(bird[0].id)
  }

  toggleViewAdd = () => {
    this.setState({
      toggleAdd: true,
      toggleSearch: false,
      toggleChart: false
    })
  }

  toggleViewSearch = () => {
    this.setState({
      toggleAdd: false,
      toggleSearch: true,
      toggleChart: false
    })
  }

  toggleViewChart = () => {
    this.setState({
      toggleAdd: false, 
      toggleSearch: false,
      toggleChart: true
    })
  }

  render() {
    return (
      <div>
        <Nav
          toggleSearch={this.toggleViewSearch}
          toggleAdd={this.toggleViewAdd}
          toggleChart={this.toggleViewChart}
        />
        {this.state.toggleSearch && <Birds onBirdClick={this.onBirdClick} onDeleteClick={this.onDeleteClick} birds={this.state.birds}/>}
        {this.state.toggleSearch && <Turtles />}
        {this.state.toggleAdd && <Form />}
        {this.state.toggleChart && <Chart chartData={this.state.chartData} legendPosition="bottom"/>}
      </div>
    )
  }
}
