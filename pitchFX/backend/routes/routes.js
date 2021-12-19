const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();
const CONTROLLER = require("../controllers/controller");

ROUTER.get("/", (req, res) => res.send("Hello world"));
ROUTER.get("/videos/:title", CONTROLLER.getVideos);
ROUTER.post("/render", CONTROLLER.render);
ROUTER.post("/createProject", CONTROLLER.createProject);
ROUTER.post("/lowerthirds/:id", CONTROLLER.lowerThirds);
ROUTER.post("/uploadVideo", CONTROLLER.uploadMiddle, CONTROLLER.uploadVideo);

module.exports = ROUTER;
