import {Router} from 'express';
import { deletePlayer, getPlayerById, getPlayers, postPlayer, UpdatePlayer } from './controllers/player-controller';
import * as ClubsController from "./controllers/clubs-controller";
const router = Router();

router.get('/players', getPlayers);
router.get('/players/:id', getPlayerById);
router.post("/players", postPlayer);
router.delete("/player/:id",deletePlayer);
router.patch("/player/:id",UpdatePlayer);

router.get("/clubs", ClubsController.getClubs);
export default router;