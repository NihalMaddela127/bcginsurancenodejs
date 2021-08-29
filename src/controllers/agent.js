import { fetchUserById, insertUser, updateUserByName } from '../repository';

const getUserById = async (req, res) => {
    try {
        const userName = req.params.userName;
        const password = req.params.password;
        const data = await fetchUserById(userName, password);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const createUser = async (req, res) => {
    try {
        const payload = req.body;
        const data = await insertUser(payload);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const updateUser = async (req, res) => {
    try {
        const payload = req.body;
        const data = await updateUserByName(payload);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

module.exports = {
  getUserById,
  createUser,
  updateUser
};
