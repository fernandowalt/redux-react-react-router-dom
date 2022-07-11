/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { creatingNewProducts } from "../actions/productActions";
import { showAlert } from "../actions/alertActions";

export const NewProduct = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	const dispatch = useDispatch();
	const { error, loading } = useSelector(state => state.products);
	const { alert } = useSelector(state => state.alert);

	const navigate = useNavigate();

	const addProduct = product => dispatch(creatingNewProducts(product));
	const handleSubmit = e => {
		e.preventDefault();

		if (name.trim() === "" || price <= 0) {
			const alert = { msg: "todos los campòs son requeridos", classes: "alert alert-danger text-center text-uppercase p3" };

			dispatch(showAlert(alert));
			return;
		}
		addProduct({ name, price });
		navigate("/");
	};
	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-2 font-weight-bold">Agregar Nuevo Producto</h2>
						{alert ? <p className={alert.classes}>{alert.msg}</p> : null}
						<form className="form-group" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="nombre">Nombre</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre Producto"
									name="nombre"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor=""></label>
								<input
									type="number"
									className="form-control"
									placeholder="precio"
									name="Precio"
									value={price}
									onChange={e => setPrice(Number(e.target.value))}
								/>
							</div>
							<input type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-3" value="Agregar" />
						</form>
						{loading ? <p>Cargando...</p> : null}
						{error ? <p className="alert alert-danger p2 text-center">Hubo un error</p> : null}
					</div>
				</div>
			</div>
		</div>
	);
};
