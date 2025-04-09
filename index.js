"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./utilities");
(0, utilities_1.insert_tratta)({
    "when": "2025-04-09",
    "from": "location 1",
    "to": "location 2",
    "km": 4
});
(0, utilities_1.print_tratte)();
var totale_rimborso = (0, utilities_1.calculate_total)(9);
console.log("TOTALE: " + totale_rimborso);
var partenze = (0, utilities_1.get_point_list)();
partenze.forEach(function (i) { return console.log(i); });
