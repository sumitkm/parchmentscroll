import * as express from "express";
var router = express.Router();


    router.use((req, res, next) => {
      console.log('Time: ', Date.now());
      next();
    });
    // define the home page route
    router.get('/', (req: express.Request, res: express.Response) => {
      res.send('Birds home page');
    });
    // define the about route
    router.get('/about', (req: express.Request, res: express.Response) => {
      res.send('About birds');
    });

module.exports = router;
