const path = require('path');
const handlebars = require('express-handlebars');

function configHandlebars(app) {

    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve('src/views'));

    return app;
}

module.exports = configHandlebars;