import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import dotenv from "dotenv";

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
  region: REGION,
});

const BUCKET_NAME = "cyclic-gold-sleepy-reindeer-us-west-1";
const REGION = process.env.AWS_REGION;
const ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
const SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY;

const uploadWithMulter = () =>
  multer({
    storage: multerS3({
      s3: s3,
      bucket: BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldname: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, file.originalname);
      },
    }),
  }).array("s3Images", 2);

uploadToAws = (req, res) => {
  const upload = uploadWithMulter();

  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.json({ err, msg: "error ocurred while uploading" });
    }

    res.json({ msg: "files uploaded", files: req.files });
  });
};

const router = express.Router();

router.post("/upload", uploadToAws);

module.exports = router;

// // store something
// await s3.putObject({
//     Body: JSON.stringify({key:"value"}),
//     Bucket: "cyclic-gold-sleepy-reindeer-us-west-1",
//     Key: "some_files/my_file.json",
// }).promise()

// // get it back
// let my_file = await s3.getObject({
//     Bucket: "cyclic-gold-sleepy-reindeer-us-west-1",
//     Key: "some_files/my_file.json",
// }).promise()

// console.log(JSON.parse(my_file))
