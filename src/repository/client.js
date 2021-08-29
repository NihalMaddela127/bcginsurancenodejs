import { client } from '../db/config'
let db = client.db('insurance');

const searchClients = async (searchTerm) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('client');
            const data = await collection.find({$or:[{Customer_id: searchTerm},{Policy_id:searchTerm}]}).toArray();
            return data;
        }
    } catch (err) {
        //   Log.error('Client --> fetchClientById --> exception -->', err.message, err);
        throw err;
    }
};

const fetchClientsByPolicyId = async (Policy_id) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('client');
            const data = await collection.find({Policy_id}).toArray();
            return data;
        }
    } catch (err) {
        //   Log.error('Client --> fetchClientsByPolicyId --> exception -->', err.message, err);
        throw err;
    }
};

const fetchAllClientsByRegion = async (Customer_Region) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('client');
            const data = await collection.find({Customer_Region}).toArray();
            return data;
        }
    } catch (err) {
        //   Log.error('Client --> fetchClientsByPolicyId --> exception -->', err.message, err);
        throw err;
    }
};

const fetchAllClient = async (limit) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('client');
            const query = await collection.find({}).sort({ Policy_id: 1 }).limit(limit);
            const data = await query.toArray();
            const totalCount = await collection.count();
            return {data, totalCount};
        }
    } catch (err) {
        //   Log.error('Client --> fetchAllClient --> exception -->', err.message, err);
        throw err;
    }
};

const insertClient = async (payload) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('client');
            const data = await collection.insertOne(payload);
            return data.insertedId;
        }
    } catch (err) {
        //   Log.error('Client --> insertClient --> exception -->', err.message, err);
        throw err;
    }
};

const updateClientById = async (Customer_id, data) => {
    try {
        if(client.topology.isConnected()) {
            const collection = db.collection('client');
            await collection.updateOne({Customer_id}, { $set: {...data} });
            return true;
        }
    } catch (err) {
        //   Log.error('Client --> updateClientById --> exception -->', err.message, err);
        throw err;
    }
};

module.exports = {
  searchClients,
  fetchClientsByPolicyId,
  fetchAllClientsByRegion,
  fetchAllClient,
  insertClient,
  updateClientById
};
