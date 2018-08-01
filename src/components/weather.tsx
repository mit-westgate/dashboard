import * as React from 'react';
import { weatherApi } from '../utils';

export class WeatherComponent extends React.Component {

  componentDidMount() {
    weatherApi();
  }

  render () {
    return (
      <div>
        <h2>weather</h2>
      </div>);
  }
}
