import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  WeatherComponent,
  BusScheduleComponent,
  LaundryComponent,
  } from './components';

class App extends React.Component<{greeting: string}, {count :number}> {
  state = {count :0};

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <h2>{this.props.greeting}</h2>
        <button onClick={() => this.setState({count : this.state.count + 1})}>
          This button has been clicked {this.state.count} times.
        </button>
      <WeatherComponent/>
      <BusScheduleComponent/>
      <LaundryComponent/>
      </div>);
  }
}

ReactDOM.render(
  <App greeting="Hello world!"/>,
  document.getElementById('app')
);
