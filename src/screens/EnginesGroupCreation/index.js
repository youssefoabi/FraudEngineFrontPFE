import React, { useState } from 'react';

import EnginesGroupScreen from '../EnginesGroupScreen';
import useCreateEnginesGroup from './useCreateEnginesGroup';

function EnginesGroupCreation() {
  const [enginesGroup, setEnginesGroup] = useState({ isEnable: false });

  const { createEnginesGroup } = useCreateEnginesGroup();

  return (
    <EnginesGroupScreen
      enginesGroup={enginesGroup}
      action={createEnginesGroup}
      title="Création"
      setEnginesGroup={setEnginesGroup}
    />
  );
}

export default EnginesGroupCreation;
