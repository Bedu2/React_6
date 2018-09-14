import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as comentariosActions from '../../actions/comentariosActions';

class Comentarios extends Component {

	componentDidMount() {
		this.props.traerComentarios();
		console.log('this.props: ', this.props);
	}

	desplegarComentarios = () => (
		this.props.comentarios.map((elem, index) => (
			<p key={elem.email}>
				{elem.body}
			</p>
		))
	);
	
	render() {
		return (
			<div>
				{ this.desplegarComentarios() }
			</div>
		);
	}
}

const mapStateToProps = ({ comentariosReducer: { comentarios } }) =>
{
	return { comentarios };
}

export default connect(mapStateToProps, comentariosActions)(Comentarios);
