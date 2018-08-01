
import * as React from 'react';

import {laundryView} from '../utils';

export class LaundryComponent extends React.Component {

  componentDidMount() {
    laundryView();
  }

  render () {
    return (
      <div>
        <h2>laundryView</h2>
      </div>);
  }
}
