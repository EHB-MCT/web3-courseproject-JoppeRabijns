const Model = require('../models/model');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
    },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

const uploadModel = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log(file.mimetype);
  if (file.mimetype == "application/octet-stream" || file.mimetype == "model/gltf-binary") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .glb, .gltf format allowed!'));
  }
} 
}).single('model');

const getAllModels = (req, res) => {
  Model.find({}, (err, data)=>{
      if (err){
          return res.json({Error: err});
      }
      return res.json(data);
  })
};

const newModel = (req, res) => {
  Model.findOne({ title: req.body.title }, (err, data) => {
      if (!data) {
          const newModel = new Model({
              title: req.body.title,
              model: `http://localhost:4000/${req.file.path}`, 
              creator: req.body.creator,
              size: req.body.size,
          })

          newModel.save((err, data)=>{
              if(err) return res.json({Error: err});
          })
      }else{
          if(err) return res.json(`Something went wrong, please try again. ${err}`);
          return res.json({message:"Model already exists"});
      }
  })    
};

const getOneModel = (req, res) => {
  let title = req.params.title; 

  Model.findOne({title:title}, (err, data) => {
  if(err || !data) {
      return res.json({message: "Tea doesn't exist."});
  }
  else return res.json(data); 
  });
};


module.exports = {
  getAllModels, 
  newModel,
  uploadModel,
  getOneModel,
};

