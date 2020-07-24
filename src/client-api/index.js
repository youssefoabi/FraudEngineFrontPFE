import config from 'react-global-configuration';
import httpClient from '@cdiscount/http-client';

export default function clientApi() {
  const client = httpClient({
    baseUrl: config.get('API_URL'),
  });

  return {
    createCriterion: criterion => client.post('/criteria', criterion),
    fetchCriterion: id => client.get(`/criteria/${id}`),
    updateCriterion: criterion => client.put('/criteria', criterion),
    getCriteria: () => client.get('/criteria'),
    deleteCriterion: id => client.delete(`/criteria/${id}`),

    createRule: rule => client.post('/rules', rule),
    fetchRule: id => client.get(`/rules/${id}`),
    updateRule: rule => client.put('/rules', rule),
    getRules: () => client.get('/rules'),
    deleteRule: id => client.delete(`/rules/${id}`),
  };
}
