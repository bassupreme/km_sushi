import {Tratta} from './types'

const CONSUMO_GPL_L = 0.074;
const COSTO_ORE = 9;
const DANNO = 0.3879;
let costo_gpl = 0.718;



let data: Tratta[] = [
  {
    when: "2025-04-09",
    from: "location 1",
    to: "location 2",
    km: 3.5,
  },
  {
    when: "2025-04-09",
    from: "location 1",
    to: "location 2",
    km: 8.5,
  },
  {
    when: "2025-04-09",
    from: "location 2",
    to: "location 1",
    km: 2,
  },
];

export function insert_tratta(tratta: Tratta) : void {
  data.push(tratta);
}

export function print_tratte() {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);
  }
}

export function calculate_km() : number {
  let kms: number = 0;
  for (let i = 0; i < data.length; i++) {
    kms += data[i]["km"];
  } 
  return kms;
}

export function calculate_consumed_gpl() : number {
  let kms: number = 0;
  for (let i = 0; i < data.length; i++) {
    kms += data[i]["km"];
  } 
  return CONSUMO_GPL_L * kms; 

}

export function calculate_total(hours: number) : number {
  let kms: number = calculate_km();
  let rim: number = calculate_consumed_gpl();

  return (hours * COSTO_ORE) + (kms * DANNO) + rim;
}


export function get_point_list() : string[] {
  let d: string[]  = []; 
  for (let i = 0; i < data.length; i++) {
    const item: string  = data[i]["from"];
    if (!(d.includes(item))) {
      d.push(item);
    }
  }

  return d;
}