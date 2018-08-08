import * as React from 'react';
import {formatDateTime} from '../utils';
export class TimeComponent extends React.Component<any, any>{
  
  constructor(props:any) {
   super(props);
   this.state = {
     time: new Date()
   };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date(),
      })
    }, 1000)
  }

  render () {
    return (
      <div className="time">
        <div>{formatDateTime(this.state.time)}</div>
      </div>);
  }
}
