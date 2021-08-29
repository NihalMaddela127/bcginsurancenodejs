import { client } from '../db/config'
let db = client.db('insurance');

const fetchUserById = async (user_name, password) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('agent');
            const data = await collection.find({user_name, password}).toArray();
            return data;
        }
    } catch (err) {
        //   Log.error('agent --> fetchUserById --> exception -->', err.message, err);
        throw err;
    }
};

const insertUser = async (payload) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('agent');
            const data = await collection.insertOne(payload);
            return data.insertedId;
        }
    } catch (err) {
        //   Log.error('agent --> insertUser --> exception -->', err.message, err);
        throw err;
    }
};

const updateUserByName = async ({userName, password}) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('agent');
            await collection.updateOne({userName}, { $set: {password} });
            return true;
        }
    } catch (err) {
        //   Log.error('agent --> updateUserByName --> exception -->', err.message, err);
        throw err;
    }
};

module.exports = {
  fetchUserById,
  insertUser,
  updateUserByName
};
