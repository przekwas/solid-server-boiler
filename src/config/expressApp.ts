import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// routes
import { appRoutes } from '../routes';

// middlewares
import { catchAllErrorHandler } from '../middlewares/catchAllErrorHandler';
import { routeNotFoundHandler } from '../middlewares/routeNotFoundHandler';

export const expressApp = async () => {
  // create express app
  const app = express() 

  // enable CORS - Cross Origin Resource Sharing
  app.use(cors())

  // parse body params and attatch them to req.body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // mount api v1 routes
  app.use('/v1/api/', appRoutes)

  // /**
  //  * Catch All Errors,
  //  * which are missed by try-catch blocks,
  //  * within all routes above
  //  */
  app.use(catchAllErrorHandler)

  // /**
  //  * When a route is not found,
  //  * return a response,
  //  * instead of an html page(default express behaviour)
  //  */
  app.use(routeNotFoundHandler)

  return app;
}
