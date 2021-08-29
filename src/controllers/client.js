import { searchClients, fetchClientsByPolicyId, fetchAllClient, insertClient, updateClientById, fetchAllClientsByRegion } from '../repository';

const searchClientsByIds = async (req, res) => {
    try {
        const Customer_id = req.query.searchTerm;
        const data = await searchClients(+Customer_id);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const getClientsByPolicyId = async (req, res) => {
    try {
        const Policy_id = req.query.policyid;
        const data = await fetchClientsByPolicyId(+Policy_id);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const getAllClientsByRegion = async (req, res) => {
    try {
        const region = req.query.region;
        const data = await fetchAllClientsByRegion(region);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const getAllClients = async (req, res) => {
    try {
        const limit = req.query.limit;
        const data = await fetchAllClient(+limit);
        res.send(data);
    } catch (err) {
        throw err;
    }
};

const createClient = async (req, res) => {
    try {
        const payload = req.body;
        const data = await insertClient(payload);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

const updateClient = async (req, res) => {
    try {
        const payload = req.body;
        const data = await updateClientById(payload.Customer_id, payload);
        res.send({ data });
    } catch (err) {
        throw err;
    }
};

module.exports = {
  searchClientsByIds,
  getClientsByPolicyId,
  getAllClientsByRegion,
  getAllClients,
  createClient,
  updateClient
};
