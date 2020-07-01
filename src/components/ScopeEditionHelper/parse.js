const pathParamsRegex = /{((?!=)[^}])+}/g;
const queryParamsRegex = /{([^}])+=}/g;
const pathParamNameRegex = /[^{}]+/;
const queryParamNameRegex = /[^{}=]+/;

const parseParams = (url, regex) => url.match(regex);
const parseParamsObjects = (params, regex) =>
  params?.map(s => ({
    id: s,
    name: s.match(regex)[0],
  }));

const parsePathParams = url => parseParams(url, pathParamsRegex);
const parsePathParamsObjects = params => parseParamsObjects(params, pathParamNameRegex);
const parseQueryParams = url => parseParams(url, queryParamsRegex);
const parseQueryParamsObjects = params => parseParamsObjects(params, queryParamNameRegex);

const parseParamsObjectsArray = url => {
  const pathParams = parsePathParams(url);
  const queryParams = parseQueryParams(url);

  const pathParamsObjects = parsePathParamsObjects(pathParams);
  const queryParamsObjects = parseQueryParamsObjects(queryParams);

  const concatIfNotNull = (...arrays) => [].concat(...arrays.filter(Array.isArray));

  return concatIfNotNull([], pathParamsObjects, queryParamsObjects);
};

export { parsePathParams, parsePathParamsObjects, parseQueryParams, parseQueryParamsObjects };
export default parseParamsObjectsArray;
