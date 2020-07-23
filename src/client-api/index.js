import config from 'react-global-configuration';
import httpClient from '@cdiscount/http-client';

import criteria from '../screens/CriteriaManagement/__fixtures__';
import criterionMock from '../screens/CriterionEdition/__fixtures__';

export default function clientApi() {
  const client = httpClient({
    baseUrl: config.get('API_URL'),
  });

  return {
    createCriterion: criterion =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            criterion.explanation === 'error'
              ? reject(new Error('create criterion error'))
              : resolve({ messgae: 'create criterion success' }),
          3000,
        ),
      ),
    fetchCriterion: id =>
      new Promise(resolve => setTimeout(() => resolve({ data: criterionMock, id }), 3000)),
    updateCriterion: criterion =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            criterion.explanation === 'error'
              ? reject(new Error('update criterion error'))
              : resolve({ messgae: 'update criterion success' }),
          3000,
        ),
      ),
    getCriteria: () => new Promise(resolve => resolve({ data: criteria })),
    deleteCriterion: id =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            id % 2 === 0
              ? reject(new Error('delete criterion error'))
              : resolve({ messgae: 'criterion deleted' }),
          3000,
        ),
      ),
    createRule: rule => client.post('/rules', rule),
    fetchRule: id => client.get(`/rules/${id}`),
    updateRule: rule => client.put('/rules', rule),
    getRules: () => client.get('/rules'),
    deleteRule: id => client.delete(`/rules/${id}`),
  };
}
