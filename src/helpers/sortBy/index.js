import { pathOr, pipe, prop, sort, sortWith, toString } from 'ramda';

function compareString(a, b) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: 'base',
  });
}

function alphanumericComparator(order, orderBy) {
  const sign = order === 'asc' ? 1 : -1;

  const pathTo = pipe(pathOr('', orderBy), toString);
  return (a, b) => sign * compareString(pathTo(a), pathTo(b));
}

/**
 * Compares two dates
 * @function dateComparator
 * @param {*} order n.b. ascending means latest dates first and descending means earliest date first
 * @param {*} orderBy
 */
export function dateComparator(order, orderBy) {
  const sign = order === 'asc' ? 1 : -1;

  return (a, b) => {
    const dateA = prop(orderBy, a);
    const dateB = prop(orderBy, b);

    if (dateA === dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;
    return sign * Math.sign(dateA - dateB);
  };
}

export default function sortBy(order, orderBy) {
  switch (orderBy) {
    case 'modifiedAt':
      return sortWith([dateComparator(order, 'modifiedAt')]);
    case 'urlTemplate':
    case 'name':
    case 'isEnable':
    case 'id':
    case 'scopes':
      return sort(alphanumericComparator(order, [orderBy]));
    default:
      return sortWith([dateComparator('desc', 'modifiedAt')]);
  }
}
