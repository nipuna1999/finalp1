const productController = (req, res, next) => {
    res.render('products', {title: 'Products'});
};

module.exports = productController;