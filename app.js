
const Bayside = require('bayside');

// custom user variables
const config = {
    root: __dirname,
    port: 3000,
    templates: 'templates'
}

const app = new Bayside(config);

// views
app.views.index = function (request, response) {
    app.template(response, "index.html", { title: "Home" });
}

// urls
app.urls['/'] = {
    method: "get",
    controller: 'index'
};

app.urls['/api'] = {
    method: "get",
    controller(request, response) {
        app.returnJson(response, {
            hello: "World"
        });
    }
};
        