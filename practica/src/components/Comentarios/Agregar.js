import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Preloader } from 'react-materialize';
import axios from 'axios';
import * as comentariosActions from '../../actions/comentariosActions';
import {
	UPDATE_NOMBRE,
	UPDATE_CORREO,
	UPDATE_COMENTARIO
} from '../../types/comentariosTypes';

class Agregar extends Component {
//----> 
	// handleChange = event => this.setState({ [event.target.name]: event.target.value });

	handleChange = (event, type) => {
		this.props.cambiarInput(type, event.target.value);
	};

//----> 
	enviar = async () => {
		this.setState({ cargando: true });

		const {
			nombre: name,
			correo: email,
			comentario: body
		} = this.state;

		const valores = { name, email, body };

		try {
			await axios.post('https://jsonplaceholder.typicode.com/comments', valores);
			window.Materialize.toast('Comentario guardado exitosamente.', 5 * 1000);
			this.setState({
				nombre: '',
				correo: '',
				comentario: ''
			});
		}
		catch(error) {
			window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
		}

		this.setState({ cargando: false });
	};

	render() {
		return (
			<div>
				<div className="row">
					<Input
						s={6}
						label="Nombre Completo"
						value={this.props.nombre}
						onChange={
							(event) => this.handleChange(event, UPDATE_NOMBRE)
						}
						name="nombre"
					/>
					<Input
						s={6} 
						label="Correo"
						type="email"
						value={this.props.correo}
						onChange={
							(event) => this.handleChange(event, UPDATE_CORREO)
						}
						name="correo"
					/>
				</div>
				<div className="row">
					<Input
						s={12}
						label="Comentario"
						type="textarea"
						value={this.props.comentario}
						onChange={
							(event) => this.handleChange(event, UPDATE_COMENTARIO)
						}
						name="comentario"
					/>
				</div>
				<div className="row">
					<div className="col s6 offset-s3 center">
						<Button
							style={{width: '100%'}}
							waves='light'
							onClick={this.enviar}
							disabled={this.props.cargando}
						>
							Enviar
						</Button>
						<br /><br />
						<Preloader active={this.props.cargando} size='big'/>
					</div>
				</div>
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

export default connect(mapStateToProps, comentariosActions)(Agregar);
