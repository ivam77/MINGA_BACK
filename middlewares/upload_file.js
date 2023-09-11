import multer from "multer";

function uploadFile() {
  const storage = multer.memoryStorage({
    filename: function (req, file, cb) {
      let extension = file.originalname.slice(file.originalname.lastIndexOf("."));
      let filename = Date.now() + extension;
      cb(null, filename);
    },
  });

  const upload = multer({
    storage,
    limits: { fileSize: 9999999999 },
    fileFilter: function (req, file, cb) {
      let type = file.mimetype.startsWith("image/");
      type ? cb(null, true) : cb(new Error("File is not an image"));
    },
  }).single("photo");
  return upload;
}

export default uploadFile;
