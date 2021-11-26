function aboutRoutes(app) {
    app.get('/about', (req, res) => {
        res.render('about')
    })
}