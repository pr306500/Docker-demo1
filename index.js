let app = require('express')(),
      bodyParser = require('body-parser'),
      dbConfig = require('./database/db_conn')();

      app.use(bodyParser.json());

      app.get('/',(req, res)=>{
          dbConfig.set('my test key', 'my test value')
          dbConfig.get('my test key', function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }
            res.send(result+'33')
        });
      });

      app.listen(3001,()=>{
          console.log('server is up');
      });