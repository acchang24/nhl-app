import { Game } from "../interfaces/Schedule";
import "./css/GameCard.css";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game);

  return (
    <div className="game-card">
      <header className="game-card-header">{game.venue.name}</header>
      <footer className="game-card-footer">
        {game.teams.away.team.name + " at " + game.teams.home.team.name}
      </footer>
    </div>
  );
};

export default GameCard;
