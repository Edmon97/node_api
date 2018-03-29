const express = require('express');
const router = express.Router();
const multer = require('multer');

const checkAuth = require('../middleware/check-auth');

const productController = require('../controllers/products.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        cb(null, true);
    else
        cb(new Error('Error file extension'), false);
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/', productController.getAllProducts);

router.post('/', checkAuth, upload.single('productImage'), productController.createProduct);

router.get('/:productId', productController.getProductById);

router.patch('/:productId', checkAuth, productController.editProduct);

router.delete('/:productId', checkAuth, productController.deleteProduct);

module.exports = router;