const { render } = require('@nexrender/core')
const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.post("/", function (req, res) {
    let name = req.body.name
    main(name).catch(console.error);
});

const listener = app.listen(3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})

const main = async (name) => {
    const result = await render({
        "template": {
            "src": "https://res.cloudinary.com/drxe6ukjd/raw/upload/v1636362722/testproject_yxsdil.aep",
            "composition": "main",
        },
        "assets": [
            {
                "src": "https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
                "type": "image",
                "layerName": "image"
            },
            {
                "type": "data",
                "layerName": "Naam",
                "property": "Source Text",
                "value": `${name}`
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

