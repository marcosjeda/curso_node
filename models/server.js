const express   = require('express');
const cors      = require('cors');

const dbConexion = require('../db/config');

class server {
    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;
        // Conexión a la BD
        this.conectarBD();

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

    async conectarBD() {
        await dbConexion();
    }

    middleware () {
        // Se establece el middleware cors
        this.app.use( cors() );

        // Lectura y parseo de informacion de la peticion
        this.app.use( express.json() );

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