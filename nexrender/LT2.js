const { render } = require('@nexrender/core')

const main = async (name) => {
    const result = await render({
        "template": {
            "src": "https://res.cloudinary.com/drxe6ukjd/raw/upload/v1637052003/312-AE-Version_oqt0yv.aep",
            "composition": "LowerThird_08",
        },
        "assets": [
            {
                "type": "data",
                "layerName": "MainText",
                "property": "Source Text",
                "value": `Joppe Rabijns`,
                "composition": "LowerThird_08->Lower third 08"
            },
            {
                "type": "data",
                "layerName": "Subtext",
                "property": "Source Text",
                "value": `Student Multec`,
                "composition": "LowerThird_08->Lower third 08"
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