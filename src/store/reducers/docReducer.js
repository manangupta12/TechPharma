const initState = {}

const docReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PRESCRIPTION_SUCCESS':
      console.log('create prescription success');
      return state;
    case 'CREATE_PRESCRIPTION_ERROR':
      console.log('create prescription error');
      return state;
    case 'CHANGE_STATUS_SUCCESS':
      console.log('change status success');
      return state;
    case 'CHANGE_STATUS_ERROR':
      console.log('change status error');
      return state;
    default:
      return state;
  }
};

export default docReducer;