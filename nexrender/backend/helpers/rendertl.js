const { render } = require("@nexrender/core");

async function renderLT(url, comp, name, subtext, req) {
  const result = await render(
    {
      template: {
        src: `${url}`,
        composition: `${comp}`,
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
            cacheDirectory: "/Users/joppe.rabijns/WEB3/nexrender/cache",
          },
        ],
        postdownload: [
          {
            module: "@nexrender/action-cache",
            cacheDirectory: "/Users/joppe.rabijns/WEB3/nexrender/cache",
          },
        ],
        postrender: [
          {
            module: "@nexrender/action-encode",
            preset: "mov",
            output: "encoded.mov",
          },
          {
            module: "@nexrender/action-copy",
            output: `/Users/joppe.rabijns/WEB3/nexrender/backend/outputs/${req.body.projectName}/LT.mov`,
          },
        ],
      },
    },
    {
      binary: "/Applications/AdobeAfterEffects/aerender",
      skipCleanup: true,
    }
  );
}

module.exports = renderLT;
