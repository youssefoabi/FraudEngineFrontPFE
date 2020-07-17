// import { prop } from 'ramda';
// import config from 'react-global-configuration';
// import httpClient from '@cdiscount/http-client';

import criteria from '../screens/CriteriaManagement/__fixtures__';
import criterionMock from '../screens/CriterionEdition/__fixtures__';
import ruleMock from '../screens/RuleEdition/__fixtures__';
import rules from '../screens/RulesManagement/__fixtures__';

export default function clientApi() {
  // const client = httpClient({
  //   baseUrl: config.get('API_URL'),
  // });

  return {
    // createEngine: engine => client.post('/engines', engine),
    // fetchEngine: engineCode => client.get(`/engines/${engineCode}`),
    // updateEngine: engine => client.put(`/engines/${prop('engineId', engine)}`, engine),
    // getEngines: () => client.get('/engines'),
    // deleteEngine: engineCode => client.delete(`/engines/${engineCode}`),

    createRule: rule =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            rule.name === 'error'
              ? reject(new Error('create rule error'))
              : resolve({ messgae: 'create rule success' }),
          3000,
        ),
      ),
    fetchRule: id => new Promise(resolve => setTimeout(() => resolve({ data: ruleMock, id }), 3000)),
    updateRule: rule =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            rule.name === 'error'
              ? reject(new Error('update rule error'))
              : resolve({ messgae: 'update rule success' }),
          3000,
        ),
      ),
    getRules: () => new Promise(resolve => resolve({ data: rules })),
    deleteRule: id =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            id % 2 === 0 ? reject(new Error('delete rule error')) : resolve({ messgae: 'rule deleted' }),
          3000,
        ),
      ),
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
  };
}
