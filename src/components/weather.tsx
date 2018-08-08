import * as React from 'react';
import { weatherApi } from '../utils';

export class WeatherComponent extends React.Component <any, any>{
  
  constructor(props:any){
    super(props); 
    this.state = {
      current :{
        tempurature: 0,
        weather: '',
      }
    }
  }

  async componentDidMount() {
    let current = await weatherApi();
    this.setState({current})
  }

  render () {
    return (
      <div className="info-box">
        <div className="weather">{this.state.current.tempurature} °F </div>
        <div className="weather">{this.state.current.weather} </div>
      </div>);
  }
}
