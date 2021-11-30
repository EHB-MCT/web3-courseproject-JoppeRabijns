require("dotenv").config();
const EXPRESS = require("express");
const CORS = require("cors");
const FS = require("fs");
const APP = EXPRESS();
const BODYPARSER = require("body-parser");
const RENDERLT = require("./helpers/rendertl");
let fluent_ffmpeg = require("fluent-ffmpeg");

// MIDDLEWARE
//#region
APP.use(CORS());
APP.use(
  BODYPARSER.urlencoded({
    extended: false,
  })
);
APP.use(BODYPARSER.json());
//#endregion

// ROUTES

APP.get("/", (req, res) => {
  res.send("Hello");
});

APP.post("/render", (req, res) => {
  fluent_ffmpeg(
    "https://res.cloudinary.com/drxe6ukjd/video/upload/v1638042173/teasertijl_nprvcg.mp4"
  )
    .input(
      "https://res.cloudinary.com/drxe6ukjd/video/upload/v1638285059/Snow_LT_maincomp_1_nw2u5c.mov"
    )
    .addOptions(["-strict -2"])
    .complexFilter(
      [
        {
          filter: "overlay",
          options: {
            enable: "between(t,0,4)",
            x: "0",
            y: "0",
          },
          inputs: "[0:v][1:v]",
          outputs: "tmp",
        },
      ],
      "tmp"
    )
    .output("./mp.mp4")
    .run();

  /*   let mergedVideo = fluent_ffmpeg();

  req.body.videoNames.forEach((video) => {
    mergedVideo = mergedVideo.addInput(video.url).seekInput(video.inTime);
  });

  mergedVideo
    .mergeToFile(
      `/Users/joppe.rabijns/WEB3/nexrender/backend/outputs/${req.body.projectName}/rendered.mp4`
    )
    .on("progress", function (progress) {
      console.log(`${progress.percent}`);
    })
    .on("error", function (err) {
      console.log("Error " + err.message);
    })
    .on("end", function () {
      console.log("finished");
      res.sendStatus(200);
    }); */
});

APP.post("/createProject", (req, res) => {
  const dir = `./outputs/${req.body.projectName}`;

  if (!FS.existsSync(dir)) {
    FS.mkdirSync(dir);
  }
  res.status(200).send("Project folder has been created!");
});

APP.post("/lowerthirds/:id", (req, res) => {
  if (req.params.id == 1) {
    RENDERLT(
      "https://res.cloudinary.com/pitch-fx/raw/upload/v1637577241/LT/LT1_ngyugs.aep",
      "LT1",
      "LT1->LT_01->LT01_Line1->Text01_LT01",
      "LT1->LT_01->LT01_Line2->Text02_LT01",
      req
    );
  } else if (req.params.id == 2) {
    RENDERLT(
      "https://res.cloudinary.com/pitch-fx/raw/upload/v1637577240/LT/LT2_i3zbqc.aep",
      "LowerThird_08",
      "LowerThird_08->Lower third 08",
      "LowerThird_08->Lower third 08",
      req
    );
  } else if (req.params.id == 3) {
    RENDERLT(
      "https://res.cloudinary.com/pitch-fx/raw/upload/v1637577240/LT/LT3_xwtmiv.aep",
      "Snow LT maincomp",
      "Snow LT maincomp->Lower Third",
      "Snow LT maincomp->Lower Third",
      req
    );
  }
  res.sendStatus(200);
});

APP.post("/uploadVideo", (req, res) => {
  const files = req.body.files;
  if (files) {
    for (let data of files) {
      console.log("server", data.file);
      console.log("passed");
    }
  }
  res.send("het werkt");
});

// EXPORT

module.exports = APP;
