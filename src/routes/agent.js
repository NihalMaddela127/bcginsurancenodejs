const express = require('express');
const router = express.Router();
import { getUserById, createUser, updateUser } from '../controllers';

router.get('/getUserById', getUserById);
router.post('/createUser', createUser);
router.put('/updateUser', updateUser);

// error handler
router.use((err, req, res, next) => {
if (err.isBoom) {
    return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports = router;
