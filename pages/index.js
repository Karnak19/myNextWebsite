import Teaser from '../components/Teaser';
import Hr from '../components/Hr';
import Overview from '../components/Overview';

const Home = () => {
  return (
    <>
      <Teaser job="Trainer @ Wild Code School" name="Basile Vernouillet" />
      <Overview />
      <Hr />
    </>
  );
};

export default Home;
