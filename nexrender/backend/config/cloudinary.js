require('dotenv');
// TODO: Change inline variables to .env file.
const CLOUDINARY = require('cloudinary').v2.config({ 
  cloud_name: process.env.CLOUD_NAME ? process.env.CLOUD_NAME : 'pitch-fx', 
  api_key: process.env.API_KEY ? process.env.API_KEY : '851935674665131', 
  api_secret: process.env.API_SECRET ? process.env.API_SECRET : 'hl3A_w_tUAvBLyOZ5NqHwwGyZ9g', 
});

module.exports = CLOUDINARY