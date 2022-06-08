import User from "../modal/user.js";

class UserRepositoy {
  update(query, update, option = { new: true }) {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await User.findOneAndUpdate(query, update, option);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default UserRepositoy;
