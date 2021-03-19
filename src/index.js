import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

var contactos = [
	
		{
			id: 1,
			nombre: "Cesar",
			apellido: "Mendez",
			telefono: "123456789", 
			correo: "patelito@gmail.com",
			notas: "Hola :)"
		},
		{
			id: 2,
			nombre: "Rangel",
			apellido: "Acevedo",
			telefono: "123456789",
			correo: "quipe@gmail.com",
			notas: "Adios :)"
		}

];



function guardarPanel(){

	const jsxGuardar = (
	<div class="container">

		<label class="text-dark"> Contacto nuevo </label>

		<div class="form-group">
			<input class="form-control" required type="text" id="nombre" placeholder="Nombre: "></input>
		</div>

		<div class="form-group">
			<input class="form-control" required type="text" id="apellido" placeholder="Apellido: "></input>
		</div>

		<div class="form-group">
			<input class="form-control" required type="text" id="celular" placeholder="Celular: "></input>
		</div>

		<div class="form-group">
			<input class="form-control" required type="text" id="correo" placeholder="Correo: "></input>
		</div>

		<div class="form-group">
			<textarea class="form-control" required type="text" id="notas" placeholder="Notas: "></textarea>
		</div>

		<div class="row">
			<button class="col-md-3 btn btn-success" onClick={guardarContacto}> Guardar </button>
			<button class="col-md-3 btn btn-success" onClick={menuPrincipal}> Cancelar </button>
		</div>
	</div>
	);

	ReactDOM.render(jsxGuardar, document.getElementById('root'));

}

function guardarContacto(){

	const nombre = document.getElementById('nombre').value;
	const apellido = document.getElementById('apellido').value;
	const telefono = document.getElementById('celular').value;
	const correo = document.getElementById('correo').value;
	const notas = document.getElementById('notas').value;

	contactos.push({id: contactos.length+1, nombre: nombre, apellido: apellido, telefono: telefono, correo: correo, notas: notas});

	alert("Se ha agregado un nuevo contacto");
	
	menuPrincipal();

}


function modificarPanel(){

	const jsxModificar = (
		<div class="container">
	
			<label class="text-dark"> Contacto nuevo </label>
	
			<div class="form-group">
				<input class="form-control" required type="text" id="nombre" placeholder="Nombre: "></input>
			</div>
	
			<div class="form-group">
				<input class="form-control" required type="text" id="apellido" placeholder="Apellido: "></input>
			</div>
	
			<div class="form-group">
				<input class="form-control" required type="text" id="celular" placeholder="Celular: "></input>
			</div>
	
			<div class="form-group">
				<input class="form-control" required type="text" id="correo" placeholder="Correo: "></input>
			</div>
	
			<div class="form-group">
				<textarea class="form-control" required type="text" id="notas" placeholder="Notas: "></textarea>
			</div>
	
			<div class="row">
				<button class="col-md-3 btn btn-success" onClick={guardarContacto}> Guardar </button>
				<button class="col-md-3 btn btn-success" onClick={menuPrincipal}> Cancelar </button>
			</div>
		</div>
		);
		
	ReactDOM.render(jsxModificar, document.getElementById('root'));

}

function eliminarPanel(){}

function menuPrincipal(persona){
	const jsx = (
		<div class="container-fluid row" >
			<br /><br />
			<div class="col-md-9 border bg-light">

				<h2 class="col-md-12"> Contactos </h2>

				<table class="col-md-12 table table-bordered">

					<thead class="thead-dark">
					<tr>
						<th> ID </th>
						<th> Nombre </th>
						<th> Apellido </th>
						<th> Celular </th>
						<th> Correo </th>
						<th> Notas </th>
					</tr>
					</thead>

					<tbody>
						{contactos.map((elemento) => (
							<tr>
								<td>{elemento.id}</td>
								<td>{elemento.nombre}</td>
								<td>{elemento.apellido}</td>
								<td>{elemento.telefono}</td>
								<td>{elemento.correo}</td>
								<td>{elemento.notas}</td>
							</tr>
						))}
					</tbody>
						
				</table>
			</div>

			<div class="col-md-3 form-group">
				<br /><br />
				<button class="btn btn-primary" onClick={guardarPanel}> Guardar </button> <br /> <br />
				<button class="btn btn-danger" onClick={eliminarPanel}> Eliminar </button> <br /> <br />
				<button class="btn btn-info" onClick={modificarPanel}> Modificar </button> <br /> <br />
				
			</div>
		</div>
	);

	ReactDOM.render(jsx, document.getElementById('root'));
}

menuPrincipal();