const Api = require('./server/routes/api');

class Server {
  constructor() {

    // Server setup
    this.express = require('express');
    this.app = this.express();
    this.path = require('path');
    this.apiRouters = this.express.Router();
    this.api = {};
    this.bodyParser = require('body-parser');
    this.port = 0;

    // Mongoose setup
    this.mongoose = require('mongoose');
    
  }

  activeMongoConncetion() {
    this.mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/tomerDB', {
      useNewUrlParser: true
    });
  }

  startExpressConfig(){
    this.app.use(this.bodyParser.urlencoded({extended: false}));
    this.app.use(this.bodyParser.json());
    process.env.PORT ? this.port = process.env.PORT : this.port = 8000
    
  }

  findPort(){
    if (process.env.PORT) //for production enviroment
    {
      console.log('production')
      this.app.use(this.express.static(this.path.join(__dirname, 'build')));
      this.app.get('*',  (req, res)=> {
        res.sendFile(this.path.join(__dirname, 'build', 'index.html'));
      })
    } 
    
    else // for dev enviroment
    {
      console.log('dev')
    
      this.app.use( (req, res, next)=> {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
        res.header('Access-Control-Allow-Credentials', true);
        next()
      })


    }
  }

  activeApi(){
    this.api = new Api(this.apiRouters , this.path);
    this.app.use('/', this.apiRouters);
    this.api.appStarted();
    this.api.getUsers();
    this.api.addUser();
  }

  addAppLister(){
    console.log(" this.port : ", this.port)
    this.app.listen(this.port, ()=> {
      console.log(`Running on port ${this.port}`)
    })
  }

  activeteServer(){
    this.activeMongoConncetion();
    this.startExpressConfig();
    this.findPort();
    this.activeApi();
    this.addAppLister();
  }

}

const server = new Server();
server.activeteServer();












