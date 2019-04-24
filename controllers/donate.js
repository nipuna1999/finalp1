const donateController = (req, res, next) => {
    res.render('donate', {title: 'Donate'});
}

module.exports = donateController;