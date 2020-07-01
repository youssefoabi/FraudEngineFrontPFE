import { isNil, map, pathOr, pipe, values } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

import { FIELDS_BY_ID } from '../../components/SearchCriteriaSettings/components/FieldsBlock/config';

const parse = engine => {
  if (isNil(engine)) return null;

  const {
    id,
    name,
    isEnable,
    scopes,
    inputFields,
    backgroundImages,
    marketingText,
    isMarketingTextEnable,
    searchText,
    engineId,
    createdAt,
    modifiedAt,
  } = engine;

  const logo = {
    urlImageDesktop: 'string',
    urlLinkDesktop: 'string',
    urlImageMobile: 'string',
    urlLinkMobile: 'string',
    order: 1,
    isEnable: true,
    alt: 'string',
    openInNewTab: true,
  };

  const mapParameter = param => {
    if (isNilOrEmpty(param)) return null;

    const { scopeId: scopeParameterId, key: label } = param || {};
    return { ...param, scopeParameterId, label };
  };

  const mapInputFields = allInputFields => {
    if (isNilOrEmpty(allInputFields)) return null;

    return pipe(
      values,
      map(inputField => {
        const type = pathOr(null, ['type', 'value'], inputField);
        const parameters = pathOr([], ['parameters'], inputField);
        const { label } = inputField || {};
        const newParameters = map(mapParameter, parameters);
        return {
          ...(inputField || {}),
          type,
          fieldTypeId: FIELDS_BY_ID[type],
          inputFieldLabel: label,
          parameters: newParameters,
        };
      }),
    )(allInputFields);
  };

  return {
    engineCode: id,
    code: id,
    name,
    isEnable,
    scopes: isNilOrEmpty(scopes) ? [] : values(scopes),
    inputFields: isNilOrEmpty(inputFields) ? [] : mapInputFields(inputFields),
    backgroundImages: isNilOrEmpty(backgroundImages) ? [] : values(backgroundImages),
    marketingText: {
      text: marketingText,
      isEnable: isMarketingTextEnable,
    },
    searchText,
    engineId,
    logo,
    createdAt,
    modifiedAt,
  };
};
export default parse;
