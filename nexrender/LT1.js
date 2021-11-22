const { render } = require('@nexrender/core')

const main = async (name) => {
    const result = await render({
        "template": {
            "src": "https://res.cloudinary.com/drxe6ukjd/raw/upload/v1637051625/LowerThird_01_x1xv8u.aep",
            "composition": "LT1",
        },
        "assets": [
            {
                "type": "data",
                "layerName": "name",
                "property": "Source Text",
                "value": `Joppe Rabijns`,
                "composition": "LT1->LT_01->LT01_Line1->Text01_LT01"
            },
            {
                "type": "data",
                "layerName": "title",
                "property": "Source Text",
                "value": `Student Multec`,
                "composition": "LT1->LT_01->LT01_Line2->Text02_LT01"
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

main();