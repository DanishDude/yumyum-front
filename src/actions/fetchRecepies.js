const url = 'http://localhost:5000/api';

export const startFetchRecepies = () => ({
  type: 'START_FETCH_RECEPIES',
});

export const fetchSuccessRecepies = (recepies) => ({
  type: 'FETCH_SUCCESS_RECEPIES',
  recepies,
});

export const fetchErrorRecepies = err => ({
  type: 'FETCH_ERROR_RECEPIES',
  err,
});

export const asyncFetchRecepies = () => (dispatch) => {
  dispatch(startFetchRecepies());
  fetch(`${url}/recepie`)
    .then(res => res.json())
    .then(recepies => {
      dispatch(fetchSuccessRecepies(recepies));
    })
    .catch(() => {
      dispatch(fetchErrorRecepies('Error loading recepies'));
    });
};
