import UserRepositoy from "../database/repository/userRepository.js";
const userRepository = new UserRepositoy();

export const uploadFiles = async (req, res) => {
  try {
    let user = await userRepository.update(
      { _id: req.user._id },
      { $push: { files: req.file.filename } }
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
