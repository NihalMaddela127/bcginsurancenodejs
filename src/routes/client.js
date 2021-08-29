const express = require('express');
const router = express.Router();
import { searchClientsByIds, getClientsByPolicyId, getAllClients, createClient, updateClient, getAllClientsByRegion } from '../controllers';

router.get('/searchClientsByIds', searchClientsByIds);
router.get('/getClientsByPolicyId', getClientsByPolicyId);
router.get('/getAllClients', getAllClients);
router.get('/getAllClientsByRegion', getAllClientsByRegion);
router.post('/createClient', createClient);
router.put('/updateClient', updateClient);

// error handler
router.use((err, req, res, next) => {
if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports = router;
