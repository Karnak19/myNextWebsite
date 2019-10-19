import { Progress } from 'reactstrap';

const RaidProgressBar = ({ killed, total, difficulty }) => {
  return (
    <Progress value={killed} max={total} color="secondary" className="mb-1">
      {difficulty}: {killed} / {total}
    </Progress>
  );
};

export default RaidProgressBar;
