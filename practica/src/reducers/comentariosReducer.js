
const INITIAL_STATE = {
	comentarios: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case 'traer': return { ...state, comentarios: action.payload };
		default: return state;
	}
}