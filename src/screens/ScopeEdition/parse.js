import { isNil } from 'ramda';

const toTimestamp = date => (date ? Number(new Date(date)) : null);

const parseScope = scope => {
  if (isNil(scope)) return null;

  const { id, modifiedAt, name, urlTemplate } = scope;

  return {
    id,
    modifiedAt: toTimestamp(modifiedAt),
    name,
    urlTemplate,
  };
};

export default parseScope;
