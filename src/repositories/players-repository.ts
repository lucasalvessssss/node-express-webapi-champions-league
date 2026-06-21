import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 85,
      "Shooting": 92,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 38,
      "Physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 82,
      "Shooting": 93,
      "Passing": 80,
      "Dribbling": 86,
      "Defending": 35,
      "Physical": 78
    }
  },
  {
    "id": 3,
    "name": "Zinedine Zidane",
    "club": "Retired",
    "nationality": "France",
    "position": "Midfielder",
    "statistics": {
      "Overall": 91,
      "Pace": 78,
      "Shooting": 86,
      "Passing": 92,
      "Dribbling": 92,
      "Defending": 75,
      "Physical": 80
    }
  },
  {
    "id": 4,
    "name": "Ronaldinho",
    "club": "Retired",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 88,
      "Shooting": 87,
      "Passing": 88,
      "Dribbling": 95,
      "Defending": 40,
      "Physical": 75
    }
  },
  {
    "id": 5,
    "name": "Kaka",
    "club": "Retired",
    "nationality": "Brazil",
    "position": "Midfielder",
    "statistics": {
      "Overall": 89,
      "Pace": 86,
      "Shooting": 85,
      "Passing": 87,
      "Dribbling": 89,
      "Defending": 45,
      "Physical": 73
    }
  },
  {
    "id": 6,
    "name": "Thierry Henry",
    "club": "Retired",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 92,
      "Shooting": 90,
      "Passing": 82,
      "Dribbling": 90,
      "Defending": 45,
      "Physical": 78
    }
  },
  {
    "id": 7,
    "name": "Andres Iniesta",
    "club": "Retired",
    "nationality": "Spain",
    "position": "Midfielder",
    "statistics": {
      "Overall": 90,
      "Pace": 79,
      "Shooting": 80,
      "Passing": 91,
      "Dribbling": 92,
      "Defending": 70,
      "Physical": 65
    }
  },
  {
    "id": 8,
    "name": "Xavi",
    "club": "Retired",
    "nationality": "Spain",
    "position": "Midfielder",
    "statistics": {
      "Overall": 89,
      "Pace": 68,
      "Shooting": 79,
      "Passing": 93,
      "Dribbling": 88,
      "Defending": 72,
      "Physical": 68
    }
  },
  {
    "id": 9,
    "name": "Paolo Maldini",
    "club": "Retired",
    "nationality": "Italy",
    "position": "Defender",
    "statistics": {
      "Overall": 92,
      "Pace": 78,
      "Shooting": 60,
      "Passing": 78,
      "Dribbling": 72,
      "Defending": 95,
      "Physical": 88
    }
  },
  {
    "id": 10,
    "name": "Sergio Ramos",
    "club": "Monterrey",
    "nationality": "Spain",
    "position": "Defender",
    "statistics": {
      "Overall": 88,
      "Pace": 76,
      "Shooting": 72,
      "Passing": 78,
      "Dribbling": 75,
      "Defending": 89,
      "Physical": 86
    }
  },
  {
    "id": 11,
    "name": "Luka Modric",
    "club": "Real Madrid",
    "nationality": "Croatia",
    "position": "Midfielder",
    "statistics": {
      "Overall": 88,
      "Pace": 74,
      "Shooting": 79,
      "Passing": 90,
      "Dribbling": 89,
      "Defending": 72,
      "Physical": 68
    }
  },
  {
    "id": 12,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder",
    "statistics": {
      "Overall": 91,
      "Pace": 76,
      "Shooting": 88,
      "Passing": 94,
      "Dribbling": 88,
      "Defending": 65,
      "Physical": 78
    }
  },
  {
    "id": 13,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "Forward",
    "statistics": {
      "Overall": 90,
      "Pace": 78,
      "Shooting": 92,
      "Passing": 79,
      "Dribbling": 86,
      "Defending": 45,
      "Physical": 84
    }
  },
  {
    "id": 14,
    "name": "Karim Benzema",
    "club": "Al Ittihad",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 78,
      "Shooting": 90,
      "Passing": 83,
      "Dribbling": 87,
      "Defending": 40,
      "Physical": 80
    }
  },
  {
    "id": 15,
    "name": "Neymar Jr",
    "club": "Santos",
    "nationality": "Brazil",
    "position": "Forward",
    "statistics": {
      "Overall": 89,
      "Pace": 87,
      "Shooting": 84,
      "Passing": 86,
      "Dribbling": 93,
      "Defending": 38,
      "Physical": 63
    }
  },
  {
    "id": 16,
    "name": "Kylian Mbappe",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 97,
      "Shooting": 90,
      "Passing": 81,
      "Dribbling": 92,
      "Defending": 40,
      "Physical": 78
    }
  },
  {
    "id": 17,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 89,
      "Shooting": 94,
      "Passing": 70,
      "Dribbling": 82,
      "Defending": 45,
      "Physical": 90
    }
  },
  {
    "id": 18,
    "name": "Steven Gerrard",
    "club": "Retired",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "Overall": 89,
      "Pace": 76,
      "Shooting": 86,
      "Passing": 89,
      "Dribbling": 84,
      "Defending": 78,
      "Physical": 85
    }
  }
]
export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);

};

export const insertPlayer = async (player: PlayerModel)=> {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
}
export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<PlayerModel> =>{
  const playerIndex = database.findIndex(player => player.id === id);
  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }
   return database[playerIndex];
}