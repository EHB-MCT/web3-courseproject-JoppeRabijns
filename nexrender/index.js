const { render } = require('@nexrender/core')

const main = async () => {
    const result = await render({
        "template": {
            "src": "https://res.cloudinary.com/drxe6ukjd/raw/upload/v1634646007/testproject_ywxwwg.aep",
            "composition": "main"
        },
        "assets": [
            {
                "src": "https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/119637748_2797179560516846_4264613610708360867_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=7zeNyiMQkKIAX8jbMvo&_nc_ht=scontent-bru2-1.xx&oh=e469bc7cd8faa3a5814580313ba9f382&oe=6193E0E3",
                "type": "image",
                "layerName": "background.png"
            },
            {
              "type": "data",
              "layerName": "titel",
              "property": "Source Text",
              "value": "Wouter Heirstrate"
          }
        ],
        "actions":{
            "postrender": [
                {
                    "module": "@nexrender/action-encode",
                    "preset": "mov",
                    "output": "encoded.mov"
                },
                {
                    "module": "@nexrender/action-copy",
                    "input": "encoded.mov",
                    "output": "file:///Users/joppe.rabijns/Downloads/myresult.mov"
                }
            ]
        }
      }
      , {
        binary: '/Applications/AdobeAfterEffects/aerender',
        skipCleanup: true,
        debug: true,

    })
}

main().catch(console.error);

/* 

RUN SCRIPT 

nexrender-cli --file myjob.json --binary="/Applications/AdobeAfterEffects/aerender" 

*/


/* 

FIX PERMISSIONS MAC

sudo chmod 777 /Applications/AdobeAfterEffects/aerender 

*/