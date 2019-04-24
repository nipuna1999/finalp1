const careersController =  (req, res, next) => {
    res.render('careers', {title: 'Careers'});
}

module.exports = careersController;