import axios from 'axios';
import { EMPEZAR, EXITOSO, ERROR } from '../types/comentariosTypes';

export const traerComentarios = () => async (dispatch) =>
{
	dispatch({ type: EMPEZAR });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
		dispatch({ type: EXITOSO, payload: response.data });
	}
	catch (err) {
		dispatch({ type: ERROR, payload: err.message });
	}
};

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({ type, payload: valor });
};