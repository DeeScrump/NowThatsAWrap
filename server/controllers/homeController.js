function homeRoutes(app) {
    app.get('/', (req, res) => {
        res.render('home')
    })
}