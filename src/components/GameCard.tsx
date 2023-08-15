import { Link } from "react-router-dom";
import { Game } from "../interfaces/Schedule";
import "./css/GameCard.css";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);

  return (
    <div className="game-card">
      <header className="game-card-header">Matchup</header>
      <div className="game-card-body">
        <div className="game-card-teams-row">
          <div className="game-card-team grid-item">
            <Link to={`/teams/${game.teams.away.team.id}`}>
              <img
                className="team-logo-medium game-card-logo"
                src={`/images/${game.teams.away.team.id}.png`}
                alt="team-logo"
              />
              <div>{game.teams.away.team.name}</div>
            </Link>
          </div>
          <div className="game-at grid-item">@</div>
          <div className="game-card-team grid-item">
            <Link to={`/teams/${game.teams.home.team.id}`}>
              <img
                className="team-logo-medium game-card-logo"
                src={`/images/${game.teams.home.team.id}.png`}
                alt="team-logo"
              />
              <div>{game.teams.home.team.name}</div>
            </Link>
          </div>
        </div>
      </div>
      <footer className="game-card-footer">
        <div>{`${game.gameDate.slice(5, 10)}-${game.gameDate.slice(
          0,
          4
        )}`}</div>
      </footer>
    </div>
  );
};

export default GameCard;
