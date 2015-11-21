import * as express from "express";
var router = express.Router();


router.use((req, res, next) =>
{
  console.log('Getting Blog Service:', Date.now());
  next();
});

// define the home page route
router.get('/services/blog/{id}', (req: express.Request, res: express.Response) => 
{
  res.send('Birds home page');
});

module.exports = router;
