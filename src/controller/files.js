import UserRepositoy from "../database/repository/userRepository.js";
const userRepository = new UserRepositoy();

export const uploadFiles = async (req, res) => {
  try {
    let user = await userRepository.update(
      { _id: req.user._id },
      { $push: { files: req.file.filename.split("/")[1] } }
    );
    if (user)
      res.status(200).json({
        status: "success",
        message: "File created successfully!!",
        files: user.files,
      });
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};

export const getFiles = async (req, res) => {
  try {
    let user = await userRepository.get({ _id: req.user._id });
    if (user) {
      res.status(200).json({
        status: "success",
        files: user.files,
      });
    }
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};
export const downloadFile = async (req, res) => {
  try {
    let filePath = `${process.cwd()}/public/files/${req.params.filename}`;

    res.download(filePath);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};
