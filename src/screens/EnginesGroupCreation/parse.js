import { isNil, values } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

const parse = enginesGroup => {
  if (isNil(enginesGroup)) return null;

  const { groupId, groupCode, groupName, isEnable, engines } = enginesGroup;

  return {
    groupId,
    groupCode,
    groupName,
    isEnable,
    engines: isNilOrEmpty(engines) ? [] : values(engines),
  };
};
export default parse;
