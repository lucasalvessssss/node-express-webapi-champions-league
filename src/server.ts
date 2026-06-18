  import express, {json, Request, Response} from 'express';
import createApp from './app';


  const port = process.env.PORT;
  const app = createApp();
  
  app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
  });

