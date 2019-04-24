const serviceController = (req, res, next) => {
    res.render('services', {title: 'Services'});
}

module.exports = serviceController;