const contactController =  (req, res, next) => {
    res.render('contact', {title: 'Contact'});
}

module.exports = contactController;