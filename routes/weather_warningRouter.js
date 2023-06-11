const express = require("express");
const router = express.Router();
const weather_warning = require("../schemas/weather_warning");





router.post("/getWeather_warning", async (req, res) => {
    try {
      // const _name = req.body.name;
      // console.log(_name);
      // const _date = req.body.date;
      // console.log(_date);
      const _weather_warning = await weather_warning.find({ time: {$regex:'2023-06-10'} }).sort({ time: -1}).limit(5).exec();
      res.json({ list: _weather_warning });
      //console.log("성공");
      //console.log(_weather_warning[1]);
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });



module.exports = router;