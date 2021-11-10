const { createClient } = require('@nexrender/api')

const client = createClient({
    host: 'http://localhost:3003/',
    secret: 'myapisecret',
})

const main = async () => {
    const result = await client.addJob({
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
              "value": "Joppe"
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

    result.on('created', job => console.log('project has been created'))
    result.on('started', job => console.log('project rendering started'))
    result.on('progress', (job, percents) => console.log('project is at: ' + percents + '%'))
    result.on('finished', job => console.log('project rendering finished'))
    result.on('error', err => console.log('project rendering error', err))
}
main().catch(console.error);
