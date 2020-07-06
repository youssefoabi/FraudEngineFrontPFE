import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import useColumns from '../useColumns';

jest.mock('@cdiscount/backoffice-ui', () => ({
  useStyles: () => ({}),
}));

const testDate = new Date('1990-12-25T12:12:00');

describe('useColumns', () => {
  describe('columns', () => {
    itReturnsCorrectResult(useColumns());
  });
  describe('renderInlineCell', () => {
    const { columns } = useColumns();
    itReturnsCorrectResult(columns[0].render());
  });
  describe('renderInlineDateCell', () => {
    const { columns } = useColumns();
    itReturnsCorrectResult(columns[2].render(testDate));
  });
});
