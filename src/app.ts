  import express, { json, Request, Response, Router } from 'express';
  import { getPlayers } from './controllers/player-controller';
  import router from './routes';
  
function createApp() {
    const app = express();

  app.use(json());
  app.use("/api", router);
  return app;
}

export default createApp;

