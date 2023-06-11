const express = require("express");
const router = express.Router();
const subway = require("../schemas/subway");





router.post("/getsubAvg", async (req, res) => {
    try {
      // const _name = req.body.name;
      // console.log(_name);
      // const _date = req.body.date;
      // console.log(_date);
      const _subway = await subway.aggregate([
        { $match: { date: { $regex: req.body.date } } },
        { $group: { _id: null, riding: { $sum: "$riding" } } }
      ])
      res.json({ list: _subway });
      //console.log("성공");
      //console.log(_subway);
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });



  router.post("/getline", async (req, res) => {
    try {
      const _name = req.body.name;
      console.log(_name);
      // const _date = req.body.date;
      // console.log(_date);
      const _subway = await subway.aggregate([
        { $match: { line: req.body.name } },
        { $group: { _id: null, count: { $sum: 1 } } }
      ])
      res.json({ list: _subway });
      //console.log("성공");
      //console.log(_subway);
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });


module.exports = router;