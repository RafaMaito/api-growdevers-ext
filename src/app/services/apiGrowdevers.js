import axios from 'axios';

const apiGrowdevers = axios.create({
  baseURL: 'https://growdev-test-node.herokuapp.com',
});

export default apiGrowdevers;
