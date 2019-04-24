const homeController = (req, res, next) => {
    res.render('home', {title: 'Home Page'});
};

module.exports = homeController;