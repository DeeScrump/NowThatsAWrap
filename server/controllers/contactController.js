function contactRoutes(app) {
    app.get('/contact', (req, res) => {
        res.render('contact')
    })
}