import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table ,Preloader, Button } from 'react-materialize';
import * as comentariosActions from '../../actions/comentariosActions';

class Comentarios extends Component {

	componentDidMount() {
		this.props.traerComentarios();
	}

	desplegarComentarios = () => (
		<Table hoverable={true}>
			<thead>
				<tr>
					<th>Correo</th>
					<th>Título</th>
					<th>Comentario</th>
				</tr>
			</thead>

			<tbody>
				{
					this.props.comentarios.map((elem, index) => (
						<tr key={ elem.email }>
							<td>{ elem.email }</td>
							<td>{ elem.name }</td>
							<td>{ elem.body }</td>
						</tr>
					))
				}
			</tbody>
		</Table>
	);

	desplegarError = () => (
		<h3 className="red-text">
			{ this.props.error }
		</h3>
	);

	desplegarCargando = () => (
		<div className="center">
			<Preloader size='big'/>
		</div>
	);
	
	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Comentarios
					&nbsp;
					<Button node='a' href='/comentarios/agregar' floating large className='blue' waves='light' icon='add' />
				</h3>
				{ (this.props.cargando) ? this.desplegarCargando() : '' }
				{ (this.props.error) ? this.desplegarError() : this.desplegarComentarios() }
			</div>
		);
	}
}

const mapStateToProps = ({ comentariosReducer }) =>
{
	// comentariosReducer = { comentarios, cargando, error }
	// Como se quieren usar los 3 atributos, se manda tal cual el objeto
	return comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(Comentarios);
