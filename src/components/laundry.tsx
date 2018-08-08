
import * as React from 'react';

import {formatTime, laundryView} from '../utils';

export class LaundryComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      last_update: 0,
      washers : 0,
      dryers : 0,
    }
  }

  async componentDidMount() {
    let status = await laundryView();
    this.setState({...status});
  }

  render () {
    return (
      <div className="info-box vertical">
        <div className="machines">
        <div className="machine"><div className="avail">{this.state.washers}</div><div className="machine-type">washers</div></div>
        <div className="machine"><div className="avail">{this.state.dryers}</div><div className="machine-type">dryers</div></div>
      </div>
        <div className="last-update">last updated: {formatTime(new Date(this.state.last_update))}</div>
      </div>);
  }
}
