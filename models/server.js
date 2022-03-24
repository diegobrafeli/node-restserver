const express = require('express');
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        //Middlewares
        this.middlewares();

        //routes for my app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Read and parse of body
        this.app.use( express.json() );

        //File public
        this.app.use( express.static('public'));
    }

    routes(){

        this.app.use(this.userPath, require('../routes/user'));

        this.app.get('*', (req, res) => {
            res.send('404 | Page not found!')
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }

}

module.exports = Server;