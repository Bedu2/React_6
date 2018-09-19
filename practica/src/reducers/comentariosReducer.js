import {
	EMPEZAR,
	EXITOSO,
	ERROR,
	UPDATE_NOMBRE,
	UPDATE_CORREO,
	UPDATE_COMENTARIO
} from '../types/comentariosTypes';

const INITIAL_STATE = {
	comentarios: [],
	cargando: false,
	error: '',
	nombre: '',
	correo: '',
	comentario: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case EMPEZAR: return { ...state, cargando: true, error: '' };
		case EXITOSO: return { ...state, comentarios: action.payload, cargando: false, error: '' };
		case ERROR: return { ...state, error: action.payload, cargando: false };
		case UPDATE_NOMBRE: return { ...state, nombre: action.payload };
		case UPDATE_CORREO: return { ...state, correo: action.payload };
		case UPDATE_COMENTARIO: return { ...state, comentario: action.payload };
		default: return state;
	}
}