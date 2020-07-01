import { pathOrNull } from '@cdiscount/ramda-utils';
import { prop } from 'ramda';
import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

import clientApi from '../../client-api';
import EnginesGroupScreen from '../EnginesGroupScreen';
import parseEnginesGroup from './parse';
import useSaveEditEnginesGroup from './useSaveEditEnginesGroup';

function EnginesGroupEdition() {
  const [enginesGroup, setEnginesGroup] = useState({});
  const { match } = useReactRouter();

  const { saveEditEnginesGroup } = useSaveEditEnginesGroup();

  useEffect(() => {
    const id = pathOrNull(['params', 'id'], match);
    clientApi()
      .fetchEnginesGroup(id)
      .then(prop('data'))
      .then(rawEnginesGroup => {
        setEnginesGroup(parseEnginesGroup(rawEnginesGroup));
      });
  }, [match]);

  return (
    <EnginesGroupScreen
      enginesGroup={enginesGroup}
      action={saveEditEnginesGroup}
      title="édition"
      setEnginesGroup={setEnginesGroup}
    />
  );
}

export default EnginesGroupEdition;
