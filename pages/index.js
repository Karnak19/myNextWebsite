import Teaser from '../components/Teaser';
import Hr from '../components/Hr';
import Overview from '../components/Overview';
import GamesIntro from '../components/GamesIntro';

const Home = () => {
  return (
    <>
      <Teaser job="Trainer @ Wild Code School" name="Basile Vernouillet" />
      <Overview />
      <Hr />
      <GamesIntro />
    </>
  );
};

export default Home;
