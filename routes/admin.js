const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.viewDashboard);
router.get('/dashboard', adminController.viewDashboard);

module.exports=router;