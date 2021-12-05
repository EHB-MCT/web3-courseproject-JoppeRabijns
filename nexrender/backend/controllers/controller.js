const MULTER = require("multer");
const RENDERLT = require("../helpers/rendertl");
const FFMPEG = require("fluent-ffmpeg");
const FS = require("fs");
const MODEL = require("../models/model");

const videoNames = [];

const storage = MULTER.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./outputs`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadMiddle = MULTER({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log("uploadModelMiddleware", file);
    videoNames.push(file.originalname);
    if (file.mimetype == "video/mp4" || file.mimetype == "video/quicktime") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .mp4, .mov format allowed!"));
    }
  },
}).array("videofiles");

const render = (req, res) => {
  let mergedVideo = FFMPEG();

  req.body.videoNames.forEach((video) => {
    mergedVideo = mergedVideo.addInput(video.url).seekInput(video.inTime);
  });

  mergedVideo
    .mergeToFile(
      `/Users/joppe.rabijns/WEB3/nexrender/backend/outputs/${req.body.projectName}/renderZonderLT.mp4`
    )
    .on("progress", function (progress) {
      console.log(`${progress.percent}`);
    })
    .on("error", function (err) {
      console.log("Error " + err.message);
    })
    .on("end", function () {
      LT();
    });

  function LT() {
    FFMPEG(
      `/Users/joppe.rabijns/WEB3/nexrender/backend/outputs/${req.body.projectName}/renderZonderLT.mp4`
    )
      .input(
        `/Users/joppe.rabijns/WEB3/nexrender/backend/outputs/${req.body.projectName}/LT.mp4`
      )
      .complexFilter(
        [
          {
            filter: "overlay",
            options: {
              enable: "between(t,0,7)",
              x: "0",
              y: "0",
            },
            inputs: "[0:v][1:v]",
            outputs: "tmp",
          },
        ],
        "tmp"
      )
      .outputOptions(["-map 0:a"])
      .output(
        `/Users/joppe.rabijns/WEB3/nexrender/backend/outputs/${req.body.projectName}/render.mp4`
      )
      .on("end", function () {
        console.log("finished");
        res.send(
          `http://localhost:5000/outputs/${req.body.projectName}/render.mp4`
        );
      })
      .run();
  }
};

const createProject = (req, res) => {
  videoNames.length = 0;
  const dir = `./outputs/${req.body.projectName}`;

  if (!FS.existsSync(dir)) {
    FS.mkdirSync(dir);
  }
  res.status(200).send("Project folder has been created!");
};

const lowerThirds = (req, res) => {
  if (req.params.id == 1) {
    RENDERLT(
      "https://res.cloudinary.com/pitch-fx/raw/upload/v1637577241/LT/LT1_ngyugs.aep",
      "LT1",
      "LT1->LT_01->LT01_Line1->Text01_LT01",
      "LT1->LT_01->LT01_Line2->Text02_LT01",
      req,
      res
    );
  } else if (req.params.id == 2) {
    RENDERLT(
      "https://res.cloudinary.com/drxe6ukjd/raw/upload/v1638362816/LT2_a0zmif_bfjvpm.aep",
      "LT2",
      "LT2->Lower third 08",
      "LT2->Lower third 08",
      req,
      res
    );
  } else if (req.params.id == 3) {
    RENDERLT(
      "https://res.cloudinary.com/pitch-fx/raw/upload/v1637577240/LT/LT3_xwtmiv.aep",
      "Snow LT maincomp",
      "Snow LT maincomp->Lower Third",
      "Snow LT maincomp->Lower Third",
      req,
      res
    );
  }
};

const uploadVideo = (req, res) => {
  console.log("videoUpload", req.body);
  let videoPaths = videoNames.map((name) => `http://localhost:5000/${name}`);
  console.log(videoNames);
  MODEL.findOne({ title: req.body.title }, (err, data) => {
    if (!data) {
      const newModel = new MODEL({
        title: req.body.title,
        video: videoPaths,
      });

      newModel.save((err, data) => {
        if (err) return res.json({ Error: err });
        return res.send(data);
      });
    } else {
      return res.json({ message: "Project already exists" });
    }
  });
};

const getVideos = (req, res) => {
  console.log(req.params.title);
  MODEL.findOne({ title: `${req.params.title}` }, function (err, obj) {
    console.log(obj);
  });
};

module.exports = {
  render,
  createProject,
  lowerThirds,
  uploadVideo,
  uploadMiddle,
  getVideos,
};
