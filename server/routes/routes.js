// load the new route for users
const userRoutes = require('./users')

const appRouter = (app, fs) => {
    // Default route
    app.get('/', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send('welcome to the development server');
    });

    userRoutes(app, fs);
};

module.exports = appRouter;