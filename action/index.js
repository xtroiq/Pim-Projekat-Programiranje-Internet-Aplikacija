export const getUserData =
  (onSuccess = () => {}) =>(dispatch, getState) => {
    const {data} = getState();
    const user = data.data.data;

    
  };