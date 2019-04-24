const articleController = (req, res, next) => {
    res.render('articles', {title: 'Articles'});
}

module.exports = articleController;