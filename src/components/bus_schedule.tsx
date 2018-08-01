import * as React from 'react';

import {nextBusApi} from '../utils';

export class BusScheduleComponent extends React.Component {

  componentDidMount() {
    nextBusApi();
  }

  render () {
    return (
      <div>
        <h2>bus</h2>
      </div>);
  }
}
