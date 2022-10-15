const mongoose = require('mongoose');

const dbConexion = async () => {
    try {
        await mongoose.connect(`${ process.env.MONGO_CNN }://${ process.env.DB_USER }:${ process.env.DB_PASS }@${ process.env.DB_HOST }/${ process.env.DB_NAME }`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        });

        console.log('BD conectada correctamente');
    } catch (error) {
        console.error("Error: No se pudo conectar a la BD\n - ", error);
    }
}

module.exports = dbConexion;