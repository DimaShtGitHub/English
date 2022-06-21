import axios from "axios";

export const setUser = (user) => ({type: 'SET_USER', payload: user.data})

export const getUser = () => async (dispatch) => {
  const user = await axios.get('http://localhost:3001/auth/session', {
    withCredentials: true,
  })
  dispatch(setUser(user))
}
