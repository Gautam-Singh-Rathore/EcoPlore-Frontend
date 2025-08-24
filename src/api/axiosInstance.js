
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://api.greenplore.com/api/v1', 
  withCredentials: true
});

export default axiosInstance;