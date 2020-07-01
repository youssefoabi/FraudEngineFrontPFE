import { arrayOf, bool, date, number, shape, string } from 'prop-types';

export const scopesPropTypes = arrayOf(
  shape({
    scopeId: number,
    name: string,
    order: number,
    isEnable: bool,
  }),
);

export const parametersPropTypes = arrayOf(
  shape({
    id: number,
    scopeId: number,
    key: string,
    externalCodeId: number,
  }),
);

export const fieldsPropTypes = arrayOf(
  shape({
    id: number,
    type: string,
    order: number,
    label: string,
    isEnable: bool,
    isMandatory: bool,
    parameters: parametersPropTypes,
  }),
);

export const backgroundImagesPropTypes = arrayOf(
  shape({
    order: number,
    urlImageDesktop: string,
    urlLinkDesktop: string,
    urlImageMobile: string,
    urlLinkMobile: string,
    alt: string,
    openInNewTab: true,
    isEnable: true,
  }),
);

export const enginePropTypes = shape({
  id: number,
  code: number,
  name: string,
  isEnable: bool,
  scopes: scopesPropTypes,
  inputFields: fieldsPropTypes,
  backgroundImages: backgroundImagesPropTypes,
  marketingText: string,
  isMarketingTextEnable: bool,
  searchText: string,
  createdAt: date,
  modifiedAt: date,
});
