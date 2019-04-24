const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const productController = require('../controllers/products');
const serviceController = require('../controllers/service');
const donateController = require('../controllers/donate');
const articleController = require('../controllers/article');
const careersController = require('../controllers/careers');
const contactController = require('../controllers/contact');

router.get('',  homeController);
router.post('', homeController);

router.get('/products',  productController);
router.post('/products', productController);

router.get('/services', serviceController);
router.post('/services', serviceController);

router.get('/donate', donateController);
router.post('/donate',  donateController);

router.get('/articles', articleController);
router.post('/articles', articleController);

router.get('/careers', careersController);
router.post('/careers', careersController);

router.get('/contact', contactController);
router.post('/contact', contactController);




module.exports = router;