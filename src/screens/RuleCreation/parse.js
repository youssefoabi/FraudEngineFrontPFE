import { isNil } from 'ramda';

const parse = rule => {
  if (isNil(rule)) return null;

  const { id, name, createdAt, modifiedAt } = rule;

  return {
    id,
    name,
    createdAt,
    modifiedAt,
  };
};
export default parse;
