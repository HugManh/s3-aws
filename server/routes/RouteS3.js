const RouteS3 = require("express").Router();
const S3Ctrl = require("../controllers/S3Ctrl");

RouteS3
  .route("/:bucketname/:objectpath(*)?/:filename")
  .post(S3Ctrl.generateUrlUpload)
  .get(S3Ctrl.getData)
// RouteS3
//   .route("/:bucketname")
//   .get(S3Ctrl.listKeys)

module.exports = RouteS3
