const userRoutes = (app, fs) => {
    const dataPath = '/Users/ratiksha/Civica/technical-test/server/data/personnel.json';

    app.get('/api/personnel', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            const filters = req.query;
            if (Object.keys(filters).length === 0) {
                res.send(JSON.parse(data));
            } else {
                const filteredUsers = JSON.parse(data).filter(user => {
                    let isValid = true;
                    for (key in filters) {
                      isValid = isValid && user[key] == filters[key];
                    }
                    return isValid;
                  });
                res.send(JSON.parse(filteredUsers));
            }
            if (err) {
                throw err;
            }
        });
    });  
}

module.exports = userRoutes;