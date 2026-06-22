  import express, { json, Request, Response, Router } from 'express';
  import { getPlayers } from './controllers/player-controller';
  import router from './routes';
  import cors from "cors";
  
function createApp() {
    const app = express();

  app.use(json());
  app.use("/api", router);
  //verficação de aplicação segura
  app.use(cors());
  return app;
}

export default createApp;

