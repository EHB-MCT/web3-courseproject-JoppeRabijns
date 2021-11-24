require('dotenv').config();
const EXPRESS = require('express');
const CORS = require('cors');
const FS = require('fs');
const APP = EXPRESS();
const { checkAddVideoBody } = require('./helpers/helper');
const CLOUDINARY = require('./config/cloudinary');

// MIDDLEWARE
APP.use(CORS());
APP.use(EXPRESS.urlencoded({
  extended: true
}));
APP.use(EXPRESS.json());

// ROUTES

APP.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Hello');
});

APP.post('/uploadVideo', (req, res) => {
  console.log(req);
  if(!checkAddVideoBody(req.body)) 
    return res.status(400).send('Invalid data');
  return res.sendStatus(200);
  //CLOUDINARY
  //  .uploader
  //  .upload(req.body.path, {
  //    resource_type: "video",
  //    // TODO: Add view before video upload screen to enter project name.
  //    //public_id: req.body.serverPath //"myfolder/mysubfolder/my_dog",
  //    overwrite: true
  //  }, (err, res) => {
  //    if (err)
  //      console.log(err);
  //    res.status(200).send(res);
  //  });
});

APP.get('/lowerThirds', (req, res) => {
  console.log('LowerThirds called');
  FS.readdir('./assets/lowerThirds', (error, files) => {
    files.forEach(file => {
      console.log(file);
      //console.log(FS.readFile(file));
    })
    res.send(files);
  })
  //CLOUDINARY.api.resources((err, result) => {
  //  console.log(result, err); 
  //});
})

// EXPORT

module.exports = APP;