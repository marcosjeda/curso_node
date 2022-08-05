const express   = require('express');
const cors      = require('cors');

class server {
    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;

        // Inicio del middleware
        this.middleware();

        // Definición de las rutas
        const rutas = [
            {
                route: '/usuarios',
                router: 'users.routes'
            }
        ];
        
        // Entrega de las rutas al manejador para su procesamiento
        this.routes(rutas);
    }

    middleware () {
        // Se establece el middleware cors
        this.app.use( cors() );
        this.app.use( express.static('./public') );
    }

    routes (routes = []) {
        routes.forEach(routeObj => {
            this.app.use(routeObj.route, require(`../routes/${ routeObj.router }.js`));
        });
    }

    listen () {
        this.app.listen(this.port,() => {
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }
}

module.exports = server;