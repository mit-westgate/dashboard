// import {kelvinToFarenheit, kelvinToCelcius} from "./helper";
import {kelvinToCelcius} from "./helper";

const weatherApiKey :string = "d275bbb2a87af0a991c344946631dd92";

export function weatherApi ()  {
  let url: string = `https://api.openweathermap.org/data/2.5/weather?q=Boston,us&APPID=${weatherApiKey}`;

  fetch(url)
    .then((response: Response)=> response.json())
    .then((json) => {
      console.log(kelvinToCelcius(+json['main']['temp']));
    });

}

export function nextBusApi () {
  let url: string = 'http://webservices.nextbus.com/service/publicJSONFeed?command=predictions&a=mit&r=tech&s=tangwest';

  fetch(url)
    .then((response: Response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

export function laundryView () {
  let url: string = 'https://laundryview.com/api/currentRoomData?location=1364814';
  
  // let options = {
  //   method: 'GET',
  //   headers:{
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Credentials': 'true',
  //     'Access-Control-Allow-Methods': 'POST, GET'
  //   }
  // };

  fetch(url)
    .then((response: Response) => response.json())
    .then((contents) => {
      console.log(contents);
    });
}
