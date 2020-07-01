import { prop } from 'ramda';
import config from 'react-global-configuration';
import httpClient from '@cdiscount/http-client';

import enginesGroupMock from '../screens/EnginesGroupEdition/__fixtures__';

export default function clientApi() {
  const client = httpClient({
    baseUrl: config.get('API_URL'),
  });

  return {
    deleteScope: id => client.delete(`/scopes/${id}`),
    getScope: id => client.get(`/scopes/${id}`),
    getScopes: () => client.get('/scopes'),
    saveCreateScope: scope => client.post('/scopes', scope),
    saveEditScope: scope => client.put(`/scopes/${prop('id', scope)}`, scope),
    createEngine: engine => client.post('/engines', engine),
    fetchEngine: engineCode => client.get(`/engines/${engineCode}`),
    updateEngine: engine => client.put(`/engines/${prop('engineId', engine)}`, engine),
    getEngines: () => client.get('/engines'),
    deleteEngine: engineCode => client.delete(`/engines/${engineCode}`),
    createEnginesGroup: enginesGroup =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            enginesGroup.groupName === 'error'
              ? reject(new Error('create enginesGroup error'))
              : resolve({ messgae: 'create enginesGroup success' }),
          3000,
        ),
      ),
    fetchEnginesGroup: id =>
      new Promise(resolve => setTimeout(() => resolve({ data: enginesGroupMock, id }), 3000)),
    updateEnginesGroup: enginesGroup =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            enginesGroup.groupName === 'error'
              ? reject(new Error('update enginesGroup error'))
              : resolve({ messgae: 'update enginesGroup success' }),
          3000,
        ),
      ),
  };
}
