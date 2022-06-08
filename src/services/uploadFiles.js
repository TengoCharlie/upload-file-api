import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

export const upload = multer({
  storage: multerStorage,
});
