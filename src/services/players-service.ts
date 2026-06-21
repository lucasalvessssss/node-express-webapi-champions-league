import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { noContent, ok } from "../utils/http-helper";


export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if(data){
    response = await HttpResponse.ok(data);
  }
  else{
    response =await HttpResponse.noContent();
  }

    return response ;
};

export const getPlayerByIdService = async (id: number) => {
  //perdir para o repositorio
  const data = await findPlayerById(id);
  let response = null;

  if(data){
    response = await HttpResponse.ok(data);
  }
  else{
    response = await HttpResponse.noContent();
  }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  //verficação se é vazio
  let response = null;
  if(Object.keys(player).length !== 0){
   await insertPlayer(player);
    response = await HttpResponse.created();
  }else{
    response = await HttpResponse.badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  //implementar a função de deletar
  let response = null;  
  await deleteOnePlayer(id);
  response = await HttpResponse.ok({message: "Player deleted successfully"});
  return response;
}

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
  //implementar a função de atualizar
  const data = await findAndModifyPlayer(id, statistics);
  let response = null;
  if(Object.keys(data).length === 0){
     response = await HttpResponse.badRequest();
  }
  response = await HttpResponse.ok(data);
  return response;
}


