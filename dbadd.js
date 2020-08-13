var Daily = require("./model/data"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/yiqing_db");

// Daily.find({date: {$ne: "2020-03-14T04:00:00.000Z"}}, (err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         res.forEach((item) => {
//             let today = new Date(item.date.toString());
//             let yesterday = new Date();
//             yesterday.setTime(today.getTime() - 86400000);
//             Daily.findOne({date: yesterday}, (err, yesterday_item) => {
//                 item.new_positive = item.positive - yesterday_item.positive;
//                 item.save();
//             })
//         });
//     }
// });

// Daily.find({}).sort('date').exec((err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         for(let i = 0; i < 6; i++) {
//             res[i].seven_avg = 0;
//             for(let j = 0; j <= i; j++) {
//                 res[i].seven_avg += res[j].new_positive;
//             }
//             res[i].seven_avg /= (i + 1);
//             res[i].save();
//         }
//         let len = res.length;
//         for(let i = 6; i < len; i++) {
//             res[i].seven_avg = 0;
//             for(let j = i - 6; j <= i; j++) {
//                 res[i].seven_avg += res[j].new_positive;
//             }
//             res[i].seven_avg /= 7;
//             res[i].save();
//         }
//     }
// });

// Daily.find({recovered: {$ne: 0}}, (err, res) => {
//     if(err) {
//         console.log(err);
//     } else {
//         // let len = res.length;
//         // for(let i = 0; i < len; i++) {
//         //     res[i].total_active = res[i].positive - res[i].recovered;
//         //     res[i].save();
//         // }
//         res.forEach((item) => {
//             item.total_active = item.positive - item.recovered;
//             item.save();
//         })
//     }
// });

Daily.find({recovered: 0}, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        // let len = res.length;
        // for(let i = 0; i < len; i++) {
        //     res[i].total_active = res[i].positive - res[i].recovered;
        //     res[i].save();
        // }
        res.forEach((item) => {
            item.total_active = null
            item.save()
        })
    }
});

// Daily.find({date: {$ne: "2020-03-14T04:00:00.000Z"}}).sort('date').exec((err, res) => {
//     if(err) {
//         console.log(err)
//     } else {
//         let len = res.length;
//         for(let i = 1; i < len; i++) {
//             res[i].new_test = res[i].total_test - res[i-1].total_test;
//             res[i].save();
//         }
//     }
// })

