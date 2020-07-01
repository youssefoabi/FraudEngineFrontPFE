import { addIndex, find, fromPairs, isNil, map, pathOr, pipe, prop } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

import { typesOptions } from '../../components/SearchCriteriaSettings/components/FieldsBlock/config';

const toTimestamp = date => (date ? Number(new Date(date)) : null);

const parseEngine = engine => {
  if (isNil(engine)) return null;

  const {
    id,
    code,
    name,
    isEnable,
    scopes,
    inputFields,
    backgroundImages,
    marketingText,
    searchText,
    createdAt,
    modifiedAt,
  } = engine;

  const { text, isEnable: isMarketingTextEnable } = marketingText || {};

  const mapScopes = allScopes => {
    if (isNilOrEmpty(allScopes)) return null;

    return pipe(
      map(scope => [prop('scopeId', scope), scope]),
      fromPairs,
    )(allScopes);
  };

  const mapInputFields = allInputFields => {
    if (isNilOrEmpty(allInputFields)) return null;
    const mapIndexed = addIndex(map);

    return pipe(
      map(inputField => {
        const type = pathOr(null, ['type'], inputField);
        return { ...(inputField || {}), type: find(option => type === prop('value', option), typesOptions) };
      }),
      mapIndexed((inputField, index) => [index, inputField]),
      fromPairs,
    )(allInputFields);
  };

  const mapBackgroundImages = allBackgroundImages => {
    if (isNilOrEmpty(allBackgroundImages)) return null;

    const mapIndexed = addIndex(map);
    return pipe(
      mapIndexed((backgroundImage, index) => [index, backgroundImage]),
      fromPairs,
    )(allBackgroundImages);
  };

  const firstFieldId = pathOr(null, ['0', 'id'], inputFields);
  const secondFieldId = pathOr(null, ['1', 'id'], inputFields);

  return {
    id: code,
    engineId: id,
    name,
    isEnable,
    scopes: mapScopes(scopes),
    inputFields: mapInputFields(inputFields),
    backgroundImages: mapBackgroundImages(backgroundImages),
    marketingText: text,
    isMarketingTextEnable,
    searchText,
    createdAt,
    modifiedAt: toTimestamp(modifiedAt),
    firstFieldId,
    secondFieldId,
  };
};
export default parseEngine;
