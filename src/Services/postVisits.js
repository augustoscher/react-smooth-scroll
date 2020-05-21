import axios from 'axios';
import ignoreAnalytics from './utils';

const BASE_URL = 'https://uqofvhxtyj.execute-api.us-east-1.amazonaws.com/dev/visits';

export default async () => {
  if (!ignoreAnalytics()) {
    await axios.post(`${BASE_URL}`);
  }
};

