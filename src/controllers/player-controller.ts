import { Request, Response } from 'express';
import * as service from '../services/players-service';
import { noContent, ok } from '../utils/http-helper';
import { statisticsModel } from '../models/statistics-model';

export const getPlayers = async(req: Request, res: Response) => {
   const httpResponse = await service.getPlayerService();
   
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  export const getPlayerById = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const httpResponse = await service.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  export const postPlayer = async (req: Request, res: Response ) => {
    const bodyValue = req.body;
    const httpResponse = await service.createPlayerService(bodyValue);
    if(httpResponse){
      res.status(httpResponse.statusCode).json(httpResponse.body);
    }/*else{
      const response = await noContent();
      res.status(response.statusCode).json(response.body);
    }
    console.log(bodyValue);*/
}
export const deletePlayer = async (req: Request, res: Response) => {
  //implementar a função de deletar
  const id = parseInt(req.params.id as string, 10);
  const httpResponse = await service.deletePlayerService(id);
   res.status(httpResponse.statusCode).json(httpResponse.body);
  res.status(200).json({message: "Player deleted successfully"});
}

export const UpdatePlayer = async (req: Request, res: Response) => {
  //implementar a função de atualizar
  const id = parseInt(req.params.id as string, 10);
  const bodyValue: statisticsModel = req.body;
  const httpResponse = await service.updatePlayerService(id, bodyValue);
  res.status(200).json({message: "Player updated successfully"});
}

