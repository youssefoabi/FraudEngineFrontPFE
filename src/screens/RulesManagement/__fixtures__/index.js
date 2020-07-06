export default new Array(19).fill(0).map((_, index) => ({
  id: index + 10,
  name: `Rule ${index}${1}`,
  description: `Description ${index}${1}`,
  modifiedAt: new Date(`201${parseInt(index / 2, 10)}-0${parseInt((index + 3) / 3, 10)}-30T01:11:00+00:00`),
  isEnable: index % 3 === 0,
  isValidated: index % 2 === 0,
  isActivated: index % 4 === 0,
  priority: index % 2,
  editedBy: `Youssef ${index}${1}`,
  nbPendingOrders: 0,
}));
