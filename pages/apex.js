import axios from 'axios';

import ComingSoon from '../components/ComingSoon';

const ApexLegends = () => {
  return <ComingSoon />;
};

// ApexLegends.getInitialProps = async ({ req }) => {
//   const res = await axios({
//     url: 'https://public-api.tracker.gg/v2/apex/standard/profile/origin/BazESO',
//     method: 'GET',
//     headers: {
//       'TRN-Api-Key': '82316fdd-b5a6-483a-b4ae-d1fcaa54ca3a',
//       'Access-Control-Allow-Origin': 'https://tracker.gg'
//     }
//   });
//   const datas = res.data.data;
//   console.log(datas);
//   return { datas };
// };

export default ApexLegends;
