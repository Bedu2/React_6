import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as comentariosActions from '../../actions/comentariosActions';

class Comentarios extends Component {

	componentDidMount() {
		this.props.traerComentarios();
	}
	
	render() {
		console.log(this.props.comentariosReducer);
		return (
			<div>
				vsfve
			</div>
		);
	}
}

const mapStateToProps = (reducers) =>
{
	return reducers;
}

export default connect(mapStateToProps, comentariosActions)(Comentarios);
