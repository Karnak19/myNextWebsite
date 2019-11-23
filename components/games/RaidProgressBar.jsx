import { Progress } from 'reactstrap';

const RaidProgressBar = ({ killed, total, difficulty }) => {
  const color =
    (difficulty === 'Mythic' && 'danger') ||
    (difficulty === 'Heroic' && 'warning') ||
    (difficulty === 'Normal' && 'success');
  return (
    <Progress value={killed} max={total} color={color} className="mb-1">
      {difficulty}: {killed} / {total}
    </Progress>
  );
};

export default RaidProgressBar;
