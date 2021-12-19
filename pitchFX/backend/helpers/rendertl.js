const { render } = require("@nexrender/core");

async function renderLT(url, comp, name, subtext, req, res) {
  const result = await render(
    {
      template: {
        src: `${url}`,
        composition: `${comp}`,
        outputModule: "HQWA",
        outputExt: "mov",
      },
      assets: [
        {
          type: "data",
          layerName: "name",
          property: "Source Text",
          value: `${req.body.name}`,
          composition: `${name}`,
        },
        {
          type: "data",
          layerName: "title",
          property: "Source Text",
          value: `${req.body.title}`,
          composition: `${subtext}`,
        },
      ],
      actions: {
        predownload: [
          {
            module: "@nexrender/action-cache",
            cacheDirectory: "/Users/joppe.rabijns/WEB3/pitchFX/backend/cache",
          },
        ],
        postdownload: [
          {
            module: "@nexrender/action-cache",
            cacheDirectory: "/Users/joppe.rabijns/WEB3/pitchFX/backend/cache",
          },
        ],
        postrender: [
          {
            module: "@nexrender/action-encode",
            preset: "mp4",
            output: "encoded.mp4",
          },
          {
            module: "@nexrender/action-copy",
            output: `/Users/joppe.rabijns/WEB3/pitchFX/backend/outputs/${req.body.projectName}/LT.mp4`,
          },
        ],
      },
    },
    {
      binary: "/Applications/AdobeAfterEffects/aerender",
      skipCleanup: true,
    }
  ).then(() => {
    return res.sendStatus(200);
  });
}

module.exports = renderLT;
