import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BusScheduleComponent,
  EventComponent,
  WeatherComponent,
  LaundryComponent,
  TimeComponent,
  } from './components';

class App extends React.Component {
  state = {count :0};

  componentDidMount() {
  }

  render () {
    return (
      <div className="container">
      <EventComponent/>
      <div className="others">
        <TimeComponent/>
        <BusScheduleComponent/>
        <WeatherComponent/>
        <LaundryComponent/>
      </div>
      </div>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
