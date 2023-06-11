const express = require("express");
const router = express.Router();
const traffic_weather = require("../schemas/traffic_weather");





router.post("/getweatherVelo", async (req, res) => {
  try {
    const _name = req.body.name2;
    //console.log(_name);

    const _traffic_weather = await traffic_weather.aggregate([
      { $match: {weather: req.body.name2 } },
      { $group: {_id: null, average: { $max: "$avg_velo" } } }
    ]);

    //console.log(_traffic_weather);
    res.json({ list: _traffic_weather });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/getMaxVelo", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    //console.log(req.body.date);
    const _traffic_weather = await traffic_weather.aggregate([{$match:{date: {$regex:req.body.date}}},
      {$group: {_id: null, maxTemp:{$max:"$max_degree"}}}
    
  ]);
    res.json({ list: _traffic_weather });
    //console.log("성공");
    //console.log(_traffic_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/getMinVelo", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    // console.log(req.body.date);
    const _traffic_weather = await traffic_weather.aggregate([{$match:{date: {$regex:req.body.date}}},
      {$group: {_id: null, minTemp:{$min:"$min_degree"}}}
    
  ]);
    res.json({ list: _traffic_weather });
    //console.log("성공");
    //console.log(_traffic_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/getMonthAvg", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    // console.log(_date);
    const _traffic_weather = await traffic_weather.aggregate([{$match:{date: {$regex:req.body.date}}},
      {$group: {_id:null, avg:{$avg: "$avg_velo"}}}
    ]);
    res.json({ list: _traffic_weather });
    //console.log("성공");
    //console.log(_traffic_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});



module.exports = router;