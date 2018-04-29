import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import reactfusioncharts from 'react-fusioncharts';

// Pass fusioncharts as a dependency of charts
charts(FusionCharts)

export default class Chart extends Component {
  render() {
    FusionCharts.ready(function() {
      var myDataSource = {
        chart: {
          caption: 'WildWatcher Tally',
          subCaption: 'How many animals did you see?',
          numberPrefix: null,
          theme: 'ocean'
        },
        data: [
          { label: 'Bakersfield Central', value: '880000' },
          { label: 'Garden Groove harbour', value: '730000' },
          { label: 'Los Angeles Topanga', value: '590000' },
          { label: 'Compton-Rancho Dom', value: '520000' },
          { label: 'Daly City Serramonte', value: '330000' }
        ]
      };
      var revenueChartConfigs = {
        id: 'revenue-chart',
        type: 'column2d',
        width: '80%',
        height: 400,
        dataFormat: 'json',
        dataSource: myDataSource
      };
      ReactDOM.render(
        <ReactFC {...revenueChartConfigs} />,
        document.getElementById('chart-container')
      );
    });

    return <div id="chart-container" />;
  }
}
