const express = require("express");
const router = express.Router();
const preWeather = require("../schemas/pre_weather");




  router.post("/getpreWeather", async (req, res) => {
    try {
      // const _date = req.body.date;
      // console.log(_date);
      const _preWeather = await preWeather.find({ date: /2023-06-11 오후/ }, { weather: 1 })
      res.json({ list: _preWeather });
      console.log("성공");
      console.log(_preWeather);
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });


module.exports = router;