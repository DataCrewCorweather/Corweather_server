const express = require("express");
const router = express.Router();
const traffic = require("../schemas/traffic");

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
router.post("/getTimetraffic", async (req, res) => {
  try {
    // const _name = req.body.name;
    // console.log(_name);
    // const _date = req.body.date;
    // console.log(_date);

    let _traffic;
    if(req.body.time1 == '0'){
        _traffic = await traffic.aggregate([
            {
            $group: {
                _id: null,
                total: {
                $sum: {
                    $add: ["$00~01", "$01~02", "$02~03", "$03~04","$04~05","$05~06"]
                }
                }
            }
            },
            {
            $project: {
                _id: 0,
                total: 1
            }
            }
        ])
    }
    else if (req.body.time1 == '6'){
        _traffic = await traffic.aggregate([
            {
            $group: {
                _id: null,
                total: {
                $sum: {
                    $add: ["$06~07", "$07~08", "$08~09", "$09~10","$10~11","$11~12"]
                }
                }
            }
            },
            {
            $project: {
                _id: 0,
                total: 1
            }
            }
        ])

    }
    else if (req.body.time1 == '12'){
        _traffic = await traffic.aggregate([
            {
            $group: {
                _id: null,
                total: {
                $sum: {
                    $add: ["$12~13", "$13~14", "$14~15", "$15~16","$16~17","$17~18"]
                }
                }
            }
            },
            {
            $project: {
                _id: 0,
                total: 1
            }
            }
        ])

    }
    else if (req.body.time1 == '18'){
        _traffic = await traffic.aggregate([
            {
            $group: {
                _id: null,
                total: {
                $sum: {
                    $add: ["$18~19", "$19~20", "$20~21", "$21~22","$22~23","$23~24"]
                }
                }
            }
            },
            {
            $project: {
                _id: 0,
                total: 1
            }
            }
        ])

    }
    res.json({ list: _traffic });
    //console.log("성공");
    //console.log(_traffic);
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});


//월별 강수량 평균
router.post("/getMonthavg", async (req, res) => {
    try {
      // const _name = req.body.name;
      // console.log(_name);
      // const _date = req.body.date;
      // console.log(_date);
      const _traffic = await traffic.aggregate([
        {
          $match: {
            road_name: req.body.name
          }
        },
        {
          $group: {
            _id: "$road_name",
            average: { $avg: "$all_sum" } // 교통량 평균 계산
          }
        }
      ]);

      res.json({ list: _traffic });
      //console.log("성공");
      //console.log(_traffic);
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

module.exports = router;