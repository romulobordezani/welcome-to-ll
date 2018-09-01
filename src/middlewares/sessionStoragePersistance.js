// /* eslint-env browser */
// eslint-disable-next-line
const sessionStoragePersistance = store => next => action => {
  if (action.type === 'ADDED_ADDRESS' || action.type === 'REMOVED_ADDRESS') {
    const addressList = JSON.stringify(store.getState().address.list);
    if (localStorage.getItem('cep_list') !== addressList) {
      localStorage.setItem('cep_list', addressList);
    }
  }
  next(action);
};

export default sessionStoragePersistance;
