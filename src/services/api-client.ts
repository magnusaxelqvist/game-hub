import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '37a1829651e24b3698a154429382e852',
  }
});

