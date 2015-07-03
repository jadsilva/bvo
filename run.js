#!/bin/env node

function inspect(obj) {
  console.log(obj);
  for (m in obj)
    console.log('"%s" = "%s"', m, obj[m]);
}

function parseBRTDate(dateString) {
  var dateSplited = dateString.split('/');
  return new Date(dateSplited[2], dateSplited[1] - 1, dateSplited[0]);
}

function run(input) {

  inspect(input);
  console.log(parseBRTDate(input.daysOff[0]));
//  console.log(input.period.begin.toISOString());
}

var input = {
              period: {begin: new Date(), end: new Date(2015,07,31)}, 
              vacationSplit: [10, 10], 
              fixedDaysOff:['01-01', '09-07'], 
              daysOff: ['10/05/2015', '2015-08-15']
            };
run(input);
