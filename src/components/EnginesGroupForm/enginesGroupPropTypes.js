import { arrayOf, bool, date, number, shape, string } from 'prop-types';

export const enginesPropTypes = arrayOf(
  shape({
    engineId: number,
    engineName: string,
    order: number,
    engineLabel: string,
    pictogramUrl: string,
    isEnable: bool,
  }),
);

export const enginesGroupPropTypes = shape({
  groupId: number,
  groupCode: number,
  groupName: string,
  isEnable: bool,
  engines: enginesPropTypes,
  createdAt: date,
  modifiedAt: date,
});
