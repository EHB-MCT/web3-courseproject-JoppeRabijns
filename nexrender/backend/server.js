require('dotenv').config();
const EXPRESS = require('express');
const CORS = require('cors');
const APP = EXPRESS();
const { checkAddVideoBody } = require('./helpers/helper');
const CLOUDINARY = require('./config/cloudinary');
const { render } = require('@nexrender/core')

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


APP.post('/lowerthirds/:id', (req, res) => {
  if(req.params.id == 1){
    renderLT("https://res.cloudinary.com/pitch-fx/raw/upload/v1637577241/LT/LT1_ngyugs.aep","LT1","LT1->LT_01->LT01_Line1->Text01_LT01","LT1->LT_01->LT01_Line2->Text02_LT01", req)
  }else if(req.params.id == 2){
    renderLT("https://res.cloudinary.com/pitch-fx/raw/upload/v1637577240/LT/LT2_i3zbqc.aep","LowerThird_08","LowerThird_08->Lower third 08","LowerThird_08->Lower third 08", req)
  }else if(req.params.id == 3){
    renderLT("https://res.cloudinary.com/pitch-fx/raw/upload/v1637577240/LT/LT3_xwtmiv.aep","Snow LT maincomp","Snow LT maincomp->Lower Third","Snow LT maincomp->Lower Third", req)
  }
  res.sendStatus(200);
});

/** */
async function renderLT(url, comp, name, subtext, req){
const result = await render({
  "template": {
      "src": `${url}`,
      "composition": `${comp}`,
  },
  "assets": [
      {
          "type": "data",
          "layerName": "name",
          "property": "Source Text",
          "value": `${req.body.name}`,
          "composition": `${name}`
      },
      {
          "type": "data",
          "layerName": "title",
          "property": "Source Text",
          "value": `${req.body.title}`,
          "composition": `${subtext}`
      }
  ],
  "actions":{
      "predownload": [
          {
              "module": "@nexrender/action-cache",
              "cacheDirectory": "/Users/joppe.rabijns/WEB3/nexrender/cache"
          }
      ],
        "postdownload": [
          {
              "module": "@nexrender/action-cache",
              "cacheDirectory": "/Users/joppe.rabijns/WEB3/nexrender/cache"
          }
      ],
      "postrender": [
          {
              "module": "@nexrender/action-encode",
              "preset": "mov",
              "output": "encoded.mov"
          },
          {
              "module": "@nexrender/action-copy",     
              "output": `/Users/joppe.rabijns/WEB3/nexrender/outputs/encoded${Math.random()*100}.mov`
          }
      ]
  }
}
, {
  binary: '/Applications/AdobeAfterEffects/aerender',
  skipCleanup: true,
})
  }

APP.post('/uploadVideo', (req, res) => {
  console.log(req);
  if(!checkAddVideoBody(req.body)) 
    return res.status(400).send('Invalid data');
  return res.sendStatus(200);
  CLOUDINARY
    .uploader
    .upload(req.body.path, {
      resource_type: "video",
      // TODO: Add view before video upload screen to enter project name.
      //public_id: req.body.serverPath //"myfolder/mysubfolder/my_dog",
      overwrite: true
    }, (err, res) => {
      if (err)
        console.log(err);
      res.status(200).send(res);
    });
});

// EXPORT

module.exports = APP;