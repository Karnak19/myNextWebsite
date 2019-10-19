import axios from 'axios';
import { Container } from 'reactstrap';

import Layout from '../components/layout/Layout';
import Content from '../components/games/Content';
import CharProfile from '../components/games/CharProfile';
import CharProgress from '../components/games/CharProgress';
import WithProjectSection from '../components/games/WithProjectSection';
import CharMythicPlus from '../components/games/CharMythicPlus';

const WoW = ({ profile, progress, mythic_plus }) => {
  console.log(mythic_plus);

  return (
    <Layout>
      <section className="cta-section py-5">
        <Container className="single-col-max-width">
          <h2 className="heading text-center"> World of Warcraft</h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat molestiae
              distinctio pariatur, quam ea quae mollitia. Odio, cum sint quis consectetur alias quae
              amet, soluta voluptas delectus nesciunt reprehenderit.
            </p>
          </div>
        </Container>
      </section>
      <Content>
        <CharProfile {...profile} />
        <WithProjectSection>
          <CharProgress {...progress} />
          <CharMythicPlus runs={mythic_plus} />
        </WithProjectSection>
      </Content>
    </Layout>
  );
};

WoW.getInitialProps = async ({ req }) => {
  const res = await axios.get(
    'https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=gear%2Cguild%2Craid_progression%2Cmythic_plus_best_runs'
  );
  const datas = res.data;

  return {
    profile: {
      pseudo: datas.name,
      realm: datas.realm,
      race: datas.race,
      image: 'https://i.imgur.com/buKcAHw.png',
      faction: datas.faction,
      ilv_max: datas.gear.item_level_total,
      woWClass: `${datas.active_spec_name} ${datas.class}`,
      url: datas.profile_url,
      guild: datas.guild.name
    },
    progress: datas.raid_progression,
    mythic_plus: datas.mythic_plus_best_runs
  };
};

export default WoW;
