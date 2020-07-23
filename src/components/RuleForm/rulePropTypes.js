import { arrayOf, bool, date, number, shape, string } from 'prop-types';

export const criteriaValuesPropTypes = arrayOf(
  shape({
    criterion: string,
    operator: string,
    value: string,
  }),
);

export const simulationsPropTypes = arrayOf(
  shape({
    totalImpact: number,
    totalRessources: number,
  }),
);

export const rulePropTypes = shape({
  id: number,
  name: string,
  description: string,
  isValidated: bool,
  isActivated: bool,
  priority: number,
  validatedBy: string,
  editedBy: string,
  comment: string,
  version: number,
  editedAction: string,
  criteriaValues: criteriaValuesPropTypes,
  createdAt: date,
  modifiedAt: date,
  simulations: simulationsPropTypes,
});
