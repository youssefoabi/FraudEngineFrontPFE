import { number, shape, string } from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const criterionPropTypes = shape({
  id: number,
  code: string,
  explanation: string,
  type: string,
});
