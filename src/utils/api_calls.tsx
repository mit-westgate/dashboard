import {kelvinToFarenheit} from "./helper";

const weatherApiKey :string = "d275bbb2a87af0a991c344946631dd92";

export async function weatherApi (): Promise<{tempurature:number, weather: string}> {
  let url: string = `https://api.openweathermap.org/data/2.5/weather?q=Boston,us&APPID=${weatherApiKey}`;

  return fetch(url)
  .then((response: Response)=> response.json())
  .then((json) => {
    let tempurature = Math.round(10 * kelvinToFarenheit(+json['main']['temp'])) / 10.0;
    let weather = json['weather'][0]['main'];
    return {tempurature, weather}
  });

}

interface Predictions{
  predictions:{
    direction?:{
      title?: String
      prediction?: Prediction[]
    }
  }
}

interface Prediction{
  minutes: number,
  seconds: number,
}

export async function nextBusApi(): Promise<number[]> {
  let url: string = 'http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=mit&r=tech&s=tangwest';

  return fetch(url)
  .then((response: Response) => response.json())
  .then((json: Predictions) => {

    console.log(json);

    if(json.predictions.direction){
      if(json.predictions.direction.prediction){
        return json.predictions.direction.prediction.map((p) => p.seconds)
      } else {
        return []
      }
     }else {
      return []
     }
  })
}

export async function laundryView (): Promise<{last_update: number, washers: number, dryers:number}> {
  let url: string = 'https://cityio.media.mit.edu/westgate/status';

  return fetch(url)
  .then((response: Response) => response.json())
  .then((json) => {

    let last_update = json['last_query']['secs_since_epoch'] * 1000;

    return {
      last_update,
      washers: json['laundry']['washers'],
      dryers: json['laundry']['dryers'],
    }
  });
}

