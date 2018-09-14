import axios from 'axios';

export const traerComentarios = () => async (dispatch) =>
{
	const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
	dispatch({ type: 'traer', payload: response.data });
};

export const agregarComentarios = () => async (dispatch) =>
{
	const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
	dispatch({ type: 'traer', payload: response.data });
};