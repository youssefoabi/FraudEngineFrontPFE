import { fromPairs, isNil, map, pipe, prop } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

const toTimestamp = date => (date ? Number(new Date(date)) : null);

const parseEnginesGroup = enginesGroup => {
  if (isNil(enginesGroup)) return null;

  const { groupId, groupCode, groupName, isEnable, engines, createdAt, modifiedAt } = enginesGroup;

  const mapEngines = allEngines => {
    if (isNilOrEmpty(allEngines)) return null;

    return pipe(
      map(engine => [prop('engineId', engine), engine]),
      fromPairs,
    )(allEngines);
  };

  return {
    groupId,
    groupCode,
    groupName,
    isEnable,
    engines: mapEngines(engines),
    createdAt,
    modifiedAt: toTimestamp(modifiedAt),
  };
};
export default parseEnginesGroup;
