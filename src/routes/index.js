const fs = require('fs');

// var allowCrossDomain = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
// };

function routes(app) {
    fs.readdirSync(__dirname + '/').forEach(file => {
        if (file !== 'index.js') {
            const fileName = file.split('.')[0];
            app.use('/' + fileName, require('./' + fileName));
            // app.use(allowCrossDomain);
        }
    });
}

module.exports = routes;
