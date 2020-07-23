import { slice } from 'ramda';

export default function paginate(page = 0, rowsPerPage = 1) {
  return slice(page * rowsPerPage, (page + 1) * rowsPerPage);
}
