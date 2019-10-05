import Layout from "../components/layout/Layout";
import Teaser from "../components/Teaser";
import Hr from "../components/Hr";
import Overview from "../components/Overview";

const Home = () => {
  return (
    <Layout>
      <Teaser job="Trainer @ Wild Code School" name="Basile Vernouillet" />
      <Overview />
      <Hr />
    </Layout>
  );
};

export default Home;
