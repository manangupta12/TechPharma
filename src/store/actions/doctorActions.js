export const createPrescription = (id,prescription) => {
      return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const doctorId = getState().firebase.auth.uid;
        const pres = {
          ...prescription,
          doctorName:profile.firstName+" "+profile.lastName,
          doctorId:doctorId,
          createdAt : Date.now()
        }
        console.log(pres)
        const ref = firestore.collection('prescription').doc(String(id));
        ref.get().then((doc) => {
            ref.update({prescription: pres})
            .then(() => {
              dispatch({ type: 'CREATE_PRESCRIPTION_SUCCESS' });
            }).catch(err => {
              dispatch({ type: 'CREATE_PRESCRIPTION_ERROR' }, err);
            });
      })
    }
  };

export const changeStatus = (id,status) => {
  console.log(id,status)
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const ref = firestore.collection('prescription').doc(String(id));
    ref.get().then((doc) => {
        ref.update({status: status})
        .then(() => {
          dispatch({ type: 'CHANGE_STATUS_SUCCESS' });
        }).catch(err => {
          dispatch({ type: 'CHANGE_STATUS_ERROR' }, err);
        });
  })
}
}