import { values } from 'ramda';

export const KeysOptions = options => ({
  placeholder: 'Variable correspondante',
  options,
});

export const ExternalCodeByIds = {
  1: { value: { externalCode: 1 }, label: 'Commune' },
  2: { value: { externalCode: 2 }, label: 'Code postal' },
  3: { value: { externalCode: 3 }, label: 'Latitude' },
  4: { value: { externalCode: 4 }, label: 'Longitude' },
};

export const ExternalCodeIdsOptions = {
  placeholder: 'Attribut',
  options: values(ExternalCodeByIds),
};
