"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_tratta = insert_tratta;
exports.print_tratte = print_tratte;
exports.calculate_km = calculate_km;
exports.calculate_consumed_gpl = calculate_consumed_gpl;
exports.calculate_total = calculate_total;
exports.get_point_list = get_point_list;
var CONSUMO_GPL_L = 0.074;
var COSTO_ORE = 9;
var DANNO = 0.3879;
var costo_gpl = 0.718;
var data = [
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
function insert_tratta(tratta) {
    data.push(tratta);
}
function print_tratte() {
    for (var i = 0; i < data.length; i++) {
        var element = data[i];
        console.log(element);
    }
}
function calculate_km() {
    var kms = 0;
    for (var i = 0; i < data.length; i++) {
        kms += data[i]["km"];
    }
    return kms;
}
function calculate_consumed_gpl() {
    var kms = 0;
    for (var i = 0; i < data.length; i++) {
        kms += data[i]["km"];
    }
    return CONSUMO_GPL_L * kms;
}
function calculate_total(hours) {
    var kms = calculate_km();
    var rim = calculate_consumed_gpl();
    return (hours * COSTO_ORE) + (kms * DANNO) + rim;
}
function get_point_list() {
    var d = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i]["from"];
        if (!(d.includes(item))) {
            d.push(item);
        }
    }
    return d;
}
