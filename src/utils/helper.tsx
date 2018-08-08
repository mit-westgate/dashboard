

export function kelvinToFarenheit(k:number):number {
  return k * 1.8 - 459.67;
}

export function kelvinToCelcius(k: number):number{
  return k - 273.15;
}

export function formatDateTime(d: Date):string {
  const option ={
    weekday: "short", year:"numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit",
  };

  return d.toLocaleTimeString("en-us", option);
}
export function formatTime(d: Date):string {
  const option ={
    hour: "2-digit", minute: "2-digit",
  };

  return d.toLocaleTimeString("en-us", option);
}
