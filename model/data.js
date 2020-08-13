var mongoose = require("mongoose");

var dailySchema = new mongoose.Schema({
    date: Date,
    total_test: Number,
    new_test: Number,
    pending_result: Number,
    positive: Number,
    negative: Number,
    recovered: Number,
    hospitalization: Number,
    death: Number,
    new_positive: Number,
    total_active: Number,
    seven_avg: Number
});

module.exports = mongoose.model("Daily", dailySchema);
