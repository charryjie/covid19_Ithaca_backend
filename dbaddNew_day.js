fs = require('fs');
var Daily = require("./model/data"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/yiqing_db");

// fs.readFile('./dataNew_day.tsv', 'utf8', function(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         var data_arr = data.split('\n');
//         data_arr.forEach((item) => {
//             var daily_data = item.split('\t');
//             console.log(daily_data);
//             var newDaily = {
//                 date: new Date(daily_data[0]),
//                 total_test: Number(daily_data[1].replace(',', '')),
//                 pending_result: Number(daily_data[2].replace(',', '')),
//                 positive: Number(daily_data[3].replace(',', '')),
//                 negative: Number(daily_data[4].replace(',', '')),
//                 recovered: Number(daily_data[5].replace(',', '')),
//                 hospitalization: Number(daily_data[6].replace(',', '')),
//                 death: Number(daily_data[8].replace(',', '')),
//                 new_positive: Number(daily_data[10].replace(',', '')),
//                 total_active: Number(daily_data[11].replace(',', ''))
//             } 
//             Daily.create(newDaily, (err, daily) => {
//                 if(err) {
//                     console.log(err);
//                 } else {
//                     console.log("data added");
//                     console.log(daily);
//                 }
//             });
//         });
//     }
// });



Daily.find({date: {$gte: "2020-08-06T04:00:00.000Z"}}).sort('date').exec((err, data) => {
    if(err) {
        console.log(err);
    } else {
        let len = data.length;
        for(let i = 6; i < len; i++) {
            data[i].new_test = data[i].total_test - data[i-1].total_test;
            let seven_total = 0;
            for(let j = i - 6; j <= i; j++) {
                seven_total += data[j].new_positive;
            }
            data[i].seven_avg = seven_total / 7;
            data[i].save();
        }
    }
})