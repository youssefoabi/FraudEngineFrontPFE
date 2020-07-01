export default new Array(19).fill(0).map((_, index) => ({
  id: index + 10,
  name: `Engine ${index}${1}`,
  urlTemplate: `stringA${index}${1}`,
  modifiedAt: new Date(`201${parseInt(index / 2, 10)}-0${parseInt((index + 3) / 3, 10)}-30T01:11:00+00:00`),
  isEnable: index % 3 === 0,
  scopes: new Array(index + 1).fill(0).map((value, idx) => `gamme${index}${value + idx}`),
}));
