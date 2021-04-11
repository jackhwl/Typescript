"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/') //['23','10', '2018]
        .map(function (value) { return parseInt(value); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
