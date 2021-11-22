const { render } = require('@nexrender/core')

const main = async (name) => {
    const result = await render({
        "template": {
            "src": "https://res.cloudinary.com/drxe6ukjd/raw/upload/v1637063455/LT3_wqm43n.aep",
            "composition": "Snow LT maincomp",
        },
        "assets": [
            {
                "type": "data",
                "layerName": "name",
                "property": "Source Text",
                "value": `Joppe Rabijns`,
                "composition": "Snow LT maincomp->Lower Third"
            },
            {
                "type": "data",
                "layerName": "title",
                "property": "Source Text",
                "value": `Student Multec`,
                "composition": "Snow LT maincomp->Lower Third"
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