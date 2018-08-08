import * as React from 'react';

import {nextBusApi} from '../utils';

export class BusScheduleComponent extends React.Component<any, any>{

  constructor(props: any){
    super(props);
    this.state={
      is_prediction: false,
      tillNext: 0,
    }
  }

  async componentDidMount() {

    setInterval(async() => {
    let predictions = await nextBusApi();

    if(predictions.length > 0){

      console.log(predictions[0])

      let tillNext = predictions[0];
      console.log(tillNext);
      this.setState({
        is_prediction: true,
        tillNext,
      }) 
    

      setInterval(() => {
        this.setState({
          tillNext: (+this.state.tillNext) - 1,
        })
      }, 1000);
    } else {
      this.setState({is_prediction: false});
    }
    }, 1000*60);

  }

  render () {

    let minutes;
    if(! this.state.is_prediction) {
      minutes = <NoBusPrediction/>;
    } else {
      const min = Math.floor(this.state.tillNext / 60);
      const sec = (this.state.tillNext % 60 + '').padStart(2, '0');
      const timeLeft = {min,sec};
      minutes = BusPrediction(timeLeft);
    }

    return (
      <div className="info-box">
      {minutes}
      </div>);
  }
}

function NoBusPrediction() {
  return <div className="prediction">{'no bus prediction'}</div>;
}

const BusPrediction = ({min, sec}) => (<div className="prediction">{`${min}:${sec} till next bus.`}</div>);
