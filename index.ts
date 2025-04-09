import {get_point_list, print_tratte, calculate_total, insert_tratta} from './utilities';
  
insert_tratta({
      "when" : "2025-04-09",
      "from": "location 1",
      "to": "location 2",
      "km": 4
    })

print_tratte();
let totale_rimborso: number = calculate_total(9);
console.log("TOTALE: " + totale_rimborso);

let partenze: string[] = get_point_list();
partenze.forEach(i => console.log(i));