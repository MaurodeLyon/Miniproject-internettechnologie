export class data{
  currentData: currentData;
  results: results[];
}

export interface currentData{
  ticks: number;
  hour: number;
}

export interface results{
  id: number;
  ticks: number;
  hour: number;
  day: number;
  month: number;
  year: number

}

