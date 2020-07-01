import { path } from 'ramda';
import { useSelector } from 'react-redux';

export default function useNameSelector(id) {
  const selectName = useSelector(path(['entities', 'scopes', 'byId', id, 'name']));

  return { selectName };
}
