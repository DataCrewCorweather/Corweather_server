const express = require("express");
const router = express.Router();
const weather = require("../schemas/weather");

// 게시판 예시들인데 참고용으로 놔둠
// router.post("/delete", async (req, res) => {
//   try {
//     await Board.remove({
//       _id: req.body._id
//     });
//     res.json({ message: true });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// router.post("/update", async (req, res) => {
//   try {
//     await Board.update(
//       { _id: req.body._id },
//       {
//         $set: {
//           title: req.body.title,
//           content: req.body.content
//         }
//       }
//     );
//     res.json({ message: "게시글이 수정 되었습니다." });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// router.post("/write", async (req, res) => {
//   try {
//     let obj;

//     obj = {
//       writer: req.body._id,
//       title: req.body.title,
//       content: req.body.content
//     };

//     const board = new Board(obj);
//     await board.save();
//     res.json({ message: "게시글이 업로드 되었습니다." });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// 날씨(온도) 가져오기
router.post("/getWeatherList", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    // console.log(_date);
    const _weather = await weather.find({date: req.body.date, location_name: req.body.name});
    res.json({ list: _weather });
    //console.log("성공");
    //console.log(_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

//월별 강수량 평균
router.post("/getDayrain", async (req, res) => {
    try {
      // const _name = req.body.name;
      // console.log(_name);
      // const _date = req.body.date;
      // console.log(_date);
      const _weather = await weather.aggregate([{$match:{location_name: req.body.name, date: {$regex:/2022-05/}}},
        {$group: {_id: "$date", average:{$avg:"$day_rain"}}},
        {$group: {_id:null, avg:{$avg: "$average"}}}
    ]);
      res.json({ list: _weather });
      //console.log("성공");
      //console.log(_weather);
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

//전국 최저 기온
router.post("/getMinTemp", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    console.log(req.body.date);
    const _weather = await weather.aggregate([{$match:{date: {$regex:req.body.date}}},
      {$group: {_id:'$location_name', avg:{$avg:'$temp'}}},
      {$group: {_id: null, minTemp:{$min:"$avg"}}}
    
  ]);
    res.json({ list: _weather});
    console.log("성공");
    console.log(_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

//전국 최고 기온
router.post("/getMaxTemp", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    console.log(req.body.date);
    const _weather = await weather.aggregate([{$match:{date: {$regex:req.body.date}}},
      {$group: {_id:'$location_name', avg:{$avg:'$temp'}}},
      {$group: {_id: null, maxTemp:{$max:"$avg"}}}
    
  ]);
    res.json({ list: _weather });
    console.log("성공");
    console.log(_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

//날씨 비중
router.post("/getWeatherRate", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    console.log(req.body.date);
    const _weather = await weather.aggregate([
      {
        $match: {
          date: {
            $regex: req.body.date
          }
        }
      },
      {
        $project: {
          has_day_rain: {
            $cond: [{ $ifNull: ["$day_rain", false] }, true, false]
          }
        }
      },
      {
        $group: {
          _id: {
            exists: { $cond: ["$has_day_rain", "Exists", "DoesNotExist"] }
          },
          count: { $sum: 1 }
        }
      }
    ]);
    res.json({ list: _weather });
    console.log("성공");
    console.log(_weather);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});
// router.post("/detail", async (req, res) => {
//   try {
//     const _id = req.body._id;
//     const board = await Board.find({ _id });
//     res.json({ board });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

module.exports = router;