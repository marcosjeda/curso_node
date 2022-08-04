const express = require('express');
class server {
    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;

        this.middleware();

        this.routes();
    }

    middleware () {
        this.app.use( express.static('./public') );
    }

    routes () {
        this.app.get('/holi', (rq, rs) => {
            rs.send('Holi');
        });
    }

    listen () {
        this.app.listen(this.port,() => {
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }
}

module.exports = server;