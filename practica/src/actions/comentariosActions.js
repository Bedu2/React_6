import axios from 'axios';
import { EMPEZAR, EXITOSO, ERROR, FORMA_EXITOSA } from '../types/comentariosTypes';

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

export const enviarForma = (valores) => async (dispatch) => {
	dispatch({ type: EMPEZAR });

	try {
		await axios.post('https://jsonplaceholder.tymnjpicode.com/comments', valores);
		window.Materialize.toast('Comentario guardado exitosamente.', 5 * 1000);

		dispatch({ type: FORMA_EXITOSA });
	}
	catch(error) {
		dispatch({ type: ERROR, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};